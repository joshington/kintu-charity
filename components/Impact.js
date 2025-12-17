

const stats = [
  { value: '1,200+', label: 'Lives Impacted' },
  { value: '35+', label: 'Community Projects' },
  { value: '10+', label: 'Years of Service' }
]

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-orange">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-black">Impact</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-black/20 backdrop-blur-sm border-l-4 border-white shadow-lg rounded-r-lg"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</h3>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}