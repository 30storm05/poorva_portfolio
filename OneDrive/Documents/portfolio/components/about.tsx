export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-7xl font-bold mb-8">ABOUT ME</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently pursuing a Bachelor's degree in Computer Science with Artificial Intellegence. With a keen interest in creating and building things,
              I aspire to be an engineer who understands problems and finds creative solutions.
            </p>
          </div>
          <div className="relative h-[600px] bg-gray-100">
            <img src="./placeholder.svg" alt="Professional portrait" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}