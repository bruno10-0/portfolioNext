import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download } from 'lucide-react'
import React from 'react'

const Cv = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Resumen</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                    <Button variant="outline" className="w-full text-primary">
                        <Download className="mr-2 h-4 w-4 text-primary" />
                        Descargar CV
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default Cv