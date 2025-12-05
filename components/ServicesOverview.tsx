import { Camera, Video, Search, Map } from 'lucide-react'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      icon: Camera,
      title: 'Photographie Aérienne',
      description: 'Sublimez vos biens et projets avec des prises de vues spectaculaires en haute résolution.',
      link: '/services#photo'
    },
    {
      icon: Video,
      title: 'Vidéo Cinématique',
      description: 'Racontez votre histoire avec des images aériennes captivantes et un montage professionnel.',
      link: '/services#video'
    },
    {
      icon: Search,
      title: 'Inspections Techniques',
      description: 'Accédez aux zones difficiles en toute sécurité. Détection rapide des anomalies.',
      link: '/services#inspection'
    },
    {
      icon: Map,
      title: 'Relevés & Cartographie',
      description: 'Cartographie précise et modélisation 3D pour vos projets d\'aménagement.',
      link: '/services#carto'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des solutions aériennes pour chaque besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Que vous souhaitiez valoriser un bien immobilier, suivre un chantier ou inspecter des infrastructures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link 
                key={index} 
                href={service.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group"
              >
                <div className="bg-ocean-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ocean-600 transition">
                  <Icon className="text-ocean-600 group-hover:text-white transition" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}