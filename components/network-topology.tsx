"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Router, Server, Wifi, Shield, Globe, Monitor, Smartphone, Laptop } from "lucide-react"

export function NetworkTopology() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null)

  const devices = [
    {
      id: "internet",
      name: "Internet",
      type: "internet",
      icon: Globe,
      x: 50,
      y: 10,
      status: "online",
      connections: ["firewall"],
    },
    {
      id: "firewall",
      name: "Firewall-Main",
      type: "firewall",
      icon: Shield,
      x: 50,
      y: 25,
      status: "online",
      connections: ["router-core"],
      ip: "203.0.113.1",
    },
    {
      id: "router-core",
      name: "Core-Router",
      type: "router",
      icon: Router,
      x: 50,
      y: 40,
      status: "online",
      connections: ["switch-main", "switch-dmz"],
      ip: "192.168.1.1",
    },
    {
      id: "switch-main",
      name: "Main-Switch",
      type: "switch",
      icon: Server,
      x: 25,
      y: 60,
      status: "online",
      connections: ["ap-1", "ap-2", "server-1"],
      ip: "192.168.1.10",
    },
    {
      id: "switch-dmz",
      name: "DMZ-Switch",
      type: "switch",
      icon: Server,
      x: 75,
      y: 60,
      status: "warning",
      connections: ["server-web", "server-mail"],
      ip: "172.16.1.10",
    },
    {
      id: "ap-1",
      name: "Access-Point-1",
      type: "ap",
      icon: Wifi,
      x: 10,
      y: 80,
      status: "online",
      connections: ["client-1", "client-2"],
      ip: "192.168.100.1",
    },
    {
      id: "ap-2",
      name: "Access-Point-2",
      type: "ap",
      icon: Wifi,
      x: 40,
      y: 80,
      status: "online",
      connections: ["client-3"],
      ip: "192.168.100.2",
    },
    {
      id: "server-1",
      name: "File-Server",
      type: "server",
      icon: Monitor,
      x: 25,
      y: 80,
      status: "online",
      connections: [],
      ip: "192.168.1.100",
    },
    {
      id: "server-web",
      name: "Web-Server",
      type: "server",
      icon: Monitor,
      x: 65,
      y: 80,
      status: "online",
      connections: [],
      ip: "172.16.1.100",
    },
    {
      id: "server-mail",
      name: "Mail-Server",
      type: "server",
      icon: Monitor,
      x: 85,
      y: 80,
      status: "critical",
      connections: [],
      ip: "172.16.1.101",
    },
    {
      id: "client-1",
      name: "Laptop-001",
      type: "client",
      icon: Laptop,
      x: 5,
      y: 95,
      status: "online",
      connections: [],
      ip: "192.168.100.101",
    },
    {
      id: "client-2",
      name: "Phone-001",
      type: "client",
      icon: Smartphone,
      x: 15,
      y: 95,
      status: "online",
      connections: [],
      ip: "192.168.100.102",
    },
    {
      id: "client-3",
      name: "Laptop-002",
      type: "client",
      icon: Laptop,
      x: 40,
      y: 95,
      status: "online",
      connections: [],
      ip: "192.168.100.103",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-400 border-green-400"
      case "warning":
        return "text-yellow-400 border-yellow-400"
      case "critical":
        return "text-red-400 border-red-400"
      default:
        return "text-gray-400 border-gray-400"
    }
  }

  const getConnectionPath = (from: any, to: any) => {
    const fromDevice = devices.find((d) => d.id === from)
    const toDevice = devices.find((d) => d.id === to)
    if (!fromDevice || !toDevice) return ""

    return `M ${fromDevice.x} ${fromDevice.y} L ${toDevice.x} ${toDevice.y}`
  }

  const selectedDeviceData = devices.find((d) => d.id === selectedDevice)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Topology Visualization */}
      <div className="lg:col-span-3">
        <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span className="flex items-center">
                <Router className="w-5 h-5 mr-2 text-emerald-400" />
                Network Topology
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-gray-400">Online</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <span className="text-gray-400">Warning</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="text-gray-400">Critical</span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-96 bg-gray-900/50 rounded-lg overflow-hidden">
              {/* SVG for connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {devices.map((device) =>
                  device.connections.map((connectionId) => (
                    <path
                      key={`${device.id}-${connectionId}`}
                      d={getConnectionPath(device.id, connectionId)}
                      stroke="rgba(16, 185, 129, 0.3)"
                      strokeWidth="0.2"
                      fill="none"
                      className="animate-pulse"
                    />
                  )),
                )}
              </svg>

              {/* Devices */}
              {devices.map((device) => {
                const Icon = device.icon
                return (
                  <div
                    key={device.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                      selectedDevice === device.id ? "scale-125 z-10" : "hover:scale-110"
                    }`}
                    style={{ left: `${device.x}%`, top: `${device.y}%` }}
                    onClick={() => setSelectedDevice(device.id)}
                  >
                    <div
                      className={`p-3 rounded-lg border-2 bg-black/80 backdrop-blur-sm ${getStatusColor(
                        device.status,
                      )} ${selectedDevice === device.id ? "ring-2 ring-emerald-400" : ""}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
                      <span className="text-xs text-white bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                        {device.name}
                      </span>
                    </div>
                  </div>
                )
              })}

              {/* Data flow animation */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-60"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Device Details */}
      <div>
        <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white">Device Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDeviceData ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <selectedDeviceData.icon className={`w-8 h-8 ${getStatusColor(selectedDeviceData.status)}`} />
                  <div>
                    <h3 className="text-white font-semibold">{selectedDeviceData.name}</h3>
                    <p className="text-gray-400 text-sm capitalize">{selectedDeviceData.type}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <Badge
                      variant="outline"
                      className={
                        selectedDeviceData.status === "online"
                          ? "bg-green-500/10 border-green-500/30 text-green-400"
                          : selectedDeviceData.status === "warning"
                            ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                            : "bg-red-500/10 border-red-500/30 text-red-400"
                      }
                    >
                      {selectedDeviceData.status}
                    </Badge>
                  </div>

                  {selectedDeviceData.ip && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">IP Address:</span>
                      <span className="text-white font-mono text-sm">{selectedDeviceData.ip}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-gray-400">Connections:</span>
                    <span className="text-white">{selectedDeviceData.connections.length}</span>
                  </div>
                </div>

                {selectedDeviceData.connections.length > 0 && (
                  <div>
                    <h4 className="text-white font-semibold mb-2">Connected To:</h4>
                    <div className="space-y-1">
                      {selectedDeviceData.connections.map((connId) => {
                        const connDevice = devices.find((d) => d.id === connId)
                        return (
                          <div key={connId} className="text-sm text-gray-400">
                            • {connDevice?.name}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="pt-4 space-y-2">
                  <Button
                    size="sm"
                    className="w-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                  >
                    Configure Device
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-gray-500/10 border-gray-500/30 text-gray-400 hover:bg-gray-500/20"
                  >
                    View Logs
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Router className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Click on a device to view details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
