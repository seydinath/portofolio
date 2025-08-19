"use client";
import React, { useState } from "react";

type Vlan = {
  id: number;
  name: string;
  description: string;
  ports: string;
  type: "standard" | "voice" | "management";
  trunk: boolean;
  shutdown: boolean;
};

export default function VlanConfigurator() {
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Validation avancée
    const ids = vlans.map(v => v.id);
    const names = vlans.map(v => v.name.trim());
    if (new Set(ids).size !== ids.length) {
      setError("Chaque VLAN doit avoir un ID unique.");
      return;
    }
    if (names.some(n => !n)) {
      setError("Chaque VLAN doit avoir un nom.");
      return;
    }
    if (ids.some(id => id < 1 || id > 4094)) {
      setError("Les IDs VLAN doivent être compris entre 1 et 4094.");
      return;
    }
    // Génération du script
    const script = vlans
      .map(vlan => {
        let s = `vlan ${vlan.id}\n name ${vlan.name}`;
        if (vlan.type !== "standard") s += `\n type ${vlan.type}`;
        if (vlan.description) s += `\n description ${vlan.description}`;
        s += "\n exit";
        if (vlan.ports) {
          vlan.ports.split(",").forEach(port => {
            s += `\ninterface ${port.trim()}\n switchport access vlan ${vlan.id}`;
            if (vlan.trunk) s += "\n switchport mode trunk";
            else s += "\n switchport mode access";
            if (vlan.shutdown) s += "\n shutdown";
            else s += "\n no shutdown";
            s += "\n exit";
          });
        }
        return s;
      })
      .join("\n\n");
    setResult(script);
    setCopied(false);
    setHistory(h => [script, ...h]);
  };
  const [vlans, setVlans] = useState<Vlan[]>([
    { id: 1, name: "", description: "", ports: "", type: "standard", trunk: false, shutdown: false },
  ]);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleChange = (index: number, field: keyof Vlan, value: string | number | boolean) => {
    setVlans(vlans =>
      vlans.map((vlan, i) =>
        i === index ? { ...vlan, [field]: value } : vlan
      )
    );
  };

  const handleAddVlan = () => {
    setVlans([...vlans, { id: 1, name: "", description: "", ports: "", type: "standard", trunk: false, shutdown: false }]);
  };

  const handleRemoveVlan = (index: number) => {
    setVlans(vlans => vlans.filter((_, i) => i !== index));
  };

  const handleReset = () => {
  setVlans([{ id: 1, name: "", description: "", ports: "", type: "standard", trunk: false, shutdown: false }]);
  setError("");
  setResult("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vlan-config.txt";
    a.click();
    URL.revokeObjectURL(url);
  };


  return (
    <div className="relative min-h-[800px] w-full max-w-2xl mx-auto rounded-2xl shadow-2xl border border-emerald-700 mt-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/network-abstract-bg.svg" alt="Network abstract background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-emerald-950/80" />
      </div>
      <div className="relative z-10 p-8 text-white">
        <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">Configurateur VLAN Automatisé</h2>
        <form onSubmit={handleGenerate} className="flex flex-col gap-8 mb-8" aria-label="Formulaire VLAN">
          {vlans.map((vlan, idx) => (
            <div key={idx} className="bg-slate-900 rounded-xl p-6 shadow border border-emerald-500/20 flex flex-col gap-4 relative">
              <div className="absolute top-2 right-2">
                {vlans.length > 1 && (
                  <button type="button" onClick={() => handleRemoveVlan(idx)} className="text-red-400 hover:text-red-600 text-lg font-bold" aria-label="Supprimer VLAN">✕</button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold">VLAN ID</label>
                  <input
                    type="number"
                    min={1}
                    max={4094}
                    value={vlan.id}
                    onChange={e => handleChange(idx, "id", Number(e.target.value))}
                    className="p-2 rounded bg-slate-800 border border-slate-700 text-white w-full"
                    required
                    aria-label="VLAN ID"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold">Nom du VLAN</label>
                  <input
                    type="text"
                    value={vlan.name}
                    onChange={e => handleChange(idx, "name", e.target.value)}
                    className="p-2 rounded bg-slate-800 border border-slate-700 text-white w-full"
                    required
                    aria-label="Nom du VLAN"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold">Description</label>
                  <input
                    type="text"
                    value={vlan.description}
                    onChange={e => handleChange(idx, "description", e.target.value)}
                    className="p-2 rounded bg-slate-800 border border-slate-700 text-white w-full"
                    aria-label="Description"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold">Ports associés (séparés par des virgules)</label>
                  <input
                    type="text"
                    value={vlan.ports}
                    onChange={e => handleChange(idx, "ports", e.target.value)}
                    className="p-2 rounded bg-slate-800 border border-slate-700 text-white w-full"
                    placeholder="ex: Gig0/1, Gig0/2"
                    aria-label="Ports VLAN"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold">Type de VLAN</label>
                  <select
                    value={vlan.type}
                    onChange={e => handleChange(idx, "type", e.target.value as Vlan["type"])}
                    className="p-2 rounded bg-slate-800 border border-slate-700 text-white w-full"
                    aria-label="Type VLAN"
                  >
                    <option value="standard">Standard</option>
                    <option value="voice">Voix</option>
                    <option value="management">Management</option>
                  </select>
                </div>
                <div className="flex gap-4 items-center mt-2">
                  <label className="text-xs font-bold">Trunk</label>
                  <input type="checkbox" checked={vlan.trunk} onChange={e => handleChange(idx, "trunk", e.target.checked)} aria-label="Trunk" />
                  <label className="text-xs font-bold">Shutdown</label>
                  <input type="checkbox" checked={vlan.shutdown} onChange={e => handleChange(idx, "shutdown", e.target.checked)} aria-label="Shutdown" />
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-4 justify-center">
            <button type="button" onClick={handleAddVlan} className="px-4 py-2 rounded bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-all w-fit">+ Ajouter un VLAN</button>
            <button type="button" onClick={handleReset} className="px-4 py-2 rounded bg-slate-700 text-white font-bold hover:bg-slate-800 transition-all w-fit">Réinitialiser</button>
          </div>
          <button type="submit" className="mt-4 px-6 py-3 rounded bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold text-lg shadow-lg hover:from-emerald-600 hover:to-green-500 transition-all mx-auto">Générer le script</button>
        </form>
        {error && <div className="text-red-400 text-sm mb-4 text-center">{error}</div>}
        {result && (
          <div className="bg-slate-900 p-6 rounded-xl border border-emerald-500/30 shadow-lg mt-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400">Script Cisco IOS généré :</div>
              <div className="flex gap-2">
                <button onClick={handleCopy} className="px-3 py-1 rounded bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-all">
                  {copied ? "Copié !" : "Copier"}
                </button>
                <button onClick={handleExport} className="px-3 py-1 rounded bg-green-500 text-white text-xs font-bold hover:bg-green-600 transition-all">Exporter .txt</button>
              </div>
            </div>
            <pre className="text-green-400 text-sm whitespace-pre-wrap max-h-64 overflow-auto">{result}</pre>
          </div>
        )}
        {history.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">Historique des scripts générés</h3>
            <ul className="space-y-2">
              {history.map((h, i) => (
                <li key={i} className="bg-slate-800 p-2 rounded text-xs text-gray-300 overflow-auto max-h-24">
                  <pre>{h}</pre>
                </li>
              ))}
            </ul>
          </div>
        )}
      {result && (
        <div className="bg-slate-900 p-6 rounded-xl border border-emerald-500/30 shadow-lg mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-400">Script Cisco IOS généré :</div>
            <div className="flex gap-2">
              <button onClick={handleCopy} className="px-3 py-1 rounded bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-all">
                {copied ? "Copié !" : "Copier"}
              </button>
              <button onClick={handleExport} className="px-3 py-1 rounded bg-green-500 text-white text-xs font-bold hover:bg-green-600 transition-all">Exporter .txt</button>
            </div>
          </div>
          <pre className="text-green-400 text-sm whitespace-pre-wrap max-h-64 overflow-auto">{result}</pre>
        </div>
      )}
      {history.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-emerald-400 mb-2">Historique des scripts générés</h3>
          <ul className="space-y-2">
            {history.map((h, i) => (
              <li key={i} className="bg-slate-800 p-2 rounded text-xs text-gray-300 overflow-auto max-h-24">
                <pre>{h}</pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}
