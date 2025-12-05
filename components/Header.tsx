'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-ocean-600">
            Atlantic Drones
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-ocean-600 transition">
              Accueil
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-ocean-600 transition">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-ocean-600 transition">
              Portfolio
            </Link>
            <Link href="/secteurs" className="text-gray-700 hover:text-ocean-600 transition">
              Secteurs
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-ocean-600 transition">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-ocean-600 transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Devis gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-ocean-600">
              Accueil
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-ocean-600">
              Services
            </Link>
            <Link href="/portfolio" className="block text-gray-700 hover:text-ocean-600">
              Portfolio
            </Link>
            <Link href="/secteurs" className="block text-gray-700 hover:text-ocean-600">
              Secteurs
            </Link>
            <Link href="/a-propos" className="block text-gray-700 hover:text-ocean-600">
              À propos
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-ocean-600">
              Contact
            </Link>
            <Link href="/contact" className="btn-primary block text-center">
              Devis gratuit
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}