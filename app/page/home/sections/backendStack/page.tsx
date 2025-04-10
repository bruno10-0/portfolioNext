import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Server } from 'lucide-react'
import React from 'react'

const BackendStack = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-primary" />
                    <CardTitle className="text-sm text-primary">Backend Stack</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">Node.js</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">Strapi</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">Express</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">MongoDB</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">PostgreSQL</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                    Tecnologías que uso para construir APIs sólidas y estructuradas.
                </p>
            </CardContent>
        </Card>
    )
}

export default BackendStack
