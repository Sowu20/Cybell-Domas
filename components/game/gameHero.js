import Image from "next/image";

export default function GameHero() {
  return (
    <section className="hero-gradient pt-20 pb-12 px-margin-mobile md:px-margin-desktop transition-all">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Colonne gauche : Contenu textuel */}
        <div className="space-y-6 text-left">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-bold text-xs font-semibold uppercase tracking-wider">
            Sinstruire en jouant
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Le Jeu Maloko Games : LÉducation réinventée
          </h1>
          
          <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Découvrez Cybell-Santé, une méthode ludique et interactive pour sensibiliser les jeunes aux enjeux de santé publique à travers des volumes thématiques captivants.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-bold text-sm font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer">
              Explorer les Volumes
            </button>
            <button className="border-2 border-tertiary text-tertiary px-6 py-3 rounded-lg font-label-bold text-sm font-semibold hover:bg-tertiary hover:text-on-tertiary transition-all cursor-pointer">
              Voir la Démo
            </button>
          </div>
        </div>

        <div className="relative group w-full h-87.5 md:h-100">
          <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
          <div className="relative w-full h-full rounded-xl shadow-2xl border-2 border-white overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-surface-container-low">
            <Image 
              src="/images/game.png"
              alt="Maloko Games Deck"
              fill
              priority
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}