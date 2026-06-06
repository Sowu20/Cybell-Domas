import Image from "next/image";
import { Heart, Target, Lightbulb, ShieldCheck, Award, Users, BookOpen } from "lucide-react";

export default function AboutContent() {
  return (
    <main className="w-full min-h-screen bg-background">
      
      <section className="py-16 px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Qui sommes-nous ?
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              L’Association Cybell-Domas International est une organisation dédiée à la transformation de l’apprentissage par le jeu (edutainment). Depuis plus de 10 ans, nous unissons des experts du monde entier pour concevoir des programmes et outils innovants capables de répondre aux enjeux éducatifs et sanitaires contemporains.
            </p>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              À travers notre gamme emblématique de supports de jeu comme <strong>Maloko Games</strong>, nous favorisons le développement cognitif et l’inclusion sociale de chaque enfant, garantissant un accès joyeux et équitable à l’instruction fondamentale et à la sensibilisation à la santé.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant/30">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="font-body font-semibold text-foreground">Une approche certifiée</h4>
                <p className="text-sm text-on-surface-variant">Conçue avec des ingénieurs pédagogiques et des professionnels de santé.</p>
              </div>
            </div>
          </div>

          <div className="w-full relative h-96 rounded-2xl shadow-xl overflow-hidden border-4 border-white">
            <Image 
              alt="Présentation de l'Association Cybell-Domas" 
              src="/images/about2.jpg"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-container px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-outline-variant/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Notre Vision Globale</h3>
                <p className="font-body text-on-surface-variant text-base leading-relaxed">
                  Nous croyons fermement que l’éducation et l’accès aux connaissances de santé ne devraient jamais être une corvée. Notre objectif d’ici les prochaines années est détendre nos déploiements ludiques à plus de 500 structures scolaires et communautaires à l’échelle internationale.
                </p>
              </div>
              <div className="border-t border-outline-variant/20 pt-4 flex gap-6 text-sm font-semibold text-tertiary">
                <span>🌍 Impact International</span>
                <span>🎮 Edutainment Certifié</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              
              <div className="bg-[#183153] text-white p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#fcab28]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold">+50</div>
                  <div className="text-xs text-surface-dim opacity-90">Établissements partenaires</div>
                </div>
              </div>

              <div className="bg-[#b7102a] text-white p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold">10k+</div>
                  <div className="text-xs text-primary-fixed opacity-90">Enfants sensibilisés & formés</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-foreground">Nos Valeurs Fondamentales</h2>
            <p className="text-on-surface-variant text-sm">Les piliers qui guident chacune de nos actions sur le terrain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">Inclusion & Équité</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Nous agissons pour qu’aucun enfant ne soit laissé de côté. Nos supports s’adaptent aux contextes locaux et garantissent une accessibilité universelle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">Impact Social Réel</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Chaque projet, atelier ou jeu déployé vise des résultats concrets et mesurables sur le bien-être, la santé et le niveau d’alphabétisation des jeunes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">Innovation Ludique</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Nous réinventons les codes de l’éducation populaire en fusionnant rigueur académique et mécaniques de jeu captivantes pour susciter l’envie d’apprendre.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}