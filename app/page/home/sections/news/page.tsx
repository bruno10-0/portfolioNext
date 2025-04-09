import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const News = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Latest News</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-primary">Launched New Open Source Project</p>
                        <p className="text-xs text-muted-foreground">2 weeks ago</p>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default News