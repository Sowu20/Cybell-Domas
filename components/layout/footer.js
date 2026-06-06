import Link from "next/link";
import { BarChart3, Share2, Mail, PhoneCall } from "lucide-react";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-6 bg-inverse-surface text-inverse-on-surface">
      <div className="space-y-4">
        <div className="font-heading text-xl font-bold text-secondary-container">MALOKO GAMES</div>
        <p className="font-body text-sm text-surface-dim/80">
          © 2026 Association Cybell-Domas International. S’instruire en jouant.
        </p>
        <div className="flex gap-4 mt-4">
          <span className="material-symbols-outlined text-secondary-container hover:text-white cursor-pointer transition-colors">
            <BarChart3 />
          </span>
          <span className="material-symbols-outlined text-secondary-container hover:text-white cursor-pointer transition-colors">
            <Share2 />
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className="font-body text-sm font-bold text-white uppercase tracking-wider">
          Contactez-nous
        </h5>
        <div className="space-y-2">
          <Link className="block font-body text-sm text-surface-dim hover:text-secondary-container transition-colors" href="mailto:cybelldomasinternational@yahoo.fr">
            <span className="flex items-center gap-2 text-secondary-container hover:text-white cursor-pointer transition-colors">
              <Mail className="w-4 h-4" /> {/* Optionnel : ajuster la taille de l'icône si besoin */}
              <span>cybelldomasinternational@yahoo.fr</span>
            </span>
          </Link>
          
          <Link className="block font-body text-sm text-surface-dim hover:text-secondary-container transition-colors" href="tel:+33631737905">
            <span className="flex items-center gap-2 text-secondary-container hover:text-white cursor-pointer transition-colors">
              <PhoneCall className="w-4 h-4" />
              <span>+33 6 31 73 79 05</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className="font-body text-sm font-bold text-white uppercase tracking-wider">Réseaux Sociaux</h5>
        <div className="grid grid-cols-2 gap-2">
          <Link 
            className="flex items-center gap-2 font-body text-sm text-surface-dim hover:text-secondary-container transition-colors" 
            href="https://www.youtube.com/@cybell-santesinstruireenjo4219"
          >
            <FaYoutube className="text-xl" />
            <span>YouTube</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}