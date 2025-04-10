import { ThemeToggle } from '@/components/theme-toggle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SunMoon } from 'lucide-react'
import React from 'react'

const ThemeTogglee = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <SunMoon className="w-4 h-4 text-primary" />
                    <CardTitle className="text-sm text-primary">Apariencia</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4 py-4">
                <ThemeToggle />
                <p className="text-xs text-muted-foreground text-center">
                    Cambiá entre modo claro y oscuro según tu preferencia.
                </p>
            </CardContent>
        </Card>
    )
}

export default ThemeTogglee
