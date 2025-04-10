"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Code2, ExternalLink, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import RelatedProjects from "../sections/related/page"
import { projects } from "@/app/utils/proyectos/projects"
import { Project } from "@/app/utils/proyectos/types"
import NotFoundProject from "../sections/notFound/page"
import LoadingProject from "@/components/LoadingProject"

export default function ProjectPage() {
  const params = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params?.id) {
      const found = projects.find(p => p.id.toString() === params.id)
      setProject(found ?? null)
      setIsLoading(false)
    }
  }, [params])

  const relatedProjects = projects.filter(p => p.id !== project?.id)

  if (isLoading) {
    return <LoadingProject />
  }

  if (!project) {
    return (
      <NotFoundProject />
    )
  }

  return (
    <main className="container mx-auto px-4 md:px-10 py-8">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        ← Volver al inicio
      </Link>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Project Gallery */}
        <div className="order-2 md:order-1 border-none">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="order-1 md:order-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{project.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.tags?.map((tag, index) => (
              <Badge key={index} variant="outline" className="flex items-center gap-1">
                <Tag className="h-3.5 w-3.5" />
                {tag}
              </Badge>
            ))}

            {project.date && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {project.date}
              </Badge>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tecnology?.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Descripción del Proyecto</h2>
            <p className="text-muted-foreground text-justify">{project.descriptionLong}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild className="text-white">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 text-white" />
                  Ver en vivo
                </Link>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Code2 className="mr-2 h-4 w-4" />
                  Ver código
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      <RelatedProjects projects={relatedProjects} />
      </main>
  )
}
