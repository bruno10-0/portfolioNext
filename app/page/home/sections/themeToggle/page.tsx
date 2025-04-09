import { ThemeToggle } from '@/components/theme-toggle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const ThemeTogglee = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Apariencia</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center py-4">
                    <ThemeToggle />
                </CardContent>
            </Card>
        </>
    )
}

export default ThemeTogglee