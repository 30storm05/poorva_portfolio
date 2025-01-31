import { Progress } from "@/components/ui/progress"

export function Skills() {
  const technicalSkills = [
    { name: "UI/UX", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "C++", level: 80 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 70 },
  ]

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Problem Solving", level: 80 },
    { name: "Time Management", level: 80 },
    { name: "Adaptability", level: 70 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Technical Skills Section */}
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

        <h2 className="text-7xl font-bold mb-12 mt-20">SOFT SKILLS</h2>
        <div className="space-y-8 max-w-2xl">
          {softSkills.map((skill, index) => (
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