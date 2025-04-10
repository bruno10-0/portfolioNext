import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LinkedIn = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-2">
                <Linkedin className="w-4 h-4 text-primary" />
                <CardTitle className="text-sm text-primary">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <Button variant="outline" className="w-full text-primary" asChild>
                    <Link
                        href="https://www.linkedin.com/in/bruno-bordon-9b3889248/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="mr-2 h-4 w-4" />
                        Connect
                    </Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                    Seguime en LinkedIn para ver más sobre mi trabajo y proyectos.
                </p>
            </CardContent>
        </Card>
    )
}

export default LinkedIn
