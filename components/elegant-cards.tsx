"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Share2, Bookmark } from "lucide-react"

const cardData = [
  {
    id: 1,
    title: "Interface Moderne",
    description: "Design épuré avec attention aux détails",
    color: "from-purple-500 to-pink-500",
    icon: Heart,
  },
  {
    id: 2,
    title: "Expérience Premium",
    description: "Interactions fluides et intuitives",
    color: "from-blue-500 to-cyan-500",
    icon: Star,
  },
  {
    id: 3,
    title: "Performance Optimale",
    description: "Chargement rapide et responsive",
    color: "from-emerald-500 to-green-500",
    icon: Share2,
  },
  {
    id: 4,
    title: "Code Maintenable",
    description: "Architecture solide et évolutive",
    color: "from-orange-500 to-red-500",
    icon: Bookmark,
  },
]

export function ElegantCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-black rounded-xl p-8 overflow-hidden relative">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Cartes Élégantes</h3>
        <p className="text-gray-400">Interface utilisateur soignée et interactive</p>
      </div>

      <div className="grid grid-cols-2 gap-4 h-48">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className={`group relative bg-black/20 backdrop-blur-sm border-0 cursor-pointer overflow-hidden transition-all duration-500 ${
              hoveredCard === card.id ? "scale-105 z-10" : hoveredCard !== null ? "scale-95 opacity-70" : ""
            }`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-4 h-full flex flex-col justify-between relative">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <card.icon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                </div>

                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-300">
                  {card.title}
                </h4>

                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300">{card.description}</p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-lg transition-all duration-300" />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
