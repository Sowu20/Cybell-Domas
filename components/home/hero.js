import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-[#f9f9ff] to-[#e7eeff] min-h-200 flex items-center px-margin-desktop py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-body text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>30+ Ans d’Engagement Social</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            L’innovation sociale : <br />
            <span className="text-primary italic">S’instruire en jouant</span>
          </h1>
          
          <p className="font-body text-lg text-on-surface-variant max-w-xl">
            Association Cybell-Domas International transforme lapprentissage en une aventure ludique. 
            Nous créons des ponts entre éducation et plaisir pour bâtir un avenir éclairé.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-primary text-on-primary px-6 py-4 rounded-xl font-heading font-semibold shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
              <Link href="/game">
                Découvrir Maloko
              </Link>
              <span className="material-symbols-outlined"><ArrowRight /></span>
            </button>
            <button className="border-2 border-primary text-primary px-6 py-4 rounded-xl font-heading font-semibold hover:bg-primary/5 transition-all">
              <Link href="/about">
                Notre Vision
              </Link>
              <span className="material-symbols-outlined"><Eye /></span>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-tertiary-container/20 rounded-full blur-3xl"></div>
          
          {/* Le conteneur ci-dessous contrôle désormais la taille de l'image grâce à 'fill' */}
          <div className="relative w-full max-w-md md:max-w-full h-112.5 rounded-3xl border-4 border-white shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image 
              alt="Interaction Cybell-Domas" 
              src="/images/home3.jpeg"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}