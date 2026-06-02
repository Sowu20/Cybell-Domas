"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full sticky top-0 z-50 bg-surface border-b border-outline-variant shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop py-4">
        <div className="flex items-center gap-6">
          <div className="font-heading text-2xl font-bold text-primary tracking-tight">
            <Link href="/">MAKOLO-GAMES</Link>
          </div>
        </div>

        <button
          className="md:hidden text-primary p-1 rounded-md hover:bg-surface-container transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {isOpen ? (
              <X size={32} strokeWidth={2.5} /> 
            ) : (
              <Menu size={32} strokeWidth={2.5} />
            )}
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-12">
          <Link className="font-body text-sm font-semibold text-primary border-b-2 border-primary tracking-wider transition-all duration-200" href="/">
            Accueil
          </Link>
          <Link className="font-body text-sm font-semibold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all duration-200 px-3 py-1 rounded-default" href="/game">
            MALOKO GAMES
          </Link>
          <Link className="font-body text-sm font-semibold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all duration-200 px-3 py-1 rounded-default" href="/about">
            A Propos
          </Link>
          <Link className="bg-primary text-on-primary px-6 py-2 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-all text-center" href="/contact">
            Contactez-Nous
          </Link>
        </nav>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-surface-container border-t border-outline-variant animate-fade-in`}>
        <nav className="flex flex-col p-4 gap-4">
          <Link 
            className="font-body text-sm font-semibold text-primary px-3 py-2 rounded-md bg-surface-container-highest" 
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            className="font-body text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-3 py-2 rounded-md transition-all" 
            href="/game"
            onClick={() => setIsOpen(false)}
          >
            MALOKO GAMES
          </Link>
          <Link 
            className="font-body text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-3 py-2 rounded-md transition-all" 
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            A Propos
          </Link>
          <Link 
            className="font-body text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-3 py-2 rounded-md transition-all" 
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contactez-Nous
          </Link>
        </nav>
      </div>
    </header>
  );
}