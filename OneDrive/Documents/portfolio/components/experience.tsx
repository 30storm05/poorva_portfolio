export function Experience() {
  const experiences = [
    {
      number: "1",
      title: "Software Development Intern",
      company: "Tech Corp",
      period: "2023",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on large-scale projects.",
    },
    {
      number: "2",
      title: "Web Development Project",
      company: "University Project",
      period: "2022",
      description:
        "Led a team of 4 students in creating a full-stack web application. Implemented user authentication and database management.",
    },
    {
      number: "3",
      title: "Open Source Contributor",
      company: "GitHub",
      period: "2021-Present",
      description:
        "Active contributor to various open-source projects. Focus on improving documentation and fixing bugs.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold mb-12">EXPERIENCE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-white/20 p-6">
              <div className="text-4xl font-bold mb-4">{exp.number}</div>
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

