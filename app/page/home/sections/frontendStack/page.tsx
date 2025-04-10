import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LayoutPanelTop } from 'lucide-react'
import React from 'react'

const FrontendStack = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <LayoutPanelTop className="w-4 h-4 text-primary" />
                    <CardTitle className="text-sm text-primary">Frontend Stack</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">React</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">Tailwind</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">TypeScript</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">Next.js</span>
                    <span className="px-2 py-1 bg-primary rounded-md text-xs text-white">Framer Motion</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                    Herramientas que uso para construir interfaces modernas y dinámicas.
                </p>
            </CardContent>
        </Card>
    )
}

export default FrontendStack
