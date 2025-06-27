/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookie from "js-cookie";
import { Menu, X, User, LogOut } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import logo from '@/assets/ChatGPT Image Apr 14, 2025, 10_36_42 PM-photoaidcom-cropped (2).png';

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    ...(isAdmin ? [{ href: "/dashboard", label: "Dashboard" }] : []),
  ];

  const handleLogout = () => {
    Cookie.remove("accessToken");
    signOut({ callbackUrl: '/' });
  };

  if (status === "loading") return null;

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl bg-slate-900/95 border-b border-slate-700/50 shadow-2xl' 
        : 'backdrop-blur-md bg-slate-900/80'
    }`}>
      <div className="container-custom flex justify-between items-center h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src={logo} 
              alt="Junaeid Ahmed Tanim" 
              width={40} 
              height={40} 
              className="rounded-full ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg lg:text-xl tracking-wide group-hover:text-blue-400 transition-colors duration-300">
             NoobWork
            </span>
      
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === href
                    ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Button */}
        <div className="hidden lg:flex items-center gap-3">
          {session || token ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-slate-300">
                <User size={16} />
                <span className="text-sm font-medium">
                  {session?.user?.name || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-200"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="button-primary text-sm"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-effect border-t border-slate-700/50">
          <div className="container-custom py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === href
                      ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-slate-700/50">
              {session || token ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-4 py-3 text-slate-300">
                    <User size={18} />
                    <span className="text-sm font-medium">
                      {session?.user?.name || "User"}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-200"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="block w-full text-center button-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
