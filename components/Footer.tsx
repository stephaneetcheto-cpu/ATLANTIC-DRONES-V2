import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Atlantic Drones</h3>
            <p className="text-gray-400 text-sm">
              Services de drones professionnels au Pays Basque. Photographie aérienne, 
              vidéo, inspections techniques et relevés topographiques.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/secteurs" className="text-gray-400 hover:text-white transition">
                  Secteurs
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Photographie aérienne</li>
              <li>Vidéo & cinématique</li>
              <li>Inspections techniques</li>
              <li>Relevés topographiques</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0660770402" className="hover:text-white transition">
                  06 60 77 04 02
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@atlantic-drones.com" className="hover:text-white transition">
                  contact@atlantic-drones.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Biarritz, Pays Basque<br />France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atlantic Drones. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}