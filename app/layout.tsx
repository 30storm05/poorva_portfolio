import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-white">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'