import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const BasicInfo = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Información Basica</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-sm">Edad</span>
                            <span className="font-medium">22</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Nacionalidad</span>
                            <span className="font-medium">Argentina</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default BasicInfo