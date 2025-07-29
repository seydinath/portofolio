"use client"

import { useState } from "react"

export function LoadingSpinner() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = () => {
    setIsLoading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-emerald-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-green-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-emerald-300/25 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="text-center space-y-8">
        {!isLoading ? (
          <>
            <h3 className="text-2xl font-bold text-white mb-4">Loader Animé</h3>
            <button
              onClick={startLoading}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg hover:from-emerald-500 hover:to-green-400 transition-all duration-300 transform hover:scale-105"
            >
              Démarrer le chargement
            </button>
          </>
        ) : (
          <div className="space-y-6">
            {/* Circular Progress */}
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="8" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-400">{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto">
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Spinning Dots */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>

            <p className="text-gray-400">Chargement en cours...</p>
          </div>
        )}
      </div>
    </div>
  )
}
