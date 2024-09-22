import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.pathname;

  // Check if the request is for a protected route (e.g., company, talent, admin)
  const isCompanyRoute = url.startsWith("/hire-talent/dashboard");
  const isTalentRoute = url.startsWith("/talent/dashboard");
  const isAdminRoute = url.startsWith("/admin/dashboard");

  // If the route is not protected, let the request proceed
  if (!isCompanyRoute && !isTalentRoute && !isAdminRoute) {
    return NextResponse.next();
  }

  // If no token is found, redirect to the login page for protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/hire-talent", req.url)); // Redirect to the login page
  }

  try {
    // Use jose's jwtVerify to verify the token
    const secretKey = new TextEncoder().encode(process.env.COMPANY_SECRET_KEY);
    const { payload } = await jwtVerify(token, secretKey);

    // Extract the user role
    //@ts-ignore
    const userRole: string = payload.role; // Assuming 'role' is present in the token

    // Dynamic route protection based on user role
    if (isCompanyRoute && userRole === "company") {
      return NextResponse.next(); // Allow company access
    } else if (isTalentRoute && userRole === "talent") {
      return NextResponse.next(); // Allow talent access
    } else if (isAdminRoute && userRole === "admin") {
      return NextResponse.next(); // Allow admin access
    } else {
      // Redirect to unauthorized page if the role doesn't match
      return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.redirect(new URL("/hire-talent", req.url)); // Redirect to login if token verification fails
  }
}

// Specify the routes where the middleware should run
export const config = {
  matcher: [
    "/hire-talent/dashboard/:path*", // Company routes
    "/talent/dashboard/:path*", // Talent routes
    "/admin/dashboard/:path*", // Admin routes
  ],
};
