"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ghost } from "lucide-react"

export default function NotFoundProject() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted text-muted-foreground">
                <Ghost className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md">
                <h2 className="text-2xl font-bold tracking-tight">
                    Proyecto no encontrado
                </h2>
                <p className="text-muted-foreground">
                    El proyecto que estás buscando no existe o fue eliminado. Por favor, verificá el enlace o volvé al inicio.
                </p>
            </div>

            <Button asChild>
                <Link href="/">Volver al inicio</Link>
            </Button>
        </div>
    )
}
