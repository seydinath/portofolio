"use client";
import React, { useState } from "react";
import Catalogue from "./catalogue";
import { ProjectCard } from "@/components/project-card";


interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  component?: string;
  difficulty?: string;
  duration?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Formulaire Carte de Crédit Animé",
    description:
      "Interface de paiement interactive avec animation 3D de carte de crédit, validation en temps réel et design moderne. Attention portée aux détails visuels et UX.",
    technologies: ["React", "TypeScript", "CSS 3D", "Animation", "Form Validation"],
    githubUrl: "https://github.com/seydinath/credit-card-form-3d",
    liveUrl: "/credit-card-demo",
    imageUrl: "/images/credit-card-illustration.png",
    component: "CreditCardForm",
    difficulty: "Intermédiaire",
    duration: "2 semaines",
  },
  {
    id: 2,
    title: "Dashboard de Monitoring Réseau",
    description:
      "Système de surveillance réseau en temps réel avec alertes SNMP, visualisation des topologies et métriques de performance. Interface moderne pour administrateurs réseau.",
    technologies: ["React", "D3.js", "SNMP", "WebSocket", "Network Analytics", "Node.js"],
    githubUrl: "https://github.com/seydinath/network-monitoring-dashboard",
    liveUrl: "/dashboard-demo",
    imageUrl: "/images/network-dashboard-illustration.png",
    difficulty: "Avancé",
    duration: "1 mois",
  },
  {
    id: 3,
    title: "Système de Rendez-vous Médicaux & File d'Attente",
    description:
      "Application de gestion des rendez-vous médicaux avec calendrier interactif, file d'attente en temps réel, assignation des patients aux médecins et notifications. Interface moderne et ergonomique pour cliniques et hôpitaux.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Socket.io", "Calendar API"],
    githubUrl: "https://github.com/seydinath/medical-appointment-system",
    liveUrl: "/medical-appointment-demo",
    imageUrl: "/images/medical-appointment-illustration.png",
    component: "MedicalAppointmentDemo",
    difficulty: "Avancé",
    duration: "5 semaines",
  },
  {
    id: 4,
    title: "Configurateur VLAN Automatisé",
    description:
      "Outil de configuration automatique des VLANs pour équipements Cisco. Interface web pour générer les scripts de configuration avec validation des règles réseau.",
    technologies: ["Python", "Flask", "Cisco IOS", "VLAN", "Network Automation", "React"],
    githubUrl: "https://github.com/seydinath/vlan-configurator",
    liveUrl: "/vlan-configurator-demo",
    imageUrl: "/images/vlan-configurator-illustration.png",
    difficulty: "Avancé",
    duration: "3 semaines",
  },
  {
    id: 5,
    title: "Animation de Frappe Interactive",
    description:
      "Composant React d'animation de machine à écrire avec contrôles de lecture, textes multiples et effets visuels. Parfait pour les pages d'accueil modernes.",
    technologies: ["React", "TypeScript", "CSS Animations", "Framer Motion", "Hooks"],
    githubUrl: "https://github.com/seydinath/typing-animation-react",
    liveUrl: "/typing-animation",
    imageUrl: "/images/typing-animation-illustration.png",
    component: "TypingAnimation",
    difficulty: "Débutant",
    duration: "1 semaine",
  },
  {
    id: 6,
    title: "Système de Gestion de Tâches",
    description:
      "Application de productivité avec drag & drop, notifications push, synchronisation temps réel et analytics. Interface inspirée de Notion avec fonctionnalités avancées.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "PWA", "Push Notifications"],
    githubUrl: "https://github.com/seydinath/task-management-system",
    liveUrl: "/task-manager-demo",
    imageUrl: "/images/task-manager-illustration.png",
    difficulty: "Intermédiaire",
    duration: "4 semaines",
  },
];

export function ProjectsSection() {
  const [showCatalogue, setShowCatalogue] = useState(false);
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Mes Réalisations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets, alliant innovation technique et design moderne
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mt-6 rounded-full shadow-lg shadow-emerald-500/50" />
          <button
            className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-400 text-white rounded-xl font-bold shadow hover:scale-105 transition-all duration-300"
            onClick={() => setShowCatalogue(true)}
          >
            Découvrir le Catalogue de Flyers
          </button>
        </div>
        {showCatalogue && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center animate-fadeIn">
              <button
                className="absolute top-4 right-4 text-emerald-600 bg-emerald-100 rounded-full p-2 hover:bg-emerald-200 transition"
                onClick={() => setShowCatalogue(false)}
                aria-label="Fermer le message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="pt-8 pb-4">
                <h3 className="text-2xl font-bold text-emerald-500 mb-4">Espace en développement</h3>
                <p className="text-gray-500 text-lg">Le catalogue de flyers sera bientôt disponible.<br/>Restez connecté pour découvrir cette nouveauté !</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Tous", "React", "Network", "Full Stack", "Animation"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-black/20 border border-emerald-500/20 rounded-full text-emerald-400 text-sm hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>
        <ProjectsCarousel projects={projects} />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{projects.length}</div>
            <div className="text-gray-400">Projets Réalisés</div>
          </div>
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{projects.filter((p) => p.component).length}</div>
            <div className="text-gray-400">Démos Interactives</div>
          </div>
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              {Array.from(new Set(projects.flatMap((p) => p.technologies))).length}
            </div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-400">Open Source</div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Tous mes projets sont disponibles sur GitHub</p>
          <a
            href="https://github.com/seydinath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Voir tous mes projets</span>
          </a>
        </div>
      </div>
    </section>
  );
}



function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, projects.length - visibleCount);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smart auto-play: pauses on hover/focus, resumes otherwise
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  React.useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / visibleCount;
      scrollRef.current.scrollTo({
        left: current * cardWidth,
        behavior: "smooth",
      });
    }
  }, [current, visibleCount]);

  const handlePrev = () => setCurrent((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrent((prev) => Math.min(maxIndex, prev + 1));


  // 3D effect: cards rotate slightly based on position, height 520px, spaced out
  const getCardStyle = (idx: number) => {
    const offset = idx - current;
    const isActive = idx >= current && idx < current + visibleCount;
    return {
      flex: `0 0 ${100 / visibleCount}%`,
      height: "600px", // Hauteur idéale pour supprimer la scroll bar verticale
      margin: "0 1.5rem",
      transform:
        isActive
          ? `scale(1.05) perspective(900px) rotateY(${offset * 10}deg)`
          : `scale(0.93) perspective(900px) rotateY(${offset * 20}deg)`,
      opacity: isActive ? 1 : 0.3,
      transition: "transform 0.7s cubic-bezier(.23,1,.32,1), opacity 0.5s",
      zIndex: isActive ? 2 : 1,
      overflow: "hidden",
      boxShadow: isActive ? "0 8px 32px 0 rgba(0,0,0,0.12)" : "none",
      background: "none",
    };
  };

  // Touch event handlers for swipe navigation
  const touchStartX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // Prevent scrolling the page while swiping
    if (touchStartX.current !== null) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handlePrev();
        } else {
          handleNext();
        }
      }
      touchStartX.current = null;
    }
  };

  return (
    <div
      className="relative w-full flex flex-col items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
  <div className="flex items-center justify-center w-full" style={{ cursor: "pointer" }}>
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden overflow-y-hidden snap-x snap-mandatory w-full px-2"
          style={{ scrollBehavior: "smooth", overflowY: "hidden" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-center transition-transform duration-500 ease-in-out"
              style={getCardStyle(idx)}
            >
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-emerald-500 scale-125" : "bg-emerald-300/30"}`}
            aria-label={`Aller à la page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}