

export default function Hero() {
  return (
    <section 
      className="relative bg-gradient-to-r from-black/90 to-black/80 py-32 md:py-40 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/images/flyer-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Empowering Lives,<br />
          <span className="text-orange">Transforming Communities</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          We uplift vulnerable communities through education, empowerment, and compassion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#donate" 
            className="bg-orange text-white px-8 py-3 rounded-lg hover:bg-orange/90 transition-colors inline-block"
          >
            Donate Now
          </a>
          <a 
            href="#about" 
            className="border-2 border-orange text-orange px-8 py-3 rounded-lg hover:bg-orange hover:text-white transition-colors inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}