import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase } from 'lucide-react'
import React from 'react'

const Experience = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <CardTitle className="text-sm text-primary">Experiencias</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium">Fullstack Developer</h3>
                        <p className="text-sm text-muted-foreground">Queen's Closet</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Frontend Developer</h3>
                        <p className="text-sm text-muted-foreground">ChangoConsultora S.R.L.</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Fullstack Developer</h3>
                        <p className="text-sm text-muted-foreground">IMuSA Zaiman</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Fullstack Developer</h3>
                        <p className="text-sm text-muted-foreground">EspacioBaco</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Fullstack Developer</h3>
                        <p className="text-sm text-muted-foreground">Vises</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Pasante</h3>
                        <p className="text-sm text-muted-foreground">FANIOT</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Experience
