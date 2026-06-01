import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-margin-desktop py-4 w-full sticky top-0 z-50 bg-surface border-b border-outline-variant shadow-sm">
      <div className="flex items-center gap-6">
        <span className="material-symbols-outlined text-primary text-[32px] md:hidden cursor-pointer">
          menu
        </span>
        <div className="font-heading text-2xl font-bold text-primary tracking-tight">
          CYBELL-DOMAS
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-12">
        <Link className="font-body text-sm font-semibold text-primary border-b-2 border-primary tracking-wider transition-all duration-200" href="/">
          Acceuil
        </Link>
        <Link className="font-body text-sm font-semibold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all duration-200 px-3 py-1 rounded-default" href="/game">
          MALOKO GAMES
        </Link>
        <Link className="font-body text-sm font-semibold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all duration-200 px-3 py-1 rounded-default" href="/about">
          A Propos
        </Link>
        <Link  className="bg-primary text-on-primary px-6 py-2 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-all text-center" href="/contact">
          Contactez-Nous
        </Link>
      </nav>
    </header>
  );
}