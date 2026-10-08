"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms-and-conditions" },
    { label: "Privacy", href: "/privacy-policy" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      isActive(path)
        ? "text-[#FF7E2C] font-bold"
        : "text-[#4b5563] hover:text-[#FF7E2C]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e7eb] transition-all duration-300 ${
        scrolled ? "shadow-md py-0" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-2.5 min-w-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/images/logo-icon.svg"
                alt="Ai Interior Logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
              <span className="text-xl font-extrabold tracking-tight text-[#111827]">
                Ai Interior
              </span>
            </Link>
          </div>

          {/* Desktop Links & Download Button */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#download"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  document
                    .getElementById("download")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm font-bold px-6 py-2.5 rounded-xl transition-all bg-[#FF7E2C] text-white hover:bg-[#E56919] active:bg-[#D45B0E] shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get App</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-[#4b5563] hover:text-[#111827] p-1.5 rounded-lg cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e7eb] animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#download"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  document
                    .getElementById("download")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
                setIsOpen(false);
              }}
              className="mt-2 text-sm font-bold text-center px-6 py-3 rounded-xl transition-all bg-[#FF7E2C] text-white hover:bg-[#E56919] shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get App</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
