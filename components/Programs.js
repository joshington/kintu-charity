

import Image from 'next/image'

const programs = [
  {
    id: 1,
    title: 'Education Support',
    description: 'Providing access to quality education for underprivileged children.',
    image: '/images/edu.jpeg'
  },
  {
    id: 2,
    title: 'Women Empowerment',
    description: 'Supporting women with skills, mentorship, and financial literacy.',
    image: '/images/women.jpeg'
  },
  {
    id: 3,
    title: 'Community Outreach',
    description: 'Health, sanitation, and community-driven development programs.',
    image: '/images/com.jpeg'
  }
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-orange">Programs</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transition-transform border border-gray-800"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={program.image} 
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange mb-3">{program.title}</h3>
                <p className="text-gray-300">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}