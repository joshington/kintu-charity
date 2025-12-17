
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black py-4 relative z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo flex items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Kintu Charity Foundation Logo" 
            width={40} 
            height={40}
          />
          <span className="text-white font-bold text-lg">Kintu Crane Foundation</span>
        </div>

        <button 
          className="md:hidden flex flex-col cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        <nav className="hidden md:flex items-center space-x-5">
          <Link href="#about" className="text-white hover:text-orange transition-colors">About</Link>
          <Link href="#programs" className="text-white hover:text-orange transition-colors">Programs</Link>
          <Link href="#impact" className="text-white hover:text-orange transition-colors">Impact</Link>
          <Link href="#contact" className="text-white hover:text-orange transition-colors">Contact</Link>
          <Link href="#donate" className="bg-orange text-white px-4 py-2 rounded hover:bg-orange/90 transition-colors">Donate</Link>
        </nav>

        <div className={`md:hidden fixed top-16 left-0 w-full bg-black py-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center space-y-6">
            <Link href="#about" className="text-white text-lg hover:text-orange" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#programs" className="text-white text-lg hover:text-orange" onClick={() => setIsMenuOpen(false)}>Programs</Link>
            <Link href="#impact" className="text-white text-lg hover:text-orange" onClick={() => setIsMenuOpen(false)}>Impact</Link>
            <Link href="#contact" className="text-white text-lg hover:text-orange" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="#donate" className="bg-orange text-white px-6 py-2 rounded hover:bg-orange/90" onClick={() => setIsMenuOpen(false)}>Donate</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}