import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Newspaper } from 'lucide-react'

const News = () => {
    const news = [
        {
            title: 'Quejup solucion problemas',
            href: 'https://www.canal12misiones.com/economia-del-conocimiento/quejup-una-app-que-busca-solucionar-problemas-comunes-de-la-ciudad',
        },
        {
            title: 'Estudiantes del ISES',
            href: 'https://ladatamix.com/presentaron-aplicaciones-desarrolladas-por-estudiantes-del-ises/',
        },
    ]

    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-2">
                <Newspaper className="w-4 h-4 text-primary" />
                <CardTitle className="text-sm text-primary">Últimas noticias</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {news.map((item, index) => (
                        <a className="flex items-center gap-2" href={item.href} key={index} target="_blank" rel="noopener noreferrer">
                            <div className="w-6 h-6 rounded-full bg-primary dark:bg-primary-900 flex items-center justify-center">
                                <span className="text-xs text-white dark:text-primary-300">📰</span>
                            </div>
                            <span className="text-sm text-primary">{item.title}</span>
                        </a>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default News
