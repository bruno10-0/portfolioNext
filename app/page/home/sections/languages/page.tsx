import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Languages as LanguagesIcon } from "lucide-react"

const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Portugués", level: "Avanzado" },
    { name: "Inglés", level: "Mediano" },
    // Podés agregar más si querés
]

const Languages = () => {
    return (
        <Card className="h-full rounded-2xl hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-2">
                <LanguagesIcon className="w-4 h-4 text-primary" />
                <CardTitle className="text-sm text-primary">Idiomas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between text-sm text-muted-foreground">
                        <span>{lang.name}</span>
                        <span className="text-xs">{lang.level}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default Languages
