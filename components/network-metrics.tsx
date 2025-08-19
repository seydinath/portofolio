"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Activity, Cpu, HardDrive, Network, Thermometer, Zap } from "lucide-react"

export function NetworkMetrics() {
  const [metrics, setMetrics] = useState({
    bandwidth: 68,
    latency: 12,
    packetLoss: 0.02,
    cpuUsage: 45,
    memoryUsage: 67,
    temperature: 42,
  })

  // Simulation de données en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        bandwidth: Math.max(0, Math.min(100, prev.bandwidth + (Math.random() - 0.5) * 10)),
        latency: Math.max(1, Math.min(100, prev.latency + (Math.random() - 0.5) * 5)),
        packetLoss: Math.max(0, Math.min(5, prev.packetLoss + (Math.random() - 0.5) * 0.1)),
        cpuUsage: Math.max(0, Math.min(100, prev.cpuUsage + (Math.random() - 0.5) * 8)),
        memoryUsage: Math.max(0, Math.min(100, prev.memoryUsage + (Math.random() - 0.5) * 6)),
        temperature: Math.max(20, Math.min(80, prev.temperature + (Math.random() - 0.5) * 3)),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const metricItems = [
    {
      label: "Bandwidth Usage",
      value: metrics.bandwidth,
      unit: "%",
      icon: Network,
      color: metrics.bandwidth > 80 ? "text-red-400" : metrics.bandwidth > 60 ? "text-yellow-400" : "text-green-400",
      progressColor: metrics.bandwidth > 80 ? "bg-red-400" : metrics.bandwidth > 60 ? "bg-yellow-400" : "bg-green-400",
    },
    {
      label: "Average Latency",
      value: metrics.latency,
      unit: "ms",
      icon: Zap,
      color: metrics.latency > 50 ? "text-red-400" : metrics.latency > 25 ? "text-yellow-400" : "text-green-400",
      progressColor: metrics.latency > 50 ? "bg-red-400" : metrics.latency > 25 ? "bg-yellow-400" : "bg-green-400",
      max: 100,
    },
    {
      label: "Packet Loss",
      value: metrics.packetLoss,
      unit: "%",
      icon: Activity,
      color: metrics.packetLoss > 1 ? "text-red-400" : metrics.packetLoss > 0.5 ? "text-yellow-400" : "text-green-400",
      progressColor:
        metrics.packetLoss > 1 ? "bg-red-400" : metrics.packetLoss > 0.5 ? "bg-yellow-400" : "bg-green-400",
      max: 5,
    },
    {
      label: "CPU Usage",
      value: metrics.cpuUsage,
      unit: "%",
      icon: Cpu,
      color: metrics.cpuUsage > 80 ? "text-red-400" : metrics.cpuUsage > 60 ? "text-yellow-400" : "text-green-400",
      progressColor: metrics.cpuUsage > 80 ? "bg-red-400" : metrics.cpuUsage > 60 ? "bg-yellow-400" : "bg-green-400",
    },
    {
      label: "Memory Usage",
      value: metrics.memoryUsage,
      unit: "%",
      icon: HardDrive,
      color:
        metrics.memoryUsage > 80 ? "text-red-400" : metrics.memoryUsage > 60 ? "text-yellow-400" : "text-green-400",
      progressColor:
        metrics.memoryUsage > 80 ? "bg-red-400" : metrics.memoryUsage > 60 ? "bg-yellow-400" : "bg-green-400",
    },
    {
      label: "Temperature",
      value: metrics.temperature,
      unit: "°C",
      icon: Thermometer,
      color:
        metrics.temperature > 60 ? "text-red-400" : metrics.temperature > 45 ? "text-yellow-400" : "text-green-400",
      progressColor:
        metrics.temperature > 60 ? "bg-red-400" : metrics.temperature > 45 ? "bg-yellow-400" : "bg-green-400",
      max: 80,
    },
  ]

  return (
    <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-emerald-400" />
          Network Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metricItems.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                  <span className="text-gray-400 text-sm">{metric.label}</span>
                </div>
                <span className={`font-semibold ${metric.color}`}>
                  {metric.value.toFixed(metric.unit === "%" && metric.value < 1 ? 2 : 0)}
                  {metric.unit}
                </span>
              </div>
              <div className="relative">
                <Progress
                  value={(metric.value / (metric.max || 100)) * 100}
                  className="h-2 bg-gray-700"
                  // Note: Progress component styling would need to be customized for colors
                />
                <div
                  className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${metric.progressColor}`}
                  style={{ width: `${(metric.value / (metric.max || 100)) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Real-time indicator */}
        <div className="mt-6 pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Real-time monitoring active</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
