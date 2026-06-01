import { BookOpen, Brain, Activity, ShieldAlert } from "lucide-react";

export const GameData = [
  {
    id: 1,
    volume: "VOLUME 01",
    title: "Prévention Générale",
    description: "Les bases de l'hygiène, de la nutrition et du bien-être quotidien pour toute la famille.",
    category: "Français & Lecture",
    icon: BookOpen,
    image: "/images/", 
    color: "primary",
    gridSpan: "md:col-span-8" 
  },
  {
    id: 2,
    volume: "VOLUME 02",
    title: "Santé Environnementale",
    description: "L'impact de notre entourage sur notre santé.",
    category: "Mathématiques",
    icon: Brain,
    image: "/images/",
    color: "tertiary",
    gridSpan: "md:col-span-4"
  },
  {
    id: 3,
    volume: "VOLUME 03",
    title: "Pathologies Chroniques",
    description: "Mieux comprendre pour mieux accompagner.",
    category: "Santé & Hygiène",
    icon: Activity,
    image: "/images/",
    color: "secondary",
    gridSpan: "md:col-span-4" 
  }
];