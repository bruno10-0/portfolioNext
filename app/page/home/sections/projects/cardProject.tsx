import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectProps = {
    title: string
    description: string
    image: string
    href?: string
}

const CardProject = ({ title, description, image, href = '/' }: ProjectProps) => {
    return (
        <div className="min-w-[300px] max-w-[90vw] sm:min-w-[350px]">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={image}
                        alt="Project Image"
                        fill
                        className="object-contain"
                    />
                </div>
                <CardHeader className="pb-2">
                    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                </CardHeader>
                <CardContent className="flex flex-col justify-between grow">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {description}
                    </p>
                    <Link href={href} className="self-start">
                        <button className="px-4 py-1 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition">
                            Ver detalles
                        </button>
                    </Link>
                </CardContent>
            </Card>
        </div>

    )
}

export default CardProject