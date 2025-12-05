import { Building2, HardHat, Landmark } from 'lucide-react'
import Link from 'next/link'

export default function Sectors() {
  const sectors = [
    {
      icon: Building2,
      title: 'Immobilier',
      description: 'Valorisez vos biens avec des visuels exceptionnels. Photos aériennes, vidéos promotionnelles, vues 360°.',
      link: '/secteurs/immobilier',
       bgColor: 'rgb(220 38 38)',      // Rouge piment d'Espelette
      bgColorHover: 'rgb(3 105 161)' // ocean-700
    },
    {
      icon: HardHat,
      title: 'BTP & Construction',
      description: 'Suivez vos chantiers, inspectez en sécurité. Relevés topographiques, suivi d\'avancement, inspections.',
      link: '/secteurs/btp',
      bgColor: 'rgb(249 115 22)', // basque-500
      bgColorHover: 'rgb(234 88 12)' // basque-600
    },
    {
      icon: Landmark,
      title: 'Collectivités',
      description: 'Urbanisme, patrimoine, communication. Cartographie, inspections patrimoniales, films promotionnels.',
      link: '/secteurs/collectivites',
      bgColor: 'rgb(75 85 99)', // gray-600
      bgColorHover: 'rgb(55 65 81)' // gray-700
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Une expertise adaptée à votre secteur
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions sur mesure pour l'immobilier, le BTP et les collectivités
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <Link 
                key={index}
                href={sector.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ backgroundColor: sector.bgColor }}
              >
                <div className="p-8 text-white min-h-[300px] flex flex-col justify-between">
                  <div>
                    <Icon size={48} className="mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{sector.title}</h3>
                    <p className="text-white/90">{sector.description}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-white font-medium group-hover:underline">
                      En savoir plus →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}