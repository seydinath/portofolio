"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Play, Pause } from "lucide-react"

export function TypingAnimation() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const texts = ["Développeur Full Stack", "Expert en Réseau", "Architecte Logiciel", "Créateur d'Interfaces"]

  useEffect(() => {
    if (!isPlaying) return

    const currentFullText = texts[currentIndex]

    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsTyping(false), 1000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setCurrentIndex((prev) => (prev + 1) % texts.length)
            setIsTyping(true)
          }
        }
      },
      isTyping ? 100 : 50,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isTyping, isPlaying, texts])

  const resetAnimation = () => {
    setCurrentText("")
    setCurrentIndex(0)
    setIsTyping(true)
    setIsPlaying(true)
  }

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-emerald-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Animation de Frappe</h3>

          {/* Typing Display */}
          <div className="h-16 flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-mono text-emerald-400">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={resetAnimation}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2">
          {texts.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-emerald-400 scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
