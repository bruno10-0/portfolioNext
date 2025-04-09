import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const Mission = () => {
    return (
        <>
            <Card className="h-full rounded-2xl">
                <CardContent className="flex flex-col items-center justify-center h-full py-10 px-6 text-center">
                    <h2
                        className="text-3xl font-bold mb-4 tracking-tight"
                        style={{ color: 'rgb(192, 162, 99)' }}
                    >
                        Nuestra Esencia
                    </h2>
                    <p className="text-lg font-medium max-w-2xl ">
                        Creo en un desarrollo consciente. Lo simple, lo limpio, lo que deja huella.                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default Mission
