/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookie from "js-cookie";
import { Menu, X } from "lucide-react";
import { jwtDecode } from "jwt-decode";

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

  // Handle logout
  const handleLogout = () => {
    Cookie.remove("accessToken");
    signOut({ callbackUrl: '/' });
  };
  if (status === "loading") return null;

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <video autoPlay loop muted playsInline className="w-10 h-10">
            <source src="https://cdn-icons-mp4.flaticon.com/512/15586/15586068.mp4" type="video/mp4" />
          </video>
          <span className="text-xl font-bold text-black">NoobWork</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? "text-red-500 font-bold" : "text-black hover:text-green-400 transition"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 w-1/2 bg-black/50 rounded-2xl flex flex-col items-center space-y-4 p-5 shadow-lg md:hidden">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${
                  pathname === href ? "text-red-500 font-bold" : "text-white hover:text-green-400 transition"
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

        {/* Login / Logout */}
        <div className="hidden md:block">
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
      </div>
    </nav>
  );
};

export default Navbar;
