import { Smartphone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Play() {
  return (
    <section className="py-20 px-4 md:px-(--spacing-margin-desktop)">
      <div className="max-w-6xl mx-auto bg-(--inverse-surface) rounded-4xl p-8 md:p-16 relative overflow-hidden text-white shadow-xl">
        
        {/* Formes lumineuses décoratives d'arrière-plan */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-(--primary) opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--tertiary) opacity-20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Prêt à jouer?</h2>
            <p className="font-body text-base md:text-lg text-(--inverse-on-surface) opacity-90 mb-8 leading-relaxed">
              Que vous préfériez le contact physique de nos jeux de haute qualité ou la commodité de notre application mobile, Maloko Games est prêt pour votre salle de classe ou votre maison.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-(--primary) text-white px-6 py-3.5 rounded-xl font-body font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-md cursor-pointer">
                <Smartphone className="w-4 h-4" />
                Get the App
              </button>
              <button className="bg-(--secondary-container) text-(--on-secondary-container) px-6 py-3.5 rounded-xl font-body font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-md cursor-pointer">
                <ShoppingCart className="w-4 h-4" />
                Buy Physical Deck
              </button>
            </div>
          </div>

          {/* Maquette visuelle du smartphone superposée */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px]">
              <div className="absolute inset-0 bg-(--secondary-container) rounded-3xl rotate-6 translate-x-4 translate-y-4 opacity-90" />
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-gray-100">
                <Image 
                  className="w-full rounded-2xl shadow-inner object-cover" 
                  src="/images/demo2.png"
                  width={800}
                  height={600} 
                  alt="Maloko Games App Mockup" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}