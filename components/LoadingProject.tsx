"use client"

import { Loader2 } from "lucide-react"

export default function LoadingProject() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-4">
      <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
      <p className="text-muted-foreground text-lg">Cargando proyecto...</p>
    </div>
  )
}
