import { Progress } from "@/components/ui/progress"

export function Skills() {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold mb-12">TECHNICAL SKILLS</h2>
        <div className="space-y-8 max-w-2xl">
          {technicalSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-bold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

