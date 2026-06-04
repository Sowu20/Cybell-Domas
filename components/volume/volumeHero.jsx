import { BookOpen, CheckCircle } from "lucide-react";

export default function VolumeHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Badge de catégorie */}
        <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full mb-6 shadow-xs">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-wider font-body">Catalogue Maloko Games</span>
        </div>
        
        {/* Titre principal */}
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight max-w-4xl mx-auto mb-6">
          Découvrez nos volumes éducatifs
        </h1>
        
        {/* Description introductive */}
        <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
          Une collection de jeux de cartes conçue pour s’instruire en jouant. Explorez nos thématiques de santé, prévention et citoyenneté adaptées à tous les âges.
        </p>

        {/* Certifications Chips */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {["Pédagogie active", "Contenu certifié", "Format tactile"].map((text, i) => (
            <div key={i} className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl shadow-xs border border-surface-container-high">
              <CheckCircle className="text-secondary w-4 h-4 shrink-0" />
              <span className="font-body text-sm font-semibold text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cercles Décoratifs de fond */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}