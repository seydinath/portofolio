"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Shield } from "lucide-react"

const cards = [
  {
    id: 1,
    title: "Développement",
    description: "Création d'applications web modernes et performantes",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "Design",
    description: "Interfaces utilisateur élégantes et intuitives",
    icon: Palette,
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 3,
    title: "Performance",
    description: "Optimisation et vitesse de chargement",
    icon: Zap,
    color: "from-yellow-500 to-orange-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: 4,
    title: "Sécurité",
    description: "Protection et fiabilité des données",
    icon: Shield,
    color: "from-emerald-500 to-green-400",
    bgColor: "bg-emerald-500/10",
  },
]

export function InteractiveCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-black rounded-xl p-8 overflow-hidden relative">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Cartes Interactives</h3>
        <p className="text-gray-400">Survolez les cartes pour voir les effets</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-48">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`group relative bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden ${
              hoveredCard === card.id ? "scale-105 z-10" : hoveredCard !== null ? "scale-95 opacity-50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center relative">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`p-3 rounded-lg ${card.bgColor} mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h4 className="text-white font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {card.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {card.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 right-4 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000" />
      </div>
    </div>
  )
}
