import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
    

const Hero = () => {
    
    return (
        <>
            <Card className="h-full rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Imagen del logo */}
                    <div className="w-full md:w-1/2  relative h-48 md:h-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1744162928/holydev/arfsro08zlnb8wcua4tm.png"
                                alt="HolyDev Logo"
                                width={160}
                                height={160}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Texto de presentación */}
                    <div className="w-full md:w-3/5 p-6 flex flex-col">
                        <h1 className="text-2xl font-bold mb-2 text-primary">Hola, soy Bruno</h1>
                        <p>
                            El desarrollador detrás de <strong className='text-primary'>HOLYDEV</strong>. Diseño y construyo experiencias web limpias, modernas y potentes.
                        </p>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Hero
