import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

