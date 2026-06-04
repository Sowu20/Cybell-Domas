import { volumesList } from "@/data/volume";
import VolumeCard from "./volumeCard";

export default function VolumesList() {
  return (
    <section className="py-20 px-4 md:px-(--spacing-margin-desktop) bg-(--surface-container-low)">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <div className="max-w-3xl mb-16">
          <span className="text-(--primary) font-heading font-bold text-sm uppercase tracking-widest block mb-2">
            Notre Matériel Pédagogique
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-(--foreground)">
            Explorez les volumes Maloko Games
          </h2>
          <div className="w-16 h-1 bg-(--primary) mt-4 rounded-full"></div>
          <p className="mt-4 font-body text-(--on-surface-variant)">
            Chaque boîte est un univers d’apprentissage autonome. Découvrez nos thématiques clés conçues pour stimuler l’alphabétisation fonctionnelle par le débat.
          </p>
        </div>

        {/* Grille des volumes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {volumesList.map((volume) => (
            <VolumeCard key={volume.id} volume={volume} />
          ))}
        </div>

      </div>
    </section>
  );
}