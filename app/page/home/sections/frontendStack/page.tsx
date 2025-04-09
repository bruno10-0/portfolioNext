import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const FrontendStack = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Frontend Stack</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">React</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">Tailwind</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">TypeScript</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">Next.js</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">Framer Motion</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default FrontendStack