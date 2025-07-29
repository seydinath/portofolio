"use client"

import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Formulaire Carte de Crédit Animé",
    description:
      "Interface de paiement interactive avec animation 3D de carte de crédit, validation en temps réel et design moderne. Attention portée aux détails visuels et UX.",
    technologies: ["React", "TypeScript", "CSS 3D", "Animation", "Form Validation"],
    githubUrl: "https://github.com/seydinath/credit-card-form",
    liveUrl: "/credit-card-demo",
    imageUrl: "/placeholder.svg?height=300&width=500",
    component: "CreditCardForm",
  },
  {
    id: 2,
    title: "Démos Interactives",
    description:
      "Collection de composants animés : particules connectées, loaders personnalisés, cartes interactives et boutons morphing avec effets visuels avancés.",
    technologies: ["React", "Canvas API", "CSS Animations", "Interactive Design", "TypeScript"],
    githubUrl: "https://github.com/seydinath/interactive-demos",
    liveUrl: "/interactive-demos",
    imageUrl: "/placeholder.svg?height=300&width=500",
    component: "InteractiveDemos",
  },
  {
    id: 3,
    title: "Showcase Animé",
    description:
      "Vitrine d'animations et effets visuels avancés : éléments flottants, vagues de gradient, systèmes de particules avec contrôles interactifs.",
    technologies: ["React", "CSS Animations", "Visual Effects", "Interactive Controls", "Performance"],
    githubUrl: "https://github.com/seydinath/animated-showcase",
    liveUrl: "/animated-showcase",
    imageUrl: "/placeholder.svg?height=300&width=500",
    component: "AnimatedShowcase",
  },
  {
    id: 4,
    title: "Système de Monitoring Réseau",
    description:
      "Dashboard temps réel pour supervision réseau avec alertes intelligentes, métriques de performance et visualisations interactives des topologies.",
    technologies: ["React", "D3.js", "SNMP", "WebSocket", "Network Analytics"],
    githubUrl: "https://github.com/seydinath/network-monitoring",
    liveUrl: "https://network-monitor.example.com",
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Animation de Frappe",
    description:
      "Effet de machine à écrire dynamique avec textes multiples, contrôles de lecture et animations fluides. Parfait pour les pages d'accueil et présentations.",
    technologies: ["React", "TypeScript", "CSS Animations", "Text Effects", "Interactive Controls"],
    githubUrl: "https://github.com/seydinath/typing-animation",
    liveUrl: "/typing-animation",
    imageUrl: "/placeholder.svg?height=300&width=500",
    component: "TypingAnimation",
  },
  {
    id: 6,
    title: "Cartes Élégantes",
    description:
      "Interface utilisateur soignée avec cartes interactives, effets de hover sophistiqués et design moderne. Démonstration d'attention aux détails visuels.",
    technologies: ["React", "CSS Hover Effects", "UI Design", "Interactive Cards", "Responsive"],
    githubUrl: "https://github.com/seydinath/elegant-cards",
    liveUrl: "/elegant-cards",
    imageUrl: "/placeholder.svg?height=300&width=500",
    component: "ElegantCards",
  },
  {
    id: 7,
    title: "Effets Visuels Avancés",
    description:
      "Collection d'effets visuels CSS avancés : neon glow, particle burst, wave motion avec contrôles interactifs et animations optimisées pour la performance.",
    technologies: ["React", "Advanced CSS", "Visual Effects", "Animation Optimization", "Performance"],
    githubUrl: "https://github.com/seydinath/visual-effects",
    liveUrl: "/visual-effects",
    imageUrl: "/placeholder.svg?height=300&width=500",
    component: "VisualEffects",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations, alliant innovation technique et design moderne
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mt-6 rounded-full shadow-lg shadow-emerald-500/50" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Projects Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{projects.length}</div>
            <div className="text-gray-400">Projets Réalisés</div>
          </div>
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{projects.filter((p) => p.component).length}</div>
            <div className="text-gray-400">Démos Interactives</div>
          </div>
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              {Array.from(new Set(projects.flatMap((p) => p.technologies))).length}
            </div>
            <div className="text-gray-400">Technologies Maîtrisées</div>
          </div>
        </div>
      </div>
    </section>
  )
}
