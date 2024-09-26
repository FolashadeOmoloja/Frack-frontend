import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.pathname;

  // Check if the request is for a protected route (company, talent, or admin)
  const isCompanyRoute = url.startsWith("/hire-talent/dashboard");
  const isTalentRoute = url.startsWith("/dashboard");
  const isAdminRoute = url.startsWith("/admin/dashboard");

  // If the route is not protected, let the request proceed
  if (!isCompanyRoute && !isTalentRoute && !isAdminRoute) {
    return NextResponse.next();
  }

  // If no token is found, redirect to the login page for protected routes
  if (!token) {
    if (isCompanyRoute) {
      return NextResponse.redirect(new URL("/hire-talent", req.url)); // Company login
    } else if (isTalentRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); // Talent login
    } else if (isAdminRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); // Admin login
    }
  }

  try {
    let secretKey;

    // Assign the correct secret key based on the route
    if (isCompanyRoute) {
      secretKey = new TextEncoder().encode(process.env.COMPANY_SECRET_KEY);
    } else if (isTalentRoute) {
      secretKey = new TextEncoder().encode(process.env.TALENT_SECRET_KEY);
    } else if (isAdminRoute) {
      secretKey = new TextEncoder().encode(process.env.ADMIN_SECRET_KEY);
    }

    if (!secretKey) {
      throw new Error("Secret key not found for the requested route.");
    }

    // Verify the token using the appropriate secret key
    const { payload } = await jwtVerify(token!, secretKey);

    // Extract the user role from the token payload
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
    if (isCompanyRoute) {
      return NextResponse.redirect(new URL("/hire-talent", req.url)); // Company login
    } else if (isTalentRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); // Talent login
    } else if (isAdminRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); // Admin login
    } // Redirect to login if token verification fails
  }
}

// Specify the routes where the middleware should run
export const config = {
  matcher: [
    "/hire-talent/dashboard/:path*", // Company routes
    "/dashboard/:path*", // Talent routes
    "/admin/dashboard/:path*", // Admin routes
  ],
};
