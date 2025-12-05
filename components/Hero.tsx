import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-ocean-600 to-ocean-800 text-white py-24 md:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/drone-hero.mp4" type="video/mp4" />
          {/* Fallback gradient si la vidéo ne charge pas */}
        </video>
        {/* Overlay pour assurer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/50 to-ocean-800/50"></div>
      </div>

      {/* Contenu par-dessus la vidéo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Donnez une nouvelle perspective à vos projets
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-ocean-100">
            Photographie & vidéo aérienne professionnelle par drone au Pays Basque
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-secondary inline-block text-center">
              Demander un devis gratuit
            </Link>
            <Link 
              href="/portfolio" 
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-ocean-600 transition font-medium text-center"
            >
              Voir notre portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}