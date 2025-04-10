import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const Mission = () => {
    return (
        <>
            <Card className="h-full rounded-2xl text-white bg-gradient-to-r from-yellow-800 to-primary">
                <CardContent className="flex flex-col items-center justify-center h-full py-10 px-6 text-center">
                    <h2
                        className="text-2xl font-bold mb-4 tracking-tight uppercase"
                    >
                        Lo que busco
                    </h2>
                    <p className="font-medium max-w-2xl ">
                        Desarrollo consciente. Lo simple, lo limpio, lo que deja huella.                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default Mission
