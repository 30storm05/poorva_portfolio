import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          PORTFOLIO
        </Link>
        <nav className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#experience">Experience</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

