import Image from "next/image";
import { GameData } from "@/data/games";

export default function GameContent() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <h3 className="font-heading text-3xl font-bold text-center text-foreground mb-8">
          Les Volumes Cybell-Santé
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          
          {GameData.map((game) => {
            const bgClasses = {
              primary: "bg-primary text-white",
              secondary: "bg-secondary text-white",
              tertiary: "bg-tertiary text-white",
            }[game.color];

            return (
              <div 
                key={game.id}
                className={`${game.gridSpan} ${bgClasses} rounded-xl p-8 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between`}
              >
                <div className="relative z-10 max-w-sm space-y-2">
                  <span className="font-heading text-xs font-bold tracking-widest opacity-80 block">
                    {game.volume}
                  </span>
                  <h4 className="font-heading text-2xl font-bold leading-snug">
                    {game.title}
                  </h4>
                  <p className="font-body text-sm opacity-90 leading-relaxed pt-1">
                    {game.description}
                  </p>
                </div>

                {game.id === 1 && (
                  <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 mix-blend-overlay pointer-events-none">
                    <Image 
                      src="/images/health-bg.jpg" 
                      alt="Illustration fond" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}

          <div className="md:col-span-8 border-2 border-outline-variant rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-primary transition-colors bg-white">
            
            <div className="w-20 h-20 bg-surface-container-high rounded-full shrink-0 flex items-center justify-center text-primary">
              <svg 
                xmlns="/images/" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-10 h-10"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
                />
              </svg>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <span className="font-heading text-xs font-bold text-primary uppercase tracking-wider">
                Nouveau
              </span>
              <h4 className="font-heading text-xl font-bold text-foreground">
                Volume Spécial : Sport & Équilibre
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Comment l’activité physique transforme notre biologie et renforce le système immunitaire.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}