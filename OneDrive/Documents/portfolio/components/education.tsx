export function Education() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold mb-12">EDUCATION</h2>
        <div className="max-w-3xl space-y-12">
          
          <div className="border-l-2 border-black pl-8 pb-8">
            <h3 className="text-2xl font-bold mb-2">
              Bachelor of Computer Science with Artificial Intelligence and Machine Learning
            </h3>
            <p className="text-gray-600 mb-4">Chandigarh University • 2022 - 2026</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Major in AIML</li>
              <li>CGPA: 7.88</li>
              <li>
                Relevant Coursework: UI/UX, Data Analysis, C++, Data Structures and Algorithms, Web Development
              </li>
            </ul>
          </div>

          
          <div className="border-l-2 border-black pl-8 pb-8">
            <h3 className="text-2xl font-bold mb-2">12th Grade (Senior Secondary)</h3>
            <p className="text-gray-600 mb-4">RPS Public School,Rewari • Year of Passing: 2022</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Board: CBSE</li>
              <li>Percentage: 91.2% </li>
              <li>Stream: Science</li>
            </ul>
          </div>

          <div className="border-l-2 border-black pl-8 pb-8">
            <h3 className="text-2xl font-bold mb-2">10th Grade (Secondary)</h3>
            <p className="text-gray-600 mb-4">RPS Public School,Rewari • Year of Passing: 2020</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Board: CBSE</li>
              <li>Percentage: 95.6% </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}