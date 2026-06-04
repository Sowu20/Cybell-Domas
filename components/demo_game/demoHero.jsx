import { Star, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DemoHero() {
    return (
        <section className="relative min-h-187.5 lg:min-h-205 flex items-center justify-center overflow-hidden bg-(--surface-container) py-16">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/demo4.png"
                    width={600}
                    height={400}
                    alt="Maloko Games Laptop"
                    className="w-full h-full object-cover opacity-15 mix-blend-multiply"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-4xl text-center px-4 md:px-(--spacing-margin-desktop)">
                <div className="inline-flex items-center gap-2 bg-(--secondary-container) text-(--on-secondary-container) px-5 py-1.5 rounded-full mb-8 shadow-xs animate-pulse">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-body font-bold text-xs tracking-wider uppercase">DEMO MALOKO GAMES DISPONIBLE</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-(--foreground) mb-6 leading-tight max-w-3xl mx-auto">
                    Testons l’<span className="tex-(--primary)">expérience digitale</span> de MALOKO GAMES
                </h1>
                <p className="font-body text-base md:text-lg text-(--on-surface-variant) mb-10 max-w-2xl mx-auto leading-relaxed">
                    Comblez le fossé entre l’apprentissage de la lecture et le jeu. Découvrez la version interactive de notre système pédagogique à base de cartes, conçu par l’Association Cybell-Domas International.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* <button className="w-full sm:w-auto bg-(--primary) text-white px-10 py-4 rounded-xl font-heading font-bold text-lg shadow-md hover:scale-105 transition-transform cursor-pointer">
                        Commencer la démo
                    </button> */}
                    <button className="w-full sm:w-auto border-2 border-(--tertiary) text-(--tertiary) px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-(--tertiary) hover:text-white transition-all cursor-pointer">
                        <Link href="/about">En Savoir Plus</Link>
                    </button>
                </div>
            </div>

            <div className="absolute right-4 lg:right-[5%] top-[25%] w-60 h-76 bg-white border-2 border-(--primary) rounded-xl shadow-xl rotate-12 hidden xl:flex flex-col p-6 items-center justify-center text-center transition-transform hover:rotate-6 duration-300">
                <div className="w-16 h-16 bg-(--primary-container) rounded-full flex items-center justify-center mb-4 shadow-sm">
                <BookOpen className="w-8 h-8 text-white" />
                </div>
                <span className="font-heading text-xl font-bold text-(--primary) tracking-wide">ALPHABÉTISATION</span>
                <p className="font-body text-xs text-gray-400 mt-2 font-medium">Volume 1</p>
            </div>

        </section>
    );
}