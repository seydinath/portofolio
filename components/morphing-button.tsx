"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw, Download } from "lucide-react"

export function MorphingButton() {
  const [currentState, setCurrentState] = useState<"play" | "pause" | "reset" | "download">("play")
  const [isAnimating, setIsAnimating] = useState(false)

  const states = {
    play: { icon: Play, label: "Lecture", color: "from-green-500 to-emerald-400", next: "pause" },
    pause: { icon: Pause, label: "Pause", color: "from-yellow-500 to-orange-400", next: "reset" },
    reset: { icon: RotateCcw, label: "Reset", color: "from-blue-500 to-cyan-400", next: "download" },
    download: { icon: Download, label: "Télécharger", color: "from-purple-500 to-pink-400", next: "play" },
  }

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentState(states[currentState].next as any)
      setIsAnimating(false)
    }, 200)
  }

  const CurrentIcon = states[currentState].icon

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Bouton Morphing</h3>
          <p className="text-gray-400">Cliquez pour voir la transformation</p>
        </div>

        {/* Morphing Button */}
        <div className="relative">
          <button
            onClick={handleClick}
            className={`group relative px-8 py-4 bg-gradient-to-r ${states[currentState].color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              isAnimating ? "scale-95" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <CurrentIcon
                className={`w-5 h-5 transition-transform duration-300 ${
                  isAnimating ? "rotate-180 scale-0" : "rotate-0 scale-100"
                }`}
              />
              <span
                className={`transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
                }`}
              >
                {states[currentState].label}
              </span>
            </div>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
          </button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {Object.keys(states).map((state, index) => (
              <div
                key={state}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  state === currentState ? "bg-white scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* State Info */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            État actuel: <span className="text-emerald-400 font-semibold">{states[currentState].label}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
