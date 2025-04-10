'use client'
import { Project } from '@/app/utils/proyectos/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
interface RelatedProjectsProps {
    projects: Project[]
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 340 // ajustá según el ancho de tus tarjetas
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section className="mt-16 relative">
            <h2 className="mb-6 text-2xl font-bold">Otros proyectos</h2>

            <div className="relative">
                {/* Botón izquierdo */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background p-2 shadow-md hover:bg-muted"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Carrusel */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-none px-8"
                    style={{ scrollBehavior: 'smooth', overflow: 'hidden' }}
                >
                    {projects.map((relatedProject) => (
                        <Card
                            key={relatedProject.id}
                            className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] shrink-0 overflow-hidden"
                        >
                            <div className="aspect-video relative">
                                <Image
                                    src={relatedProject.image || "/placeholder.svg"}
                                    alt={relatedProject.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-semibold">{relatedProject.title}</h3>

                                <div className="flex flex-wrap gap-1 mt-2">
                                    {relatedProject.tags?.slice(0, 2).map((tag, index) => (
                                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                                            <Tag className="h-3.5 w-3.5" />
                                            {tag}
                                        </Badge>
                                    ))}
                                    {relatedProject.tags && relatedProject.tags.length > 3 && (
                                        <Badge variant="secondary" className="text-xs">
                                            and more
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button variant="outline" size="sm" className="w-full bg-primary text-white" asChild>
                                    <Link href={`/proyecto/${relatedProject.id}`}>Ver detalles</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Botón derecho */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background p-2 shadow-md hover:bg-muted"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </section>
    )
}
