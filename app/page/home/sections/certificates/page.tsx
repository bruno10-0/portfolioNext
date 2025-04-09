import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Certificates = () => {
    return (
        <>
            <Card className="h-full rounded-2xl hover:shadow-md transition-all">
                <CardHeader>
                    <CardTitle className="text-sm text-primary">Certificados</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary dark:bg-primary-900 flex items-center justify-center">
                                <span className="text-xs text-white dark:text-primary-300">✓</span>
                            </div>
                            <span className="text-sm text-primary">AWS Certified Developer</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary dark:bg-primary-900 flex items-center justify-center">
                                <span className="text-xs text-white dark:text-primary-300">✓</span>
                            </div>
                            <span className="text-sm text-primary">React Advanced Patterns</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary dark:bg-primary-900 flex items-center justify-center">
                                <span className="text-xs text-white dark:text-primary-300">✓</span>
                            </div>
                            <span className="text-sm text-primary">UI/UX Fundamentals</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default Certificates