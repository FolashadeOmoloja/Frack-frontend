"use client";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

interface DecodedToken {
  role: string;
  exp: number;
}
export default function Navbar({ activeItem }: { activeItem?: number }) {
  const { user } = useSelector((store: any) => store.auth);
  return (
    <>
      <MainNav activeItem={activeItem} user={user} />
      <MobileNav user={user} />
    </>
  );
}
