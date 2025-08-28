"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Eye, Clock } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
  component?: string
  difficulty?: string
  duration?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Generate a dynamic placeholder (gradient + initials)
  const getPlaceholder = () => {
    const colors = ["from-emerald-400", "from-blue-400", "from-purple-400", "from-pink-400", "from-yellow-400"];
    const color = colors[index % colors.length];
    const initials = project.title
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    return (
      <div className={`w-full h-40 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} to-gray-900 text-white text-4xl font-bold`}>
        {initials}
      </div>
    );
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "Débutant":
        return "bg-green-500/10 border-green-500/30 text-green-400"
      case "Intermédiaire":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
      case "Avancé":
        return "bg-red-500/10 border-red-500/30 text-red-400"
      default:
        return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
    }
  }

  return (
    <Card
      className={`group relative bg-black/20 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 overflow-hidden animate-fade-in-up`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className={`w-full h-48 object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        return (
          <Card
            className={`relative group h-full shadow-xl border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden ${isHovered ? "scale-[1.03]" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardHeader className="pb-0">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getDifficultyColor(project.difficulty)}>{project.difficulty || "Niveau ?"}</Badge>
                <span className="text-xs text-gray-400">{project.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-500 group-hover:text-emerald-600 transition">{project.title}</h3>
            </CardHeader>
            <CardContent className="pt-2 pb-4">
              <div className="mb-4 rounded-xl overflow-hidden">
                {getPlaceholder()}
              </div>
              <p className="text-gray-500 text-sm mb-2 min-h-[48px]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="bg-black/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener" aria-label="GitHub">
                    <Github className="w-5 h-5 text-gray-400 hover:text-emerald-500 transition" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener" aria-label="Demo">
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-emerald-500 transition" />
                  </a>
                </Button>
              </div>
              <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-4 h-4" />{project.duration}</span>
            </CardFooter>
          </Card>
        )
          {project.duration && (
            <div className="flex items-center space-x-1 text-gray-400 text-xs ml-2">
              <Clock className="w-3 h-3" />
              <span>{project.duration}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors duration-300 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="bg-gray-500/10 border-gray-500/30 text-gray-400 text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex space-x-3 w-full">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
            asChild
          >
            {project.component ? (
              <a href={project.liveUrl}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            ) : (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            )}
          </Button>
        </div>
      </CardFooter>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />
    </Card>
  )
}
