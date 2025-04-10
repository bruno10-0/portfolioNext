import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin } from 'lucide-react'
import React from 'react'

const Location = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <CardTitle className="text-sm text-primary">Localización</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col">
                <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">Posadas, Misiones, Argentina</span>
                </div>
                <div className="w-full h-24 bg-muted rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.773149196765!2d-58.38168848470556!3d-34.60373831970276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950d9c0f7b2c2db3%3A0x6b1c3f2c5e187a33!2sPosadas%2C+Misiones%2C+Argentina!5e0!3m2!1sen!2sus!4v1684499576564!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default Location
