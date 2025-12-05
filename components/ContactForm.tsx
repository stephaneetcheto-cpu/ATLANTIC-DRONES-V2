'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    secteur: '',
    typePrestation: '',
    localisation: '',
    dateSouhaitee: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Intégrer avec Airtable ou votre backend
    // Pour l'instant, simulation
    setTimeout(() => {
      setSubmitMessage('Merci ! Votre demande a été envoyée. Nous vous recontactons sous 24h.')
      setIsSubmitting(false)
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        secteur: '',
        typePrestation: '',
        localisation: '',
        dateSouhaitee: '',
        message: ''
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
            Nom / Prénom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          />
        </div>

        {/* Secteur */}
        <div>
          <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-2">
            Secteur d'activité *
          </label>
          <select
            id="secteur"
            name="secteur"
            required
            value={formData.secteur}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          >
            <option value="">Sélectionnez...</option>
            <option value="immobilier">Immobilier</option>
            <option value="btp">BTP / Construction</option>
            <option value="collectivite">Collectivité</option>
            <option value="particulier">Particulier</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Type de prestation */}
        <div>
          <label htmlFor="typePrestation" className="block text-sm font-medium text-gray-700 mb-2">
            Type de prestation *
          </label>
          <select
            id="typePrestation"
            name="typePrestation"
            required
            value={formData.typePrestation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          >
            <option value="">Sélectionnez...</option>
            <option value="photo">Photographie aérienne</option>
            <option value="video">Vidéo aérienne</option>
            <option value="inspection">Inspection technique</option>
            <option value="cartographie">Relevés / Cartographie</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Localisation */}
        <div>
          <label htmlFor="localisation" className="block text-sm font-medium text-gray-700 mb-2">
            Localisation du projet *
          </label>
          <input
            type="text"
            id="localisation"
            name="localisation"
            required
            value={formData.localisation}
            onChange={handleChange}
            placeholder="Ex: Biarritz, Bayonne..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          />
        </div>

        {/* Date souhaitée */}
        <div className="md:col-span-2">
          <label htmlFor="dateSouhaitee" className="block text-sm font-medium text-gray-700 mb-2">
            Date souhaitée (si connue)
          </label>
          <input
            type="date"
            id="dateSouhaitee"
            name="dateSouhaitee"
            value={formData.dateSouhaitee}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Détails du projet *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Envoi en cours...'
          ) : (
            <>
              <Send size={20} />
              Envoyer la demande
            </>
          )}
        </button>
      </div>

      {/* Message de confirmation */}
      {submitMessage && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          {submitMessage}
        </div>
      )}
    </form>
  )
}