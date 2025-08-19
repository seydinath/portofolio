"use client"

import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Formulaire Carte de Crédit Animé",
    description:
      "Interface de paiement interactive avec animation 3D de carte de crédit, validation en temps réel et design moderne. Attention portée aux détails visuels et UX.",
    technologies: ["React", "TypeScript", "CSS 3D", "Animation", "Form Validation"],
    githubUrl: "https://github.com/seydinath/credit-card-form-3d",
    liveUrl: "/credit-card-demo",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Credit+Card+Form",
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
    imageUrl: "/placeholder.svg?height=300&width=500&text=Network+Dashboard",
    difficulty: "Avancé",
    duration: "1 mois",
  },
  {
    id: 3,
    title: "Application E-commerce Full Stack",
    description:
      "Plateforme e-commerce complète avec gestion des produits, panier, paiements Stripe, authentification JWT et panel d'administration. Architecture microservices.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "JWT"],
    githubUrl: "https://github.com/seydinath/ecommerce-fullstack",
    liveUrl: "https://ecommerce-demo-sth.vercel.app",
    imageUrl: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
    difficulty: "Avancé",
    duration: "6 semaines",
  },
  {
    id: 4,
    title: "Configurateur VLAN Automatisé",
    description:
      "Outil de configuration automatique des VLANs pour équipements Cisco. Interface web pour générer les scripts de configuration avec validation des règles réseau.",
    technologies: ["Python", "Flask", "Cisco IOS", "VLAN", "Network Automation", "React"],
    githubUrl: "https://github.com/seydinath/vlan-configurator",
    liveUrl: "/vlan-configurator-demo",
    imageUrl: "/placeholder.svg?height=300&width=500&text=VLAN+Configurator",
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
    imageUrl: "/placeholder.svg?height=300&width=500&text=Typing+Animation",
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
    imageUrl: "/placeholder.svg?height=300&width=500&text=Task+Manager",
    difficulty: "Intermédiaire",
    duration: "4 semaines",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Mes Réalisations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets, alliant innovation technique et design moderne
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mt-6 rounded-full shadow-lg shadow-emerald-500/50" />
        </div>

        {/* Filter Tags */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Projects Stats */}
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

        {/* GitHub CTA */}
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
  )
}
