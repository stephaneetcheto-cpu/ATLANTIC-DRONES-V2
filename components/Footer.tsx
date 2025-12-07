import Link from 'next/link';
import { Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-blue-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* TITRE */}
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">Un projet au Pays Basque ou dans les Landes ?</h2>
        
        {/* BOUTONS D'ACTION + RÉSEAUX SOCIAUX (Tout aligné) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            {/* Bouton Devis */}
            <Link 
              href="/contact" 
              className="bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-900 transition shadow-lg shadow-red-900/30 text-sm md:text-base"
            >
              Demander un devis
            </Link>
            
            {/* Bouton Tel */}
            <a 
              href="tel:+33660770402" 
              className="border border-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition flex items-center justify-center gap-2 text-sm md:text-base"
            >
               <Phone size={18} /> 06 60 77 04 02
            </a>

            {/* Séparateur vertical (visible uniquement sur ordi) */}
            <div className="hidden md:block w-px h-10 bg-white/20 mx-2"></div>

            {/* Réseaux Sociaux */}
            <div className="flex gap-6 items-center">
                <a 
                  href="https://www.instagram.com/atlanticdrones" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                  aria-label="Instagram"
                >
                    <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/atlanticdrones" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                  aria-label="Facebook"
                >
                    <Facebook size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/atlantic-drones" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                    <Linkedin size={24} />
                </a>
            </div>
        </div>

        {/* COPYRIGHT (Plus discret) */}
        <div className="text-xs text-slate-500 flex flex-col md:flex-row justify-center gap-2 md:gap-6 pt-6 border-t border-white/5">
            <span>© 2026 ATLANTIC DRONES</span>
            <span className="hidden md:inline">•</span>
            <span>Télépilote Pro DGAC</span>
            <span className="hidden md:inline">•</span>
            <Link href="/mentions-legales" className="hover:text-slate-300 transition">Mentions Légales</Link>
        </div>

      </div>
    </footer>
  );
}