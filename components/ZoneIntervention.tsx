import { MapPin } from 'lucide-react'

export default function ZoneIntervention() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Basés à Biarritz, nous intervenons dans tout le Pays Basque
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              De Bayonne à Hendaye, de la côte aux Pyrénées, Atlantic Drones vous accompagne 
              sur l'ensemble du territoire basque et au-delà.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-ocean-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Zone d'intervention régulière</h3>
                  <p className="text-gray-600">
                    Pays Basque (64), Sud Landes (40), Béarn
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-ocean-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Intervention possible</h3>
                  <p className="text-gray-600">
                    Toute la Nouvelle-Aquitaine et au-delà (nous consulter)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            {/* Placeholder pour la carte */}
            <div className="text-center p-8">
              <MapPin className="text-ocean-600 mx-auto mb-4" size={48} />
              <p className="text-gray-600">Carte interactive à venir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}