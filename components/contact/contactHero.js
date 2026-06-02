// components/contact/contactHero.jsx
export default function ContactHero() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 bg-surface-container-low text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-md font-body text-xs font-semibold uppercase tracking-wider">
          Contact & Registration
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-tight">
          Prêt à apprendre en jouant ? Rejoignez l’aventure Maloko Games.
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Inscrivez-vous pour nos prochaines sessions éducatives ou contactez notre équipe pour toute question sur nos outils pédagogiques.
        </p>
      </div>
    </section>
  );
}