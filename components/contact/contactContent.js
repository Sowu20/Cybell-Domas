"use client"

import { useState } from "react"
import Image from "next/image"
import { UserCheck, Calendar, PhoneCall, Mail, MapPin, Trophy, Users, Quote, ArrowRight } from "lucide-react"
import { ContactInfo, SessionCalendar } from "@/data/contact"

export default function ContactContent() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    workshop: "Maloko Games - Santé",
    message: ""
  });
  
  const [formState, setFormState] = useState({ status: "idle", error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "submitting", error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi.");
      }

      setFormState({ status: "success", error: null });
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        workshop: "Maloko Games - Santé",
        message: ""
      });
      
      setTimeout(() => {
        setFormState({ status: "idle", error: null });
      }, 4000);

    } catch (err) {
      setFormState({ status: "error", error: err.message });
    }
  };

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-7 space-y-12">
          
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-md border border-outline-variant/40">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl"><UserCheck /></span>
              <h2 className="font-heading text-2xl font-bold text-foreground">Formulaire de Contact</h2>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-semibold text-on-surface-variant">Nom</label>
                <input 
                  required 
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-outline-variant rounded-md focus:border-primary focus:ring-0 outline-none transition-colors bg-white text-foreground font-body" 
                  placeholder="Ex: Jean" 
                  type="text" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-semibold text-on-surface-variant">Prénom</label>
                <input 
                  required 
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-outline-variant rounded-md focus:border-primary focus:ring-0 outline-none transition-colors bg-white text-foreground font-body" 
                  placeholder="Ex: Dupont" 
                  type="text" 
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-body text-sm font-semibold text-on-surface-variant">Adresse E-mail</label>
                <input 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-outline-variant rounded-md focus:border-primary focus:ring-0 outline-none transition-colors bg-white text-foreground font-body" 
                  placeholder="jean.dupont@email.com" 
                  type="email" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-semibold text-on-surface-variant">Type d’Atelier</label>
                <select 
                  name="workshop"
                  value={formData.workshop}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-outline-variant rounded-md focus:border-primary focus:ring-0 outline-none transition-colors bg-white text-foreground font-body appearance-none"
                >
                  <option>Maloko Games - Santé</option>
                  <option>Maloko Games - Culture</option>
                  <option>Maloko Games - Sciences</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-body text-sm font-semibold text-on-surface-variant">Message ou Questions particulières</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-outline-variant rounded-md focus:border-primary focus:ring-0 outline-none transition-colors bg-white text-foreground font-body" 
                  placeholder="Dites-nous en plus sur vos attentes..." 
                  rows={4}
                ></textarea>
              </div>

              {formState.status === "error" && (
                <p className="font-body text-sm text-error md:col-span-2 font-semibold">
                  ⚠️ {formState.error}
                </p>
              )}

              <div className="md:col-span-2 mt-2">
                <button 
                  disabled={formState.status === "submitting"}
                  className={`w-full py-4 rounded-md font-heading text-base font-bold text-white shadow-md transition-all cursor-pointer ${
                    formState.status === "success" 
                      ? "bg-tertiary-container text-white" 
                      : "bg-primary hover:bg-surface-tint"
                  }`} 
                  type="submit"
                >
                  {formState.status === "idle" && "Envoyer"}
                  {formState.status === "submitting" && "Envoi en cours..."}
                  {formState.status === "success" && "Message Envoyée avec succès !"}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">Calendrier des Sessions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SessionCalendar.map((session) => (
                <div key={session.id} className={`p-6 rounded-xl border-l-8 shadow-xs flex flex-col justify-between ${session.containerClass}`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-md font-body text-xs font-semibold ${session.badgeClass}`}>
                      {session.badgeText}
                    </span>
                    <span className="material-symbols-outlined opacity-70"><Calendar /></span>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold mb-1">{session.title}</h4>
                    <p className="font-body text-sm">{session.date}</p>
                    <p className="font-body text-xs opacity-80 mt-3 italic">{session.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="bg-inverse-surface text-inverse-on-surface p-8 rounded-xl shadow-md flex flex-col gap-6">
            <h3 className="font-heading text-xl font-bold text-primary-fixed-dim">Infoline & Contact</h3>
            
            <div className="flex flex-col gap-6 mt-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined"><PhoneCall /></span>
                </div>
                <div>
                  <p className="font-body text-xs text-surface-container-highest/80">Appelez-nous</p>
                  <p className="font-heading text-lg font-bold text-primary-fixed">{ContactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-tertiary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined"><Mail /></span>
                </div>
                <div>
                  <p className="font-body text-xs text-surface-container-highest/80">Email direct</p>
                  <p className="font-heading text-lg font-bold text-tertiary-fixed-dim">{ContactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-secondary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined"><MapPin /></span>
                </div>
                <div>
                  <p className="font-body text-xs text-surface-container-highest/80">Siège Social</p>
                  <p className="font-body text-sm text-surface-container-lowest">{ContactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-outline-variant/20 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-md border border-outline-variant/30 flex items-center justify-center hover:bg-primary-container transition-colors text-white">
                <span className="material-symbols-outlined"><Trophy /></span>
              </a>
              <a href="#" className="w-10 h-10 rounded-md border border-outline-variant/30 flex items-center justify-center hover:bg-primary-container transition-colors text-white">
                <span className="material-symbols-outlined"><Users /></span>
              </a>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl border-2 border-primary shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full pointer-events-none"></div>
            <div className="relative z-10 space-y-4">
              <h3 className="font-heading text-xl font-bold text-primary">Le Mot de la Fondatrice</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="relative w-24 h-24 rounded-md overflow-hidden shrink-0 border-2 border-surface-container-high shadow-xs">
                  <Image src="/images/contact.jpeg" alt="Mme. Cybell Domas" fill className="object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-heading text-sm font-bold text-foreground">Mme. Cybell Domas</p>
                  <p className="font-body text-xs text-secondary font-semibold">Présidente Fondatrice</p>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <span className="material-symbols-outlined text-primary text-2xl h-fit"><Quote /></span>
                <p className="italic font-body text-sm text-on-surface-variant leading-relaxed">
                  Notre mission est de transformer l’apprentissage en une aventure passionnante. Maloko Games est né d’une volonté d’offrir des outils pédagogiques innovants qui captivent les jeunes tout en transmettant des savoirs essentiels.
                </p>
              </div>

              <a href="#" className="inline-flex items-center gap-1 text-primary font-body text-xs font-bold hover:underline pt-2">
                En savoir plus sur l’histoire de lassociation
                <span className="material-symbols-outlined text-xs"><ArrowRight /></span>
              </a>
            </div>
          </div>

          {/* Bloc Map de localisation */}
          <div className="rounded-xl overflow-hidden shadow-xs h-60 border border-outline-variant/40 relative">
            <Image src="/images/contact2.png" alt="Carte de localisation Paris" fill className="object-cover" />
          </div>

        </div>

      </div>
    </section>
  );
}