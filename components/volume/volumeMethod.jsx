import { Check } from "lucide-react";
import { methodFeatures } from "@/data/features";
import Image from "next/image";

export default function VolumeMethod() {
  return (
    <section className="bg-surface-container-high py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Côté Gauche : Image stylisée */}
        <div className="relative p-2 md:p-4">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl translate-x-4 translate-y-4"></div>
          <div className="bg-surface-container-lowest p-3 rounded-2xl shadow-xl relative z-10">
            <Image 
              alt="Pédagogie Maloko" 
              className="w-full h-auto rounded-xl object-cover"
              width={650}
              height={500}
              src="/images/vo.png"
            />
          </div>
        </div>

        {/* Côté Droit : Textes et Liste à puces */}
        <div className="flex flex-col justify-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Une méthode approuvée par les éducateurs
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
            Chaque volume est le fruit d’une collaboration entre experts de la santé et pédagogues. Le format &ldquo;jeu de bataille&rdquo; revisité permet une mémorisation rapide et efficace sans la pression de l’apprentissage classique.
          </p>
          
          <ul className="space-y-4">
            {methodFeatures.map((feat, index) => (
              <li key={index} className="flex items-start gap-3 bg-surface-container-lowest/60 p-3 rounded-xl border border-surface-container shadow-xs">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="text-on-primary w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="font-heading text-sm block text-foreground mb-0.5">{feat.title}</strong>
                  <span className="text-sm font-body text-on-surface-variant leading-normal">{feat.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}