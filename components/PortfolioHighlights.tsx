import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioHighlights() {
  const projects = [
    {
      title: 'Villa d\'architecte - Guéthary',
      category: 'Immobilier',
      image: '/images/placeholder-1.jpg'
    },
    {
      title: 'Suivi chantier - Anglet',
      category: 'BTP',
      image: '/images/placeholder-2.jpg'
    },
    {
      title: 'Inspection Mairie - Biarritz',
      category: 'Collectivités',
      image: '/images/placeholder-3.jpg'
    },
    {
      title: 'Domaine viticole - Irouléguy',
      category: 'Immobilier',
      image: '/images/placeholder-4.jpg'
    },
    {
      title: 'Suivi travaux - Bayonne',
      category: 'BTP',
      image: '/images/placeholder-5.jpg'
    },
    {
      title: 'Film promotionnel - Hendaye',
      category: 'Collectivités',
      image: '/images/placeholder-6.jpg'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos dernières réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos projets récents au Pays Basque et alentours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition aspect-[4/3]"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center">
                <span className="text-white text-sm opacity-50">Image à venir</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm text-basque-300">{project.category}</span>
                  <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-primary inline-block">
            Voir tout le portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}