"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Server, Router, Wifi, Shield, Monitor } from "lucide-react"

export function DeviceStatus() {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Core-Switch-01",
      type: "switch",
      status: "online",
      cpu: 45,
      memory: 67,
      uptime: "45d 12h",
      interfaces: { active: 22, total: 24 },
    },
    {
      id: 2,
      name: "Router-WAN-02",
      type: "router",
      status: "warning",
      cpu: 85,
      memory: 72,
      uptime: "23d 8h",
      interfaces: { active: 3, total: 4 },
    },
    {
      id: 3,
      name: "Firewall-DMZ",
      type: "firewall",
      status: "critical",
      cpu: 92,
      memory: 88,
      uptime: "12d 4h",
      interfaces: { active: 5, total: 6 },
    },
    {
      id: 4,
      name: "Access-Point-15",
      type: "ap",
      status: "online",
      cpu: 23,
      memory: 34,
      uptime: "67d 2h",
      interfaces: { active: 1, total: 1 },
    },
    {
      id: 5,
      name: "File-Server-01",
      type: "server",
      status: "online",
      cpu: 56,
      memory: 78,
      uptime: "89d 15h",
      interfaces: { active: 2, total: 2 },
    },
  ])

  // Simulation de mise à jour des métriques
  useEffect(() => {
    const interval = setInterval(() => {
      setDevices((prev) =>
        prev.map((device) => ({
          ...device,
          cpu: Math.max(0, Math.min(100, device.cpu + (Math.random() - 0.5) * 10)),
          memory: Math.max(0, Math.min(100, device.memory + (Math.random() - 0.5) * 5)),
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "switch":
        return Server
      case "router":
        return Router
      case "firewall":
        return Shield
      case "ap":
        return Wifi
      case "server":
        return Monitor
      default:
        return Server
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500/10 border-green-500/30 text-green-400"
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
      case "critical":
        return "bg-red-500/10 border-red-500/30 text-red-400"
      default:
        return "bg-gray-500/10 border-gray-500/30 text-gray-400"
    }
  }

  const onlineDevices = devices.filter((d) => d.status === "online").length
  const totalDevices = devices.length

  return (
    <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center">
            <Server className="w-5 h-5 mr-2 text-emerald-400" />
            Device Status
          </CardTitle>
          <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
            {onlineDevices}/{totalDevices} Online
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {devices.map((device) => {
            const DeviceIcon = getDeviceIcon(device.type)
            return (
              <div key={device.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <DeviceIcon className="w-5 h-5 text-emerald-400" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{device.name}</h4>
                      <p className="text-gray-400 text-xs capitalize">{device.type}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getStatusColor(device.status)}>
                    {device.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">CPU</span>
                      <span className="text-white">{device.cpu.toFixed(0)}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={device.cpu} className="h-2 bg-gray-700" />
                      <div
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${
                          device.cpu > 80 ? "bg-red-400" : device.cpu > 60 ? "bg-yellow-400" : "bg-green-400"
                        }`}
                        style={{ width: `${device.cpu}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Memory</span>
                      <span className="text-white">{device.memory.toFixed(0)}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={device.memory} className="h-2 bg-gray-700" />
                      <div
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${
                          device.memory > 80 ? "bg-red-400" : device.memory > 60 ? "bg-yellow-400" : "bg-green-400"
                        }`}
                        style={{ width: `${device.memory}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">
                    Uptime: <span className="text-white">{device.uptime}</span>
                  </span>
                  <span className="text-gray-400">
                    Interfaces:{" "}
                    <span className="text-white">
                      {device.interfaces.active}/{device.interfaces.total}
                    </span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-green-400">{onlineDevices}</div>
              <div className="text-xs text-gray-400">Online</div>
            </div>
            <div>
              <div className="text-lg font-bold text-yellow-400">
                {devices.filter((d) => d.status === "warning").length}
              </div>
              <div className="text-xs text-gray-400">Warning</div>
            </div>
            <div>
              <div className="text-lg font-bold text-red-400">
                {devices.filter((d) => d.status === "critical").length}
              </div>
              <div className="text-xs text-gray-400">Critical</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
