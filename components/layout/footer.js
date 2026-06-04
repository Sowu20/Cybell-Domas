import Link from "next/link";


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
            social_leaderboard
          </span>
          <span className="material-symbols-outlined text-secondary-container hover:text-white cursor-pointer transition-colors">
            share
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className="font-body text-sm font-bold text-white uppercase tracking-wider">
          Contactez-nous
        </h5>
        <div className="space-y-2">
          <a className="block font-body text-sm text-surface-dim hover:text-secondary-container underline transition-colors" href="mailto:malokogames@yahoo.fr">
            malokogames@yahoo.fr
          </a>
          <a className="block font-body text-sm text-surface-dim hover:text-secondary-container underline transition-colors" href="tel:+33631737905">
            +33 631 737 905
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className="font-body text-sm font-bold text-white uppercase tracking-wider">Réseaux Sociaux</h5>
        <div className="grid grid-cols-2 gap-2">
          <Link className="font-body text-sm text-surface-dim hover:text-secondary-container underline transition-colors" href="#">Facebook</Link>
          <Link className="font-body text-sm text-surface-dim hover:text-secondary-container underline transition-colors" href="#">LinkedIn</Link>
          <Link className="font-body text-sm text-surface-dim hover:text-secondary-container underline transition-colors" href="#">Instagram</Link>
          <Link className="font-body text-sm text-surface-dim hover:text-secondary-container underline transition-colors" href="#">YouTube</Link>
        </div>
      </div>
    </footer>
  );
}