import { HandMetal, MessageSquare, School } from "lucide-react";
import { demo } from "@/data/demo";
import Image from "next/image";

// Dictionnaire pour lier les chaînes de caractères du fichier data aux composants réels
const iconMap = {
  TouchApp: HandMetal,
  Forum: MessageSquare,
  School: School,
};

export default function DemoGame() {
  return (
    <section className="py-20 px-4 md:px-(--spacing-margin-desktop) bg-(--surface)">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-(--foreground) font-bold">Comment ça marche ?</h2>
          <div className="w-20 h-1.5 bg-(--secondary-container) mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[28%] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-(--outline-variant) z-0" />

          {demo.map((step) => {
            const IconComponent = iconMap[step.iconName];

            return (
              <div 
                key={step.id} 
                className="relative z-10 group bg-white border border-(--outline-variant) rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-52 relative overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={step.image} 
                    alt={step.title}
                    width={800}
                    height={500} 
                    priority
                  />
                  {/* Badge numérique de l'étape */}
                  <div className={`absolute top-4 left-4 w-10 h-10 ${step.bgColorClass} text-white rounded-full flex items-center justify-center font-heading font-bold shadow-md`}>
                    {step.id}
                  </div>
                </div>
                
                {/* Contenu Texte */}
                <div className="p-6">
                  <div className={`flex items-center gap-2 mb-3 ${step.colorClass}`}>
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                    <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-(--on-surface-variant) font-body text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}