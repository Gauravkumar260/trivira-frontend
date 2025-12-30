/**
 * Filename: components/Navbar.tsx
 * Description: Main navigation bar.
 * Layout: Based on your "Best Layout" preference (Fixed height, specific flex grouping).
 * Logic: Enhanced Next.js routing and connection.
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';

// --- ASSET CONFIGURATION ---
const assets = {
  logo: "/assets/images/Logo1.svg", 
  icons: {
    search: "/assets/images/search.svg",
    cart: "/assets/images/cart.svg",
    user: "/assets/images/user.svg",
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // --- HELPER: ACTIVE STATE LOGIC ---
  const getLinkClass = (path: string) => {
    // Robust check: exact match for home, partial match for sub-sections
    const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
    
    const baseClasses = "transition-colors duration-300 text-base font-sans";
    
    // Active: Green & Bold | Inactive: Gray & Medium
    return isActive 
      ? `text-trivira-primary font-bold ${baseClasses}` 
      : `text-[#969494] font-medium hover:text-trivira-primary ${baseClasses}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm font-sans w-full h-[104px]">
      <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          
        {/* --- 1. LOGO SECTION --- */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img 
              src={assets.logo} 
              alt="Trivira Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* --- 2. DESKTOP MENU (Links + Icons) --- */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* Navigation Links */}
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/products" className={getLinkClass('/products')}>Nutraceuticals Product</Link>
          <Link href="/about" className={getLinkClass('/about')}>About Us</Link>
          <Link href="/blogs" className={getLinkClass('/blogs')}>Blogs</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact Us</Link>

          {/* Action Icons (Grouped separately with left margin) */}
          <div className="flex items-center gap-6 ml-4 border-l border-gray-100 pl-6">
            <button className="hover:scale-110 transition duration-300">
              <img src={assets.icons.search} alt="Search" className="w-6 h-6" />
            </button>
            <Link href="/cart" className="hover:scale-110 transition duration-300 relative">
              <img src={assets.icons.cart} alt="Cart" className="w-6 h-6" />
            </Link>
            <Link href="/login" className="hover:scale-110 transition duration-300">
              <img src={assets.icons.user} alt="User" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* --- 3. MOBILE MENU BUTTON --- */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Cart (Visible on bar) */}
          <Link href="/cart" className="hover:scale-110 transition duration-300">
              <img src={assets.icons.cart} alt="Cart" className="w-6 h-6" />
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 hover:text-trivira-primary focus:outline-none"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* --- 4. MOBILE DROPDOWN --- */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute top-[104px] left-0 w-full animate-fade-in z-40">
          <div className="px-4 py-6 space-y-4 flex flex-col items-center text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className={getLinkClass('/')}>Home</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className={getLinkClass('/products')}>Products</Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)} className={getLinkClass('/blogs')}>Blogs</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className={getLinkClass('/about')}>About Us</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className={getLinkClass('/contact')}>Contact Us</Link>
            
            <div className="flex gap-6 pt-4 border-t border-gray-100 w-full justify-center mt-2">
               <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-500">
                 <img src={assets.icons.user} className="w-5 h-5"/> Login
               </Link>
               <button className="flex items-center gap-2 text-gray-500">
                 <img src={assets.icons.search} className="w-5 h-5"/> Search
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;