export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-7xl font-bold mb-8">ABOUT ME</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate computer science student with a focus on software development and web technologies. Currently
              pursuing a Bachelor's degree in Computer Science, with hands-on experience in building modern web
              applications and solving complex programming challenges.
            </p>
          </div>
          <div className="relative h-[600px] bg-gray-100">
            {/* Replace Next.js Image with regular img tag */}
            <img src="./placeholder.svg" alt="Professional portrait" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

