"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { COMPANY_API_END_POINT } from "@/utilities/constants/constants";
import { toast } from "sonner";

export default function HireTalentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const validateSession = async () => {
  //     try {
  //       const response = await fetch(`${COMPANY_API_END_POINT}/data`, {
  //         method: "GET",
  //         credentials: "include", // Send cookies with the request
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setIsAuthenticated(true); // User is authenticated, proceed
  //         console.log(data);
  //       } else {
  //         router.push("/"); // Redirect if not authenticated
  //         console.log("unauthorized");
  //         toast.success("You dont have access to this page, please log in");
  //       }
  //     } catch (error) {
  //       console.error("Session validation error:", error);
  //       router.push("/"); // Redirect in case of error
  //       toast.success("An Error Ocurred");
  //     }
  //   };

  //   validateSession(); // Call session validation when the layout is mounted
  // }, [router]);

  // if (!isAuthenticated) {
  //   console.log("loading");
  //   return null; // Optionally render a loading spinner or message while waiting for authentication
  // }

  return (
    <main className="max-w-[2400px] mx-auto bg-[#F4F5F7] pb-28">
      {children}
    </main>
  );
}
