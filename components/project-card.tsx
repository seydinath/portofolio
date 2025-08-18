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

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-60"
          }`}
        />

        {/* Difficulty Badge */}
        {project.difficulty && (
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className={`${getDifficultyColor(project.difficulty)} backdrop-blur-sm`}>
              {project.difficulty}
            </Badge>
          </div>
        )}

        {/* Quick Actions */}
        <div
          className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <Button
            size="icon"
            variant="outline"
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 w-8 h-8"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="bg-black/50 backdrop-blur-sm border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 w-8 h-8"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 flex-1">
            {project.title}
          </h3>
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
