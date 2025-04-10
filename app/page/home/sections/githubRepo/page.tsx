import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GithubRepo = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-primary" />
                    <CardTitle className="text-sm text-primary">GitHub</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <Button variant="outline" className="w-full text-primary" asChild>
                    <Link href="https://github.com/bruno10-0" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 text-primary" />
                        Ver Repositorio
                    </Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                    Explorá mis proyectos y colaboraciones en GitHub.
                </p>
            </CardContent>
        </Card>
    )
}

export default GithubRepo
