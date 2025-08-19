"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  HardDrive,
  Router,
  Server,
  Shield,
  TrendingUp,
  Users,
  XCircle,
  Zap,
  Globe,
  Database,
  Monitor,
  Settings,
} from "lucide-react"
import { NetworkTopology } from "./network-topology"
import { NetworkMetrics } from "./network-metrics"
import { AlertsPanel } from "./alerts-panel"
import { TrafficChart } from "./traffic-chart"
import { DeviceStatus } from "./device-status"

export function NetworkDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isRealTime, setIsRealTime] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Données simulées pour le dashboard
  const networkStats = {
    totalDevices: 247,
    activeDevices: 239,
    criticalAlerts: 3,
    warnings: 12,
    totalBandwidth: "10 Gbps",
    usedBandwidth: "6.8 Gbps",
    uptime: "99.97%",
    avgLatency: "12ms",
  }

  const recentAlerts = [
    {
      id: 1,
      type: "critical",
      device: "Core-Switch-01",
      message: "Interface GigabitEthernet0/1 Down",
      time: "2 min ago",
      ip: "192.168.1.10",
    },
    {
      id: 2,
      type: "warning",
      device: "Router-WAN-02",
      message: "High CPU utilization (85%)",
      time: "5 min ago",
      ip: "10.0.0.1",
    },
    {
      id: 3,
      type: "critical",
      device: "Firewall-DMZ",
      message: "Security policy violation detected",
      time: "8 min ago",
      ip: "172.16.0.1",
    },
    {
      id: 4,
      type: "info",
      device: "Access-Point-15",
      message: "New device connected",
      time: "12 min ago",
      ip: "192.168.100.15",
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent mb-2">
                Network Operations Center
              </h1>
              <p className="text-gray-400">Surveillance réseau en temps réel - CCNA Dashboard</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isRealTime ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
                <span className="text-sm text-gray-400">
                  {isRealTime ? "Live" : "Paused"} - {currentTime.toLocaleTimeString()}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRealTime(!isRealTime)}
                className="bg-black/20 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              >
                {isRealTime ? "Pause" : "Resume"}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { label: "Devices", value: networkStats.totalDevices, icon: Router, color: "text-blue-400" },
              { label: "Active", value: networkStats.activeDevices, icon: CheckCircle, color: "text-green-400" },
              { label: "Critical", value: networkStats.criticalAlerts, icon: AlertTriangle, color: "text-red-400" },
              { label: "Warnings", value: networkStats.warnings, icon: XCircle, color: "text-yellow-400" },
              { label: "Bandwidth", value: "68%", icon: TrendingUp, color: "text-emerald-400" },
              { label: "Uptime", value: networkStats.uptime, icon: Activity, color: "text-green-400" },
              { label: "Latency", value: networkStats.avgLatency, icon: Zap, color: "text-purple-400" },
              { label: "Users", value: "1,247", icon: Users, color: "text-cyan-400" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-black/20 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-black/20 border border-emerald-500/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-500/20">
              Overview
            </TabsTrigger>
            <TabsTrigger value="topology" className="data-[state=active]:bg-emerald-500/20">
              Topology
            </TabsTrigger>
            <TabsTrigger value="devices" className="data-[state=active]:bg-emerald-500/20">
              Devices
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-emerald-500/20">
              Security
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-emerald-500/20">
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Traffic Chart */}
              <div className="lg:col-span-2">
                <TrafficChart />
              </div>

              {/* Alerts Panel */}
              <div>
                <AlertsPanel alerts={recentAlerts} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Network Metrics */}
              <NetworkMetrics />

              {/* Device Status */}
              <DeviceStatus />
            </div>
          </TabsContent>

          <TabsContent value="topology">
            <NetworkTopology />
          </TabsContent>

          <TabsContent value="devices">
            <DeviceManagement />
          </TabsContent>

          <TabsContent value="security">
            <SecurityDashboard />
          </TabsContent>

          <TabsContent value="reports">
            <ReportsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Composant Device Management
