"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export function AnimatedShowcase() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentDemo, setCurrentDemo] = useState(0)

  const demos = [
    {
      id: 1,
      title: "Floating Elements",
      description: "Éléments flottants avec physique réaliste",
    },
    {
      id: 2,
      title: "Gradient Waves",
      description: "Vagues de gradient animées",
    },
    {
      id: 3,
      title: "Particle System",
      description: "Système de particules interactif",
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, demos.length])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const resetDemo = () => {
    setCurrentDemo(0)
    setIsPlaying(true)
  }

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-black rounded-xl overflow-hidden relative">
      {/* Demo 1: Floating Elements */}
      {currentDemo === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-80 h-80">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full ${
                  isPlaying ? "animate-bounce" : ""
                }`}
                style={{
                  left: `${20 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 25}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + (i % 3)}s`,
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-xl font-bold mb-2">Floating Elements</h3>
                <p className="text-gray-400 text-sm">Éléments flottants avec physique</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo 2: Gradient Waves */}
      {currentDemo === 1 && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400 opacity-30">
            <div
              className={`absolute inset-0 ${
                isPlaying ? "animate-pulse" : ""
              } bg-gradient-to-r from-transparent via-white/10 to-transparent`}
              style={{
                background: isPlaying
                  ? "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)"
                  : "none",
                animation: isPlaying ? "wave 3s ease-in-out infinite" : "none",
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-2">Gradient Waves</h3>
              <p className="text-gray-400 text-sm">Vagues de gradient animées</p>
            </div>
          </div>
        </div>
      )}

      {/* Demo 3: Particle System */}
      {currentDemo === 2 && (
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-emerald-400 rounded-full ${isPlaying ? "animate-ping" : ""}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-2">Particle System</h3>
              <p className="text-gray-400 text-sm">Système de particules interactif</p>
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          size="sm"
          variant="outline"
          onClick={togglePlayback}
          className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={resetDemo}
          className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>

        {/* Demo Indicators */}
        <div className="flex space-x-2">
          {demos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDemo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentDemo === index ? "bg-emerald-400 scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          50% {
            transform: translateX(0%) skewX(0deg);
          }
          100% {
            transform: translateX(100%) skewX(15deg);
          }
        }
      `}</style>
    </div>
  )
}
