'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// IMPORT DU NOUVEAU COMPOSANT
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'reportage',
    message: ''
  });

  // États : idle (attente), loading (envoi), success (réussi), error (échec)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', projectType: 'reportage', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-blue-950 shadow-md border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
                <div className="flex-shrink-0 flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-800 rounded-lg flex items-center justify-center shadow-lg">
                         <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">ATLANTIC DRONES</span>
                </div>
                <Link href="/" className="text-white hover:text-red-400 font-medium transition flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Retour Accueil
                </Link>
            </div>
        </div>
      </nav>

      {/* HEADER */}
      <div className="pt-32 pb-20 bg-blue-950 text-white text-center relative overflow-hidden">
         <div className="relative z-20 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Parlons de votre projet.</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Une question technique, un devis ou une formation ? Remplissez ce formulaire.
            </p>
         </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          
          {/* COLONNE GAUCHE (Infos) */}
          <div className="lg:col-span-1 bg-blue-950 text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between border border-blue-900">
            <div>
              <h3 className="text-2xl font-bold mb-8">Coordonnées</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="text-red-400" size={20} />
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Téléphone</p>
                    <a href="tel:+33660770402" className="text-lg font-semibold hover:text-red-400 transition">06 60 77 04 02</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-red-400" size={20} />
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                    <a href="mailto:contact@atlantic-drones.com" className="text-lg font-semibold hover:text-red-400 transition">contact@atlantic-drones.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-red-400" size={20} />
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Zone</p>
                    <p className="text-lg font-semibold">Pays Basque & Landes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE (Formulaire) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={40} className="text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                <p className="text-slate-600 mb-8">Merci. Nous reviendrons vers vous sous 24h.</p>
                <button onClick={() => setStatus('idle')} className="text-blue-900 font-semibold underline">Nouveau message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200" placeholder="Nom complet *" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200" placeholder="Entreprise" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200" placeholder="Email *" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200" placeholder="Téléphone" />
                </div>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white">
                    <option value="reportage">Reportage Photo / Vidéo</option>
                    <option value="btp">Suivi de Chantier</option>
                    <option value="topo">Topographie</option>
                    <option value="formation">Formation</option>
                    <option value="autre">Autre</option>
                </select>
                <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200" placeholder="Votre message..."></textarea>
                
                <button type="submit" disabled={status === 'loading'} className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2">
                    {status === 'loading' ? <><Loader2 className="animate-spin" /> Envoi...</> : <><Send size={18} /> Envoyer ma demande</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      {/* FOOTER INTÉGRÉ VIA LE COMPOSANT */}
      <Footer />
    </div>
  );
}