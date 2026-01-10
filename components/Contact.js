

'use client'

import { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <footer id="contact" className="bg-orange text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Column */}
          <div>
            <h3 className="text-black text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4 text-sm leading-relaxed">
              We envision a future where every one in a community is empowered to alevel of self sustainance
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-black text-orange rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-orange rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-orange rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-orange rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#programs" className="hover:text-black transition-colors">Programs</a></li>
              <li><a href="#impact" className="hover:text-black transition-colors">Impact</a></li>
              <li><a href="#donate" className="hover:text-black transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>kintucranefoundation@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+256 763 708 044</span>
              </li>
              <li className="flex items-center gap-2">
                <span>(MM names: Kyeyune Joshua Kato)</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-black text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for financial tips and program updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded text-black"
              />
              <button
                type="submit"
                className="w-full bg-black text-orange py-2 rounded hover:bg-white hover:text-black transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/30 text-center text-sm">
          <p>&copy; 2025 Kintu Charity Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
