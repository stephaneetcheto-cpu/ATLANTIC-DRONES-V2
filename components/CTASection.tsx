import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-ocean-600 to-ocean-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à donner une nouvelle dimension à votre projet ?
        </h2>
        <p className="text-xl text-ocean-100 mb-8">
          Demandez votre devis gratuit et recevez une réponse sous 24h
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-secondary inline-block text-center">
            Demander un devis gratuit
          </Link>
          <a 
            href="tel:0660770402" 
            className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-ocean-600 transition font-medium text-center"
          >
            Ou appelez-nous : 06 60 77 04 02
          </a>
        </div>
      </div>
    </section>
  )
}