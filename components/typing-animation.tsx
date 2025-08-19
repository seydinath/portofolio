"use client"

import { useState, useEffect } from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Play, Pause } from "lucide-react"

export function TypingAnimation() {
  // Ajouts pour les améliorations
  const [isTerminal, setIsTerminal] = useState(false);
  const [rainbow, setRainbow] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [liveTyping, setLiveTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const avatars = ["🧑‍💻", "👩‍💻", "👨‍💻", "🤖"];
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(100)
  const [showError, setShowError] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [isCodeMode, setIsCodeMode] = useState(false)
  const [exporting, setExporting] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const texts = ["Développeur Full Stack", "Expert en Réseau", "Architecte Logiciel", "Créateur d'Interfaces"]
  const textsEN = ["Full Stack Developer", "Network Expert", "Software Architect", "UI Creator"];
  const codeSnippets = [
    "function helloWorld() {\n  console.log('Hello, world!');\n}",
    "const vlan = { id: 10, name: 'Admin' };",
    "for (let i = 0; i < 5; i++) {\n  // ...\n}",
  ];

  useEffect(() => {
    if (!isPlaying || liveTyping) return;
    // Multilingue
    const currentTexts = language === "fr" ? texts : textsEN;
    const currentFullText = isCodeMode ? codeSnippets[currentIndex % codeSnippets.length] : currentTexts[currentIndex];
    // Erreur simulée
    const errorIndex = 7;
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentText.length < currentFullText.length) {
          // Simule une erreur de frappe
          if (showError && currentText.length === errorIndex) {
            setCurrentText(currentText + "x");
            setErrorCount(e => e + 1);
            setTimeout(() => {
              setCurrentText(currentText);
              if (audioRef.current) audioRef.current.play();
            }, 300);
          } else {
            setCurrentText(currentFullText.slice(0, currentText.length + 1));
            setCharCount(c => c + 1);
            if (audioRef.current) audioRef.current.play();
          }
        } else {
          setTimeout(() => setIsTyping(false), 1000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setCurrentIndex((prev) => (prev + 1) % (isCodeMode ? codeSnippets.length : currentTexts.length));
          setIsTyping(true);
        }
      }
    }, isTyping ? speed : speed / 2);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, isPlaying, texts, textsEN, codeSnippets, speed, showError, isCodeMode, language, liveTyping]);

  const resetAnimation = () => {
  setCharCount(0);
  setErrorCount(0);
  setUserInput("");
  setCurrentText("");
  setCurrentIndex(0);
  setIsTyping(true);
  setIsPlaying(true);
  setShowError(false);
  setTheme("dark");
  setIsCodeMode(false);
  }

  return (
    <div
      className={`w-full h-96 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-500
        ${isTerminal ? "bg-black" : theme === "dark" ? "bg-gradient-to-br from-slate-900 to-black" : "bg-gradient-to-br from-emerald-100 to-white"}
        ${rainbow ? "animate-rainbow" : ""}`}
      aria-live="polite"
      tabIndex={0}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* SVG animated background évolutif */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-px h-px ${rainbow ? "bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500" : "bg-emerald-400"} animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Avatar animé */}
        {showAvatar && (
          <div className="flex justify-center mb-2 animate-bounce text-4xl">
            {avatars[currentIndex % avatars.length]}
          </div>
        )}
        {/* Audio for typing sound */}
        <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/15/audio_115b6c7b7b.mp3" preload="auto" />
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Animation de Frappe</h3>

          {/* Typing Display */}
          <div className="h-16 flex items-center justify-center">
            {liveTyping ? (
              <input
                type="text"
                value={userInput}
                onChange={e => {
                  setUserInput(e.target.value);
                  setCharCount(e.target.value.length);
                }}
                className="text-3xl md:text-4xl font-mono text-emerald-400 bg-black/30 rounded px-4 py-2 outline-none"
                placeholder="Tapez ici..."
                autoFocus
              />
            ) : (
              <span
                className={`text-3xl md:text-4xl font-mono ${rainbow ? "bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent" : theme === "dark" ? "text-emerald-400" : "text-emerald-700"} relative`}
                style={{
                  background: isCodeMode ? (theme === "dark" ? "#222" : "#e0f7fa") : "none",
                  borderRadius: isCodeMode ? "6px" : undefined,
                  padding: isCodeMode ? "0.5rem 1rem" : undefined,
                  fontFamily: isCodeMode ? "Fira Mono, monospace" : undefined,
                }}
              >
                {isTerminal && <span className="text-green-400">$&nbsp;</span>}
                {currentText}
                <span
                  className={`inline-block ml-1 w-2 h-8 align-middle animate-blink ${theme === "dark" ? "bg-emerald-400" : "bg-emerald-700"}`}
                  style={{ verticalAlign: "middle" }}
                  aria-hidden="true"
                />
              </span>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsTerminal(!isTerminal)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {isTerminal ? "Mode normal" : "Mode terminal"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setRainbow(!rainbow)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {rainbow ? "Couleur normale" : "Arc-en-ciel"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowStats(!showStats)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {showStats ? "Masquer stats" : "Stats"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowAvatar(!showAvatar)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {showAvatar ? "Masquer avatar" : "Avatar animé"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {language === "fr" ? "EN" : "FR"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setLiveTyping(!liveTyping)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {liveTyping ? "Animation auto" : "Saisie réelle"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {theme === "dark" ? "Mode clair" : "Mode sombre"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsCodeMode(!isCodeMode)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {isCodeMode ? "Mode texte" : "Mode code"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowError(!showError)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
          >
            {showError ? "Désactiver erreurs" : "Simuler erreurs"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
            aria-label={isPlaying ? "Pause" : "Lecture"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={resetAnimation}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
            aria-label="Réinitialiser"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <input
            type="range"
            min={30}
            max={300}
            value={speed}
            onChange={e => setSpeed(Number(e.target.value))}
            className="w-24 accent-emerald-400"
            aria-label="Vitesse de frappe"
          />
          <span className="text-xs text-emerald-400">{speed}ms</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setExporting(true)}
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
            aria-label="Exporter GIF"
          >
            Export GIF
          </Button>
        </div>

        {/* Progress Indicators */}
        {showStats && (
          <div className="mt-4 text-xs text-emerald-400 flex flex-col items-center">
            <div>Caractères tapés : {charCount}</div>
            <div>Erreurs simulées : {errorCount}</div>
            <div>Langue : {language === "fr" ? "Français" : "Anglais"}</div>
            <div>Mode : {isTerminal ? "Terminal" : isCodeMode ? "Code" : "Texte"}</div>
          </div>
        )}
        <div className="flex justify-center space-x-2">
          {(isCodeMode ? codeSnippets : texts).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? (theme === "dark" ? "bg-emerald-400 scale-125" : "bg-emerald-700 scale-125") : "bg-white/30"
              }`}
            />
          ))}
        </div>
        {/* Export GIF modal (placeholder) */}
        {exporting && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-xl text-center">
              <h4 className="text-lg font-bold mb-2">Export GIF</h4>
              <p className="mb-4 text-gray-700">Fonctionnalité à venir : exportez l'animation en GIF ou vidéo.</p>
              <Button onClick={() => setExporting(false)} className="bg-emerald-400 text-white">Fermer</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
