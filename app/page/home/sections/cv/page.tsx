import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download } from 'lucide-react'
import React from 'react'

const Cv = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-2">
                <Download className="w-4 h-4 text-primary" />
                <CardTitle className="text-sm text-primary">Resumen</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <a href="/Cv Bruno.pdf" download className="w-full">
                    <Button variant="outline" className="w-full text-primary">
                        <Download className="mr-2 h-4 w-4 text-primary" />
                        Descargar CV
                    </Button>
                </a>
                <p className="text-xs text-muted-foreground text-center">
                    Descargá mi CV para conocer más sobre mi experiencia y formación.
                </p>
            </CardContent>
        </Card>
    )
}

export default Cv
