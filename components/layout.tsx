import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">{children}</main>
    </div>
  )
}

