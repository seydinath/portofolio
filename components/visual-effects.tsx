"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Sparkles, Waves } from "lucide-react"

export function VisualEffects() {
  const [activeEffect, setActiveEffect] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const effects = [
    { name: "Neon Glow", icon: Zap, color: "from-cyan-400 to-blue-500" },
    { name: "Particle Burst", icon: Sparkles, color: "from-purple-400 to-pink-500" },
    { name: "Wave Motion", icon: Waves, color: "from-emerald-400 to-green-500" },
  ]

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setActiveEffect((prev) => (prev + 1) % effects.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isAnimating, effects.length])

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-black rounded-xl overflow-hidden relative">
      {/* Effect 1: Neon Glow */}
      {activeEffect === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-cyan-400 rounded-full animate-pulse">
              <div className="absolute inset-4 border-2 border-blue-400 rounded-full animate-ping" />
              <div className="absolute inset-8 border border-cyan-300 rounded-full animate-pulse delay-500" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-8 h-8 text-cyan-400 animate-bounce" />
            </div>
          </div>
        </div>
      )}

      {/* Effect 2: Particle Burst */}
      {activeEffect === 1 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
                style={{
                  left: `${50 + 30 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                  top: `${50 + 30 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-purple-400 animate-spin" />
            </div>
          </div>
        </div>
      )}

      {/* Effect 3: Wave Motion */}
      {activeEffect === 2 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-24">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 border-emerald-400 rounded-full opacity-30 animate-ping"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <Waves className="w-8 h-8 text-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsAnimating(!isAnimating)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {isAnimating ? "Pause" : "Play"}
          </Button>

          <div className="flex space-x-2">
            {effects.map((effect, index) => (
              <button
                key={index}
                onClick={() => setActiveEffect(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeEffect === index ? "bg-emerald-400 scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Effect Info */}
      <div className="absolute top-4 left-4">
        <div className="text-white font-semibold text-sm">{effects[activeEffect].name}</div>
      </div>
    </div>
  )
}