function DeviceManagement() {
  const devices = [
    {
      name: "Core-Switch-01",
      type: "Switch",
      ip: "192.168.1.10",
      status: "online",
      cpu: 45,
      memory: 67,
      uptime: "45d 12h",
      location: "Data Center A",
    },
    {
      name: "Router-WAN-02",
      type: "Router",
      ip: "10.0.0.1",
      status: "warning",
      cpu: 85,
      memory: 72,
      uptime: "23d 8h",
      location: "Network Room B",
    },
    {
      name: "Firewall-DMZ",
      type: "Firewall",
      ip: "172.16.0.1",
      status: "critical",
      cpu: 92,
      memory: 88,
      uptime: "12d 4h",
      location: "DMZ Rack",
    },
    {
      name: "Access-Point-15",
      type: "Wireless AP",
      ip: "192.168.100.15",
      status: "online",
      cpu: 23,
      memory: 34,
      uptime: "67d 2h",
      location: "Floor 3 East",
    },
  ]

  return (
    <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="w-5 h-5 mr-2 text-emerald-400" />
          Device Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {devices.map((device, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700/50"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      device.status === "online"
                        ? "bg-green-400"
                        : device.status === "warning"
                          ? "bg-yellow-400"
                          : "bg-red-400"
                    }`}
                  />
                  <div>
                    <h4 className="text-white font-semibold">{device.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {device.type} • {device.ip}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <p className="text-gray-400">CPU</p>
                  <p className="text-white font-semibold">{device.cpu}%</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400">Memory</p>
                  <p className="text-white font-semibold">{device.memory}%</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400">Uptime</p>
                  <p className="text-white font-semibold">{device.uptime}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Composant Security Dashboard
function SecurityDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="w-5 h-5 mr-2 text-emerald-400" />
            Security Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: "Intrusion Attempt", count: 23, severity: "high" },
              { type: "Failed Logins", count: 156, severity: "medium" },
              { type: "Policy Violations", count: 8, severity: "high" },
              { type: "Malware Detected", count: 2, severity: "critical" },
            ].map((event, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">{event.type}</h4>
                  <p className="text-gray-400 text-sm">Last 24 hours</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg">{event.count}</span>
                  <Badge
                    variant="outline"
                    className={
                      event.severity === "critical"
                        ? "bg-red-500/10 border-red-500/30 text-red-400"
                        : event.severity === "high"
                          ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                          : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                    }
                  >
                    {event.severity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Globe className="w-5 h-5 mr-2 text-emerald-400" />
            Firewall Rules
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { rule: "Block China IP ranges", status: "active", hits: "1.2K" },
              { rule: "Allow HTTPS traffic", status: "active", hits: "45.6K" },
              { rule: "Block P2P protocols", status: "active", hits: "892" },
              { rule: "Allow VPN access", status: "active", hits: "234" },
            ].map((rule, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold text-sm">{rule.rule}</h4>
                  <p className="text-gray-400 text-xs">Hits: {rule.hits}</p>
                </div>
                <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400 text-xs">
                  {rule.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Composant Reports Panel
function ReportsPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
            Performance Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              "Daily Traffic Report",
              "Weekly Uptime Summary",
              "Monthly Bandwidth Usage",
              "Quarterly Security Audit",
            ].map((report, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start bg-gray-900/50 border-gray-700/50 text-white hover:bg-emerald-500/10"
              >
                <Database className="w-4 h-4 mr-2" />
                {report}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Monitor className="w-5 h-5 mr-2 text-emerald-400" />
            System Health
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { metric: "Overall Health", value: "98.5%", status: "excellent" },
              { metric: "Network Availability", value: "99.97%", status: "excellent" },
              { metric: "Response Time", value: "12ms", status: "good" },
              { metric: "Error Rate", value: "0.03%", status: "excellent" },
            ].map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{metric.metric}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">{metric.value}</span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      metric.status === "excellent" ? "bg-green-400" : "bg-yellow-400"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-emerald-400" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: "Export Network Config", icon: Database },
              { action: "Generate Report", icon: TrendingUp },
              { action: "Backup Settings", icon: HardDrive },
              { action: "Schedule Maintenance", icon: Settings },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.action}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
