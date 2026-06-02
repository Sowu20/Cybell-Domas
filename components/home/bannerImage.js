import { Users, Brain, School } from "lucide-react";
import Image from "next/image";

export default function BannerImage() {
  return (
    <section className="py-16 px-margin-desktop bg-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* On donne la position relative et la hauteur fixe au conteneur */}
        <div className="w-full relative h-100 rounded-3xl shadow-xl overflow-hidden">
          <Image 
            alt="Expertise Pédagogique" 
            src="/images/home2.png"
            fill
            className="object-cover"
            sizes="(max-w-768px) 100vw, 50vw"
          />
        </div>
        
        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-bold">Une Expertise Reconnue</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 hover:bg-surface-container-high rounded-xl transition-all cursor-default">
              <span className="material-symbols-outlined text-primary text-[32px] p-3 bg-primary/10 rounded-lg"><Brain /></span>
              <div>
                <h3 className="font-body font-semibold text-lg mb-1">Ingénierie Pédagogique</h3>
                <p className="text-on-surface-variant text-sm">Conception de programmes alliant curriculum scolaire et mécaniques de jeu engageantes.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 hover:bg-surface-container-high rounded-xl transition-all cursor-default">
              <span className="material-symbols-outlined text-secondary text-[32px] p-3 bg-secondary/10 rounded-lg"><Users /></span>
              <div>
                <h3 className="font-body font-semibold text-lg mb-1">Inclusion Sociale</h3>
                <p className="text-on-surface-variant text-sm">Accessibilité universelle pour garantir qu’aucun enfant ne soit laissé de côté.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 hover:bg-surface-container-high rounded-xl transition-all cursor-default">
              <span className="material-symbols-outlined text-tertiary text-[32px] p-3 bg-tertiary/10 rounded-lg"><School /></span>
              <div>
                <h3 className="font-body font-semibold text-lg mb-1">Formation & Accompagnement</h3>
                <p className="text-on-surface-variant text-sm">Programmes de formation pour éducateurs et parents sur l’usage du jeu comme levier.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}