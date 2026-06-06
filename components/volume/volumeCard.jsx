import * as Icons from "lucide-react";
import Image from "next/image";

export default function VolumeCard({ volume }) {
  const AgeIcon = Icons[volume.ageIcon] || Icons.HelpCircle;
  const BtnIcon = volume.isSpecial ? Icons.Sparkles : Icons.ArrowRight;

  return (
    <article className={`border border-surface-container-high rounded-2xl overflow-hidden flex flex-col h-full bg-surface-container-lowest shadow-xs card-hover-effect group ${volume.bgClass}`}>
      
      {/* Zone Image */}
      <div className={`aspect-4/3 flex items-center justify-center p-md relative overflow-hidden ${volume.headerBg || "bg-surface-container-low"}`}>
        <div className="w-full h-full relative z-10 p-2">
          <Image 
            src={volume.image} 
            alt={volume.title}
            width={400}
            height={300}
            className="w-full h-full object-contain rounded-lg drop-shadow-md transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
        
        {/* Badge Flottant Numéro de Volume */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full font-semibold text-xs shadow-sm z-20 ${volume.badgeClass || "bg-primary text-on-primary"}`}>
          {volume.volumeNumber}
        </div>
      </div>

      {/* Contenu textuel avec padding uniforme */}
      <div className="p-6 grow flex flex-col justify-between gap-y-4">
        <div>
          <h3 className={`font-heading text-xl font-bold tracking-tight mb-2 ${volume.isSpecial ? "text-primary-fixed-dim" : "text-foreground"}`}>
            {volume.title}
          </h3>
          
          <p className={`font-body text-sm leading-relaxed ${volume.isSpecial ? "text-inverse-on-surface/90" : "text-on-surface-variant"}`}>
            {volume.description}
          </p>
        </div>

        <div>
          {/* Méta-données (Âge et Cartes) */}
          <div className="flex items-center justify-between mb-5 pt-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium text-xs ${volume.isSpecial ? "bg-surface-container-highest/20 text-white" : "bg-surface-container text-on-tertiary-fixed"}`}>
              <AgeIcon className="w-3.5 h-3.5" />
              {volume.ageTag}
            </span>
            <span className={`text-xs font-bold tracking-wide uppercase ${volume.isSpecial ? "text-secondary-container" : "text-secondary"}`}>
              {volume.cardsCount}
            </span>
          </div>

          {/* Bouton d'action sublimé */}
          {/* <button className={`w-full font-heading font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm active:scale-[0.98] ${
            volume.isSpecial 
              ? "bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90" 
              : "bg-primary text-on-primary hover:bg-primary/90"
          } ${volume.btnClass}`}>
            <span>{volume.isSpecial ? "Voir l'édition limitée" : "Découvrir le volume"}</span>
            <BtnIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button> */}
        </div>
      </div>
    </article>
  );
}