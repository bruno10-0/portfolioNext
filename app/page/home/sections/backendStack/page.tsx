import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const BackendStack = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Backend Stack</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">Node.js</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">Strapi</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">Express</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">MongoDB</span>
                        <span className="px-2 py-1 bg-primary rounded-md text-xs">PostgreSQL</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default BackendStack