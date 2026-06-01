export default function Presentation() {
  return (
    <section className="py-16 px-margin-desktop bg-surface">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold mb-2">Notre Impact en Chiffres</h2>
        <p className="text-on-surface-variant font-body">Une décennie dédiée à léducation par le jeu</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 bg-surface-container-low border border-outline-variant rounded-2xl text-center space-y-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-primary font-heading text-4xl font-bold">10+</div>
          <div className="font-body text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Années dExpertise</div>
        </div>
        
        <div className="p-6 bg-surface-container-low border border-outline-variant rounded-2xl text-center space-y-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-secondary font-heading text-4xl font-bold">50k</div>
          <div className="font-body text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Élèves Impactés</div>
        </div>
        
        <div className="p-6 bg-surface-container-low border border-outline-variant rounded-2xl text-center space-y-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-tertiary font-heading text-4xl font-bold">25+</div>
          <div className="font-body text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Jeux Éducatifs</div>
        </div>
        
        <div className="p-6 bg-surface-container-low border border-outline-variant rounded-2xl text-center space-y-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-primary-container font-heading text-4xl font-bold">5</div>
          <div className="font-body text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Pays Partenaires</div>
        </div>
      </div>
    </section>
  );
}