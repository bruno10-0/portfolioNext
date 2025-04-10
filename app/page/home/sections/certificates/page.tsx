import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import { BadgeCheck } from 'lucide-react'

const Certificates = () => {
    const certificates = [
        {
            title: 'TÉCNICO SUPERIOR 👨‍🎓',
            href: 'https://sisfet-firma.educacion.gob.ar/d/7379765gcPbp8z7_obq9WG',
        },
        {
            title: 'Programación con Java',
            href: 'https://drive.google.com/file/d/1dfS0_bdzYLcUDb2jMF2vBlYlH4cXjaTj/view',
        },
        {
            title: 'Fundamentos de la POO con Java',
            href: 'https://drive.google.com/file/d/1x1L1ck-nfbBEFYBly8_Uiw_LyDJp6hmN/view?usp=sharing',
        },
        {
            title: 'Desarrollo Web con REACT',
            href: 'https://drive.google.com/file/d/1RXPwFF4mlFitwTF3q_2S8FrG-GnO5boV/view',
        },
        {
            title: 'Introducción a la ciberseguridad',
            href: 'https://drive.google.com/file/d/1ol-MKUSrr0SwgurcOuV1apdVj3tVf1wb/view?usp=sharing',
        },
    ]

    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-primary" />
                <CardTitle className="text-sm text-primary">Certificados</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {certificates.map((certificate, index) => (
                        <Link
                            href={certificate.href}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-primary dark:bg-primary-900 flex items-center justify-center">
                                    <span className="text-xs text-white dark:text-primary-300">✓</span>
                                </div>
                                <span className="text-sm text-primary">{certificate.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default Certificates
