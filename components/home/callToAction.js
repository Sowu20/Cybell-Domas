import { Heart, HandHeart } from "lucide-react";

export default function CallToAction() {
  return (
    <>
      {/* Historical Timeline Section */}
      <section className="py-16 px-margin-desktop bg-inverse-surface text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
        <div className="relative z-10">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-white">Notre Histoire</h2>
            <p className="text-surface-dim text-sm mt-1">Les jalons qui ont façonné lassociation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative pl-6 border-l-2 border-primary/40 py-2">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(183,16,42,0.5)]"></div>
              <div className="text-primary-fixed-dim font-heading text-xl font-bold mb-1">2012</div>
              <h4 className="font-body font-semibold text-lg text-white mb-2">Conférence Skype Historique</h4>
              <p className="text-surface-dim text-sm">Le point de départ d’une collaboration internationale unissant des experts en éducation à travers le globe pour redéfinir l’apprentissage ludique.</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-primary/40 py-2 opacity-75">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-surface-dim"></div>
              <div className="text-surface-dim font-heading text-xl font-bold mb-1">2016</div>
              <h4 className="font-body font-semibold text-lg text-white mb-2">Lancement Maloko</h4>
              <p className="text-surface-dim text-sm">Première édition physique du jeu Maloko Games, adoptée par plus de 50 établissements scolaires en France et en Afrique.</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-primary/40 py-2 opacity-75">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-surface-dim"></div>
              <div className="text-surface-dim font-heading text-xl font-bold mb-1">2024</div>
              <h4 className="font-body font-semibold text-lg text-white mb-2">Cybell-Sante International</h4>
              <p className="text-surface-dim text-sm">Expansion vers des thématiques de santé publique et bien-être à travers la nouvelle gamme de supports ludiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Social CTA Join Movement */}
      <section className="py-16 px-margin-desktop text-center bg-surface relative">
        <div className="max-w-3xl mx-auto p-12 bg-white rounded-[40px] shadow-2xl border border-outline-variant relative z-10">
          <h2 className="font-heading text-4xl font-bold mb-4">Rejoignez le mouvement</h2>
          <p className="text-on-surface-variant font-body text-lg mb-8">Ensemble, faisons de l’éducation un droit accessible et joyeux pour chaque enfant.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-heading font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md cursor-pointer">
              Faire un Don
              <span className="material-symbols-outlined"><Heart /></span>
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-heading font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md cursor-pointer">
              Devenir Bénévole
              <span className="material-symbols-outlined"><HandHeart /></span>
            </button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl hidden lg:block"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl hidden lg:block"></div>
      </section>
    </>
  );
}