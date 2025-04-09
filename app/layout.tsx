// app/layout.tsx o app/layout.js
import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner" // ✅ importar Toaster

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bruno | HOLYDEV",
  description: "Página de destino para marca personal Bruno, el desarrollador detrás de Holy Dev",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            toastOptions={{
              style: {
                background: 'rgb(192,162,99)', // Dorado
                color: '#fff',
                fontWeight: 600,
              },
              className: 'rounded-xl shadow-md',
            }}
          />{/* ✅ Aquí se monta Sonner */}
        </ThemeProvider>
      </body>
    </html>
  )
}
