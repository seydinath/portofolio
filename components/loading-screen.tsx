"use client"

import { useState, useEffect } from "react"
import { Terminal, Code, Wifi, Shield, Zap } from "lucide-react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const steps = [
    { text: "Initialisation du portfolio...", icon: Terminal, delay: 500 },
    { text: "Chargement des compétences CCNA...", icon: Wifi, delay: 800 },
    { text: "Compilation du code React...", icon: Code, delay: 700 },
    { text: "Sécurisation des données...", icon: Shield, delay: 600 },
    { text: "Optimisation des performances...", icon: Zap, delay: 500 },
    { text: "Café en cours de préparation... ☕", icon: Terminal, delay: 800 },
    { text: "Prêt ! Bienvenue dans mon univers 🚀", icon: Zap, delay: 600 },
  ]

  const funnyMessages = [
    "// TODO: Devenir millionnaire",
    "console.log('Hello World!');",
    "if (coffee === null) { panic(); }",
    "git commit -m 'ça marche sur ma machine'",
    "sudo make me a sandwich",
    "404: Motivation not found... Just kidding!",
  ]

  const stepDelays = steps.map((step) => step.delay)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1)
      } else {
        setTimeout(onComplete, 500)
      }
    }, stepDelays[currentStep] || 500)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(!showCursor)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [showCursor])

  useEffect(() => {
    if (currentStep < steps.length) {
      const text = steps[currentStep].text
      let index = 0
      setDisplayText("")

      const typeTimer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(typeTimer)
        }
      }, 30)

      return () => clearInterval(typeTimer)
    }
  }, [currentStep])

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center z-50">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400 font-mono text-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Terminal Window */}
        <div className="bg-black/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-emerald-400 font-mono text-sm">seydina@portfolio:~$</div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-4 mb-8">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 font-mono text-sm transition-all duration-300 ${
                  index === currentStep ? "text-emerald-400" : "text-gray-500"
                }`}
              >
                <step.icon className="w-4 h-4" />
                <span>
                  {index === currentStep ? displayText : step.text}
                  {index === currentStep && showCursor && <span className="text-emerald-400 animate-pulse">|</span>}
                </span>
                {index < currentStep && <span className="text-green-400">✓</span>}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Progression</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Funny Code Snippets */}
          <div className="bg-gray-900/50 rounded-lg p-4 border border-emerald-500/20">
            <div className="text-xs text-gray-400 mb-2">// Pendant ce temps dans le code...</div>
            <div className="font-mono text-sm text-emerald-300">
              {funnyMessages[currentStep % funnyMessages.length]}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-emerald-500/30 rounded-full animate-spin opacity-30" />
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-green-400/20 rounded-full animate-ping opacity-20" />
        <div className="absolute top-1/2 -right-20 w-12 h-12 border border-emerald-300/25 rounded-full animate-bounce opacity-25" />

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Glitch Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-emerald-400 opacity-20 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-24 bg-green-300 opacity-15 animate-pulse delay-1000" />
      </div>
    </div>
  )
}
