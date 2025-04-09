import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Experience = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Senior Frontend Developer</h3>
                            <p className="text-sm text-muted-foreground">TechCorp • 2021 - Present</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Web Developer</h3>
                            <p className="text-sm text-muted-foreground">Digital Agency • 2018 - 2021</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Intern</h3>
                            <p className="text-sm text-muted-foreground">StartupX • 2017 - 2018</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default Experience