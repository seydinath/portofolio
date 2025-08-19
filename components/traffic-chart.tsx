"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Download, Upload } from "lucide-react"

export function TrafficChart() {
  const [timeRange, setTimeRange] = useState("1h")
  const [trafficData, setTrafficData] = useState<Array<{ time: string; download: number; upload: number }>>([])

  // Génération de données simulées
  useEffect(() => {
    const generateData = () => {
      const now = new Date()
      const data = []
      const points = timeRange === "1h" ? 60 : timeRange === "6h" ? 72 : 48

      for (let i = points; i >= 0; i--) {
        const time = new Date(now.getTime() - i * (timeRange === "1h" ? 60000 : timeRange === "6h" ? 300000 : 1800000))
        const baseDownload = 45 + Math.sin(i * 0.1) * 15
        const baseUpload = 25 + Math.sin(i * 0.15) * 10

        data.push({
          time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          download: Math.max(0, baseDownload + (Math.random() - 0.5) * 20),
          upload: Math.max(0, baseUpload + (Math.random() - 0.5) * 15),
        })
      }
      return data
    }

    setTrafficData(generateData())

    const interval = setInterval(
      () => {
        setTrafficData((prev) => {
          const newData = [...prev.slice(1)]
          const lastPoint = prev[prev.length - 1]
          const now = new Date()

          newData.push({
            time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            download: Math.max(0, lastPoint.download + (Math.random() - 0.5) * 10),
            upload: Math.max(0, lastPoint.upload + (Math.random() - 0.5) * 8),
          })

          return newData
        })
      },
      timeRange === "1h" ? 60000 : 300000,
    )

    return () => clearInterval(interval)
  }, [timeRange])

  const maxValue = Math.max(...trafficData.flatMap((d) => [d.download, d.upload]), 100)

  return (
    <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
            Network Traffic
          </CardTitle>
          <div className="flex items-center space-x-2">
            {["1h", "6h", "24h"].map((range) => (
              <Button
                key={range}
                size="sm"
                variant={timeRange === range ? "default" : "outline"}
                onClick={() => setTimeRange(range)}
                className={
                  timeRange === range
                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                    : "bg-black/20 border-gray-500/30 text-gray-400 hover:bg-emerald-500/10"
                }
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Legend */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full" />
            <span className="text-gray-400 text-sm">Download</span>
            <Download className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full" />
            <span className="text-gray-400 text-sm">Upload</span>
            <Upload className="w-4 h-4 text-blue-400" />
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-64 bg-gray-900/50 rounded-lg p-4">
          <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={200 - (y / 100) * 200}
                x2="800"
                y2={200 - (y / 100) * 200}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            ))}

            {/* Download line */}
            <polyline
              fill="none"
              stroke="rgb(16, 185, 129)"
              strokeWidth="2"
              points={trafficData
                .map(
                  (point, index) =>
                    `${(index / (trafficData.length - 1)) * 800},${200 - (point.download / maxValue) * 200}`,
                )
                .join(" ")}
            />

            {/* Upload line */}
            <polyline
              fill="none"
              stroke="rgb(96, 165, 250)"
              strokeWidth="2"
              points={trafficData
                .map(
                  (point, index) =>
                    `${(index / (trafficData.length - 1)) * 800},${200 - (point.upload / maxValue) * 200}`,
                )
                .join(" ")}
            />

            {/* Download area */}
            <polygon
              fill="url(#downloadGradient)"
              points={`0,200 ${trafficData
                .map(
                  (point, index) =>
                    `${(index / (trafficData.length - 1)) * 800},${200 - (point.download / maxValue) * 200}`,
                )
                .join(" ")} 800,200`}
            />

            {/* Upload area */}
            <polygon
              fill="url(#uploadGradient)"
              points={`0,200 ${trafficData
                .map(
                  (point, index) =>
                    `${(index / (trafficData.length - 1)) * 800},${200 - (point.upload / maxValue) * 200}`,
                )
                .join(" ")} 800,200`}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="downloadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="uploadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 -ml-8">
            <span>{maxValue.toFixed(0)} Mbps</span>
            <span>{(maxValue * 0.75).toFixed(0)}</span>
            <span>{(maxValue * 0.5).toFixed(0)}</span>
            <span>{(maxValue * 0.25).toFixed(0)}</span>
            <span>0</span>
          </div>
        </div>

        {/* Current stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-900/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Current Download</span>
              <Download className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">
              {trafficData.length > 0 ? trafficData[trafficData.length - 1].download.toFixed(1) : "0"} Mbps
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Current Upload</span>
              <Upload className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-blue-400 mt-1">
              {trafficData.length > 0 ? trafficData[trafficData.length - 1].upload.toFixed(1) : "0"} Mbps
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
