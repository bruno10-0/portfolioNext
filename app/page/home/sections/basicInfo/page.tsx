import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Info } from 'lucide-react'
import React from 'react'

const BasicInfo = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    <CardTitle className="text-sm text-primary">Información Básica</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-sm">Edad</span>
                        <span className="font-medium">22</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm">Nacionalidad</span>
                        <span className="font-medium bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
                            Argentina
                        </span>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                    Algunos datos para que me conozcas un poco más.
                </p>
            </CardContent>
        </Card>
    )
}

export default BasicInfo
