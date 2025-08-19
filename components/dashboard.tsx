"use client";
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

type MetricKey = "Switch 1" | "Router 2" | "Firewall" | "Access Point";

type Metric = {
  response: number;
  temp: number;
  traffic: number[];
  outTraffic: number[];
  cpu: number[];
  memory: number[];
  bufferMiss: number[];
};

// Exemple de données de monitoring réseau
const initialData = [
  { name: "Switch 1", status: "up", traffic: 120, errors: 0 },
  { name: "Router 2", status: "down", traffic: 0, errors: 3 },
  { name: "Firewall", status: "up", traffic: 80, errors: 1 },
  { name: "Access Point", status: "up", traffic: 45, errors: 0 },
];

export default function Dashboard() {
  // Simuler Netflow Devices
  const netflowDevices = [
    { name: "Cisco Router", status: "up" },
    { name: "Fortigate", status: "up" },
    { name: "LB-01", status: "down" },
    { name: "Meraki", status: "up" },
    { name: "Switch 1", status: "up" },
    { name: "Switch 2", status: "down" },
  ];

  // Simuler Interfaces
  const interfaces = [
    { name: "Gig0/1", status: "up", traffic: 120 },
    { name: "Gig0/2", status: "up", traffic: 98 },
    { name: "Gig0/3", status: "down", traffic: 0 },
    { name: "Eth1/1", status: "up", traffic: 76 },
    { name: "Eth1/2", status: "up", traffic: 110 },
    { name: "Eth1/3", status: "down", traffic: 0 },
  ];
  const [data, setData] = useState(initialData);
  const [selected, setSelected] = useState<MetricKey>(data[0].name as MetricKey);
  const [refreshTime, setRefreshTime] = useState(Date.now());

  // Simuler des vraies données (remplace par API plus tard)
  const metrics: Record<MetricKey, Metric> = {
    "Switch 1": {
      response: 18,
      temp: 24,
      traffic: Array.from({ length: 24 }, (_, i) => 120 + Math.random() * 30),
      outTraffic: Array.from({ length: 24 }, (_, i) => 100 + Math.random() * 40),
      cpu: Array.from({ length: 24 }, (_, i) => 35 + Math.random() * 10),
      memory: Array.from({ length: 24 }, (_, i) => 60 + Math.random() * 20),
      bufferMiss: Array.from({ length: 24 }, (_, i) => Math.random() * 6),
    },
    "Router 2": {
      response: 32,
      temp: 28,
      traffic: Array.from({ length: 24 }, (_, i) => 80 + Math.random() * 60),
      outTraffic: Array.from({ length: 24 }, (_, i) => 60 + Math.random() * 80),
      cpu: Array.from({ length: 24 }, (_, i) => 45 + Math.random() * 20),
      memory: Array.from({ length: 24 }, (_, i) => 70 + Math.random() * 10),
      bufferMiss: Array.from({ length: 24 }, (_, i) => Math.random() * 10),
    },
    "Firewall": {
      response: 25,
      temp: 30,
      traffic: Array.from({ length: 24 }, (_, i) => 60 + Math.random() * 20),
      outTraffic: Array.from({ length: 24 }, (_, i) => 40 + Math.random() * 30),
      cpu: Array.from({ length: 24 }, (_, i) => 55 + Math.random() * 15),
      memory: Array.from({ length: 24 }, (_, i) => 80 + Math.random() * 10),
      bufferMiss: Array.from({ length: 24 }, (_, i) => Math.random() * 4),
    },
    "Access Point": {
      response: 22,
      temp: 26,
      traffic: Array.from({ length: 24 }, (_, i) => 45 + Math.random() * 10),
      outTraffic: Array.from({ length: 24 }, (_, i) => 30 + Math.random() * 15),
      cpu: Array.from({ length: 24 }, (_, i) => 25 + Math.random() * 10),
// ...existing code...
      memory: Array.from({ length: 24 }, (_, i) => 50 + Math.random() * 10),
      bufferMiss: Array.from({ length: 24 }, (_, i) => Math.random() * 2),
    },
  };

  const current = metrics[selected];

  // Rafraîchir les données
  const handleRefresh = () => {
    setRefreshTime(Date.now());
  };

  return (
    <div className="bg-slate-900 min-h-[900px] w-full max-w-[1600px] mx-auto rounded-2xl shadow-2xl p-0 text-white border border-slate-800 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-950 px-8 py-6 flex items-center justify-between border-b border-slate-800">
        <h2 className="text-2xl md:text-4xl font-bold text-emerald-400">Dashboard de Monitoring Réseau</h2>
        <span className="text-xs text-gray-400">Dernière mise à jour : {new Date(refreshTime).toLocaleTimeString()}</span>
      </div>

      {/* Current Status of Netflow Devices */}
      <div className="px-8 py-4 border-b border-slate-800">
        <div className="text-lg font-bold text-white mb-2">Current Status of Netflow Devices</div>
        <div className="flex flex-wrap gap-3">
          {netflowDevices.map((dev) => (
            <span key={dev.name} className={`px-4 py-2 rounded-lg text-xs font-bold shadow border flex items-center gap-2 ${dev.status === "up" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-red-500/20 text-red-400 border-red-500/30"}`}>
              <span className={`w-2 h-2 rounded-full ${dev.status === "up" ? "bg-emerald-400" : "bg-red-400"}`}></span>
              {dev.name}
              <span className="ml-2 text-xs font-normal">{dev.status === "up" ? "Online" : "Offline"}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Current Status of Interfaces */}
      <div className="px-8 py-4 border-b border-slate-800">
        <div className="text-lg font-bold text-white mb-2">Current Status of Interfaces</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interfaces.map((iface) => (
            <div key={iface.name} className={`p-4 rounded-lg shadow border flex flex-col gap-2 ${iface.status === "up" ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${iface.status === "up" ? "bg-emerald-400" : "bg-red-400"}`}></span>
                <span className="font-bold">{iface.name}</span>
                <span className="ml-auto text-xs font-normal">{iface.status === "up" ? "Online" : "Offline"}</span>
              </div>
              <div className="text-xs text-gray-400">Traffic: <span className="font-bold text-emerald-400">{iface.traffic} Mbps</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar + Sélection */}
      <div className="flex flex-wrap gap-2 px-8 py-4 bg-slate-900 border-b border-slate-800">
        {data.map((item, idx) => (
          <button
            key={item.name}
            className={`px-3 py-1 rounded-full text-xs font-bold shadow border transition-all duration-200 ${selected === item.name ? "bg-emerald-500/40 text-emerald-100 border-emerald-500" : item.status === "up" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-red-500/20 text-red-400 border-red-500/30"}`}
            onClick={() => setSelected(item.name as MetricKey)}
          >
            {item.name}
          </button>
        ))}
        <button
          className="ml-auto px-4 py-1 rounded bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-all"
          onClick={handleRefresh}
        >
          Rafraîchir
        </button>
      </div>

      {/* Metrics Cards dynamiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-6">
        <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center shadow">
          <div className="text-4xl font-bold text-emerald-400 mb-1">{current.response}<span className="text-base font-normal">ms</span></div>
          <div className="text-xs text-gray-400">Temps de réponse</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center shadow">
          <div className="text-4xl font-bold text-emerald-400 mb-1">{current.temp}<span className="text-base font-normal">°C</span></div>
          <div className="text-xs text-gray-400">Température</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center shadow">
          <div className="text-4xl font-bold text-emerald-400 mb-1">{current.memory[current.memory.length-1].toFixed(1)}<span className="text-base font-normal">%</span></div>
          <div className="text-xs text-gray-400">Mémoire utilisée</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center shadow">
          <div className="text-4xl font-bold text-emerald-400 mb-1">{current.cpu[current.cpu.length-1].toFixed(1)}<span className="text-base font-normal">%</span></div>
          <div className="text-xs text-gray-400">CPU utilisé</div>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-8">
        <GraphCard title="Trafic entrant (GbE)" data={current.traffic} color="emerald" unit="Mbps" />
        <GraphCard title="Trafic sortant (GbE)" data={current.outTraffic} color="cyan" unit="Mbps" />
        <GraphCard title="Buffer Misses" data={current.bufferMiss} color="red" unit="MB" />
      </div>

      {/* Footer Icons */}
      <div className="bg-slate-950 py-6 flex items-center justify-center gap-10 border-t border-slate-800">
        {[
          { icon: "🖥️", label: "Switch" },
          { icon: "📡", label: "Router" },
          { icon: "�️", label: "Firewall" },
          { icon: "�", label: "Access Point" },
          { icon: "SNMP", label: "SNMP" },
          { icon: "🧠", label: "CPU" },
          { icon: "🗄️", label: "Storage" },
          { icon: "🌡️", label: "Temp" },
          { icon: "☁️", label: "Cloud" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl mb-1">{item.icon}</span>
            <span className="text-xs text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>

  );
}

// Simple graph card (simulé)
function GraphCard({ title, data, color, unit }: { title: string; data: number[]; color: string; unit: string }) {
  // Format data for Recharts
  const chartData = data.map((v, i) => ({ name: `${i}h`, value: v }));
  const colors: Record<string, string> = {
    emerald: "#34d399",
    cyan: "#06b6d4",
    purple: "#a78bfa",
    red: "#ef4444",
  };
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow flex flex-col">
      <div className="font-bold text-lg mb-2 text-white">{title}</div>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)} ${unit}`} />
          <Line type="monotone" dataKey="value" stroke={colors[color] || colors.emerald} strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-400 mt-2">Dernière valeur : <span className={`font-bold text-${color}-400`}>{data[data.length-1].toFixed(1)} {unit}</span></div>
    </div>
  );
}
