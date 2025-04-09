"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Mail } from 'lucide-react'
import { toast } from "sonner"
import React from 'react'

const CopyEmail = () => {
    const email = "brunobrodon75@gmail.com"

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        toast.success("Correo copiado al portapapeles")
    }

    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader>
                <CardTitle className="text-sm text-primary">Contacto</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full text-primary"
                                onClick={handleCopy}
                            >
                                <Mail className="mr-2 h-4 w-4 text-primary" />
                                Copiar Email
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Copiar {email} al portapapeles</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardContent>
        </Card>
    )
}

export default CopyEmail
