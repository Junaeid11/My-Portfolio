/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookie from "js-cookie";
import { Menu, X } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import logo from '@/assets/ChatGPT Image Apr 14, 2025, 10_36_42 PM-photoaidcom-cropped (2).png';

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const token = Cookie.get("accessToken");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const role = decodedToken?.role;
        setIsAdmin(role === "admin");
      } catch (error) {
        console.error("Failed to decode token:", error);
        setIsAdmin(false);
      }
    }
  }, [token]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    ...(isAdmin ? [{ href: "/dashboard", label: "Dashboard" }] : []),
  ];

  const handleLogout = () => {
    Cookie.remove("accessToken");
    signOut({ callbackUrl: '/' });
  };

  if (status === "loading") return null;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-[#030014cc] shadow-md shadow-[#000000]/30">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center h-[70px]">
        <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-all">
          <Image src={logo} alt="NoobWork Logo" width={40} height={40} className="rounded-full" />
          <span className="text-white font-bold text-lg tracking-wide">NoobWork</span>
        </Link>
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative  text-l px-3 py-1 transition-all duration-200 ${
                  pathname === href
                    ? "text-blue-500  font-extrabold"
                    : "text-white hover:text-blue-300"
                }`}
              >
                <span className="hover-underline">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          {session || token ? (
            <button
              onClick={handleLogout}
              className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition px-4 py-1.5 rounded-full text-sm font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-blue-500 border border-blue-500 hover:bg-sky-700 hover:text-white transition px-4 py-1.5 rounded-full text-sm font-semibold"
            >
              Login
            </Link>
          )}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#111111] bg-opacity-90 backdrop-blur-md rounded-b-2xl p-5 flex flex-col items-center space-y-4 text-white">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm px-4 py-2 rounded-full transition ${
                pathname === href
                  ? "bg-white/10 text-blue-400"
                  : "hover:text-blue-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          {session || token ? (
            <button
              onClick={handleLogout}
              className="border font-bold border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="border font-bold border-green-500 text-green-500 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition duration-200"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
