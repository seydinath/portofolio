"use client";
import React, { useState } from "react";


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

const websites = [
  {
    id: 1,
    name: "STC – Sylla Trading Corporation",
    stack: "WordPress (CMS moderne)",
    description:
      "Site vitrine institutionnel mettant en avant des projets BTP, conçu pour une publication simple et régulière des réalisations.",
    link: "https://stc-sn.com/",
    highlights: [
      "Modules de galerie et gestion de contenu",
      "Mise à jour régulière et optimisation SEO",
      "Présentation claire et fiable des projets BTP",
    ],
  },
  {
    id: 2,
    name: "2T BTP",
    stack: "React + bibliothèques 2D/3D & BIM",
    description:
      "Interface interactive et immersive illustrant l’innovation technologique via des rendus 2D/3D.",
    link: "https://2tbtp.sn/",
    highlights: [
      "Intégration d’outils de visualisation 2D/3D",
      "Orientation BIM pour la projection des projets",
      "UI moderne valorisant l’expertise technique",
    ],
  },
  {
    id: 3,
    name: "Medimag",
    stack: "CMS e‑commerce + paiement sécurisé",
    description:
      "Plateforme e‑commerce d’équipements dentaires avec catalogue riche et intégrations logistiques.",
    link: "https://medimagsn.com/",
    highlights: [
      "Gestion de catalogue et paiement sécurisé",
      "Navigation claire et présentation détaillée des produits",
      "Intégration logistique et optimisation éditoriale",
    ],
  },
  {
    id: 4,
    name: "Truelle d’Or",
    stack: "CMS flexible + plugins événementiels",
    description:
      "Vitrine institutionnelle avec modules d’événements, inscriptions et galeries multimédias.",
    link: "https://truelledor.com/",
    highlights: [
      "Modules de gestion d’événements et formulaires d’inscription",
      "Galeries multimédias et mise en avant des activités",
      "CMS flexible avec plugins de contenu",
    ],
  },
  {
    id: 5,
    name: "Lesekou",
    stack: "CMS + JavaScript moderne (prévu)",
    description:
      "Bases d’une plateforme interactive et évolutive, prête à accueillir des services numériques variés.",
    link: "https://lesekou.com/",
    highlights: [
      "Architecture adaptable et extensible",
      "Fondations pour des fonctionnalités interactives",
      "Orientation services numériques",
    ],
  },
  {
    id: 6,
    name: "Sobat SN",
    stack: "CMS (en définition)",
    description:
      "Plateforme locale en cours de définition, pensée pour le marché sénégalais avec une identité cohérente.",
    link: "https://sobatsn.com/",
    highlights: [
      "Architecture évolutive",
      "Identité visuelle cohérente",
      "Approche locale et contextualisée",
    ],
  },
  {
    id: 7,
    name: "Agrow",
    stack: "Next.js + Vercel (SSR)",
    description:
      "Plateforme connectant les acteurs agricoles avec performance, SEO et déploiement scalable.",
    link: "https://agrowomanecology.com/",
    highlights: [
      "Rendu côté serveur (SSR) et SEO natif",
      "Interface rapide et responsive",
      "Connexion des acteurs agricoles via une expérience fluide",
    ],
  },
];

export function ProjectsSection() {
  const [showCatalogue, setShowCatalogue] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(projects[0]?.id ?? null);
  const [activeWebsiteId, setActiveWebsiteId] = useState<number | null>(websites[0]?.id ?? null);
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
          {["Tous", "React", "Network", "Full Stack", "Animation"].map((filter, idx) => (
            <button
              key={filter}
              className="px-4 py-2 bg-black/20 border border-emerald-500/20 rounded-full text-emerald-400 text-sm hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Interfaces & Démos</h3>
            <div className="space-y-3">
              {projects.map((project, idx) => {
                const isActive = activeId === project.id;
                return (
                  <div
                    key={project.id}
                    className={`group rounded-2xl border transition-all duration-300 backdrop-blur-sm hover-lift animate-fade-in-up ${
                      isActive 
                        ? "bg-emerald-500/10 border-emerald-500/60 shadow-lg shadow-emerald-500/20"
                        : "bg-black/20 border-emerald-500/20 hover:bg-emerald-500/5 hover:border-emerald-500/40"
                    }`}
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveId(isActive ? null : project.id)}
                      className="w-full px-6 py-5 text-left flex flex-wrap items-center justify-between gap-3"
                      aria-expanded={isActive}
                    >
                      <div>
                        <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-400">{project.difficulty} • {project.duration}</p>
                      </div>
                      <span className={`text-emerald-400 text-sm font-semibold transition-transform ${isActive ? "rotate-180" : "rotate-0"}`}>
                        ▾
                      </span>
                    </button>

                    <div
                      className={`px-6 pb-6 transition-all duration-300 ${
                        isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition"
                        >
                          Voir le code
                        </a>
                        <a
                          href={project.liveUrl}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-500 text-white hover:from-emerald-500 hover:to-green-400 transition"
                        >
                          Voir la démo
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Sites Web réalisés</h3>
            <div className="space-y-3">
              {websites.map((site, idx) => {
                const isActive = activeWebsiteId === site.id;
                return (
                  <div
                    key={site.id}
                    className={`group rounded-2xl border transition-all duration-300 backdrop-blur-sm hover-lift animate-fade-in-up ${
                      isActive
                        ? "border-blue-500/40 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                        : "border-emerald-500/20 bg-black/20 hover:border-blue-500/40"
                    }`}
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveWebsiteId(isActive ? null : site.id)}
                      className="w-full px-6 py-5 text-left flex flex-wrap items-center justify-between gap-3"
                      aria-expanded={isActive}
                    >
                      <div>
                        <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {site.name}
                        </h4>
                        <p className="text-sm text-gray-400">{site.stack}</p>
                      </div>
                      <span className={`text-blue-300 text-sm font-semibold transition-transform ${isActive ? "rotate-180" : "rotate-0"}`}>
                        ▾
                      </span>
                    </button>

                    <div
                      className={`px-6 pb-6 transition-all duration-300 ${
                        isActive ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{site.description}</p>
                      <ul className="space-y-2">
                        {site.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {site.link && (
                        <div className="mt-4">
                          <a
                            href={site.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition"
                          >
                            Visiter le site
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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