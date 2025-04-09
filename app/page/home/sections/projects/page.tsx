"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { projects } from './projects'
import CardProject from './cardProject'

const Projects = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const checkScroll = () => {
        const el = scrollRef.current
        if (el) {
            setCanScrollLeft(el.scrollLeft > 0)
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
        }
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = 300
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        const el = scrollRef.current
        if (el) {
            checkScroll()
            el.addEventListener('scroll', checkScroll)
            window.addEventListener('resize', checkScroll)
        }

        return () => {
            el?.removeEventListener('scroll', checkScroll)
            window.removeEventListener('resize', checkScroll)
        }
    }, [])

    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all relative">
            <CardHeader>
                <CardTitle className="text-sm text-primary">Proyectos</CardTitle>
            </CardHeader>
            <CardContent className="relative">
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10 p-1"
                    >
                        <ChevronLeft className="text-primary" />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-1"
                >
                    {projects.map((project, index) => (
                        <CardProject key={index} {...project} />
                    ))}
                </div>

                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10 p-1"
                    >
                        <ChevronRight className="text-primary" />
                    </button>
                )}
            </CardContent>
        </Card>
    )
}

export default Projects
