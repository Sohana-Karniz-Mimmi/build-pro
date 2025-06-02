"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import TopBar from "./TopBar";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-50">
      {/* <TopBar isScrolled={isScrolled} /> */}

      {/* Main Navigation - Sticky on scroll */}
      <nav
        className={`text-white py-[16px] transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 bg-[#323232f2]" : ""
        }`}
      >
        <div className="main_container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
              <div>
                <h2 className="text-[20px] font-bold tracking-[2px]">BUILD<span className="text-primary">PRO</span> </h2>
                <h3 className="text-[11px] tracking-[3px]">CONSTRUCTION</h3>
              </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-[32px]">
              <Link
                href="/home"
                className="hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:text-primary transition-colors font-medium"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="hover:text-primary transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:text-primary transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="/shop"
                className="hover:text-primary transition-colors font-medium"
              >
                Shop
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-[24px] w-[24px]" />
              ) : (
                <Menu className="h-[24px] w-[24px]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-[16px] py-[16px] border-t border-gray-700">
              <div className="flex flex-col space-y-[16px]">
                <Link
                  href="#home"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#projects"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="#blog"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="#shop"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Shop
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
