'use client';
import Link from "next/link";
import Container from "../components/Container";
import Activelink from "../components/activelink";
import { Manrope } from "next/font/google";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import CartModal from "./CartModal";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  const cart = useQuery(api.cart.getCart) || [];
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Container>
      <nav className="flex items-center justify-between py-[35px] px-3 md:px-0 relative z-50">
        <div className="md:hidden">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        <div className="flex items-center justify-center w-full md:w-auto md:justify-start gap-3 md:gap-6 z-50">
          <h1 className="text-2xl w-[143px] font-bold text-[#FFFFFF] z-10">
            <Link href="/">audiophile</Link>
          </h1>
        </div>

        <ul className={`hidden md:flex gap-8 text-[#FFFFFF] uppercase tracking-[2px] text-[13px] leading-[25px] ${manrope.className}`}>
          <li><Activelink href="/">Home</Activelink></li>
          <li><Activelink href="/headphones">Headphones</Activelink></li>
          <li><Activelink href="/speakers">Speakers</Activelink></li>
          <li><Activelink href="/earphones">Earphones</Activelink></li>
         
        </ul>

        <div className="flex items-center gap-4 md:hidden">
          <div className="relative">
            <ShoppingCart className="text-white cursor-pointer" onClick={() => setShowCart(true)} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>

        <div className="relative hidden md:block">
          <ShoppingCart className="text-white cursor-pointer" onClick={() => setShowCart(true)} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>

        <CartModal isOpen={showCart} onClose={() => setShowCart(false)} />
      </nav>

      {/* Slide‑in from left panel */}
      <div className={`fixed top-0 left-0 min-h-screen w-64 bg-[#0E0E0E]/20 backdrop-blur-md z-50 transform transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col gap-6">
          <button className="self-end text-white" onClick={() => setShowMobileMenu(false)}>
            <X className="text-white" />
          </button>
          <Activelink href="/" className="text-white uppercase text-lg font-manrope" onClick={() => setShowMobileMenu(false)}>Home</Activelink>
          <Activelink href="/headphones"  className="text-white uppercase text-lg font-manrope" onClick={() => setShowMobileMenu(false)}>Headphones</Activelink>
          <Activelink href="/speakers" className="text-white uppercase text-lg" onClick={() => setShowMobileMenu(false)}>Speakers</Activelink>
          <Activelink href="/earphones" className="text-white uppercase text-lg" onClick={() => setShowMobileMenu(false)}>Earphones</Activelink>
        </div>
      </div>

      <hr className="h-px opacity-20 bg-[#FFFFFF] border-0 mx-auto px-6 md:px-[39px] lg:px-[165px] z-50" />
    </Container>
  );
}
