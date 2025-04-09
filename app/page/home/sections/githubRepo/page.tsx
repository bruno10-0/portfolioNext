import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GithubRepo = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">GitHub</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                    <Button variant="outline" className="w-full text-primary" asChild>
                        <Link href="https://github.com/bruno10-0" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 text-primary" />
                            Ver Repositorio
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default GithubRepo