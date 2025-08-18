"use client"

import { useState, useEffect } from "react"

interface SimpleLoadingProps {
  onComplete: () => void
}

export function SimpleLoading({ onComplete }: SimpleLoadingProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-4xl font-bold text-emerald-400 mb-8">Seydina Th.Diagne</div>
        <div className="w-64 bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-emerald-400">{progress}%</div>
      </div>
    </div>
  )
}
