'use client';

import Link from 'next/link';
import { Award, Camera, Plane, Users, CheckCircle, ArrowLeft, ShieldCheck, Phone } from 'lucide-react';

export default function FormationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-blue-950 shadow-md border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
                <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
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
      <div className="pt-32 pb-16 bg-blue-950 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent z-10"></div>
         <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Formation Drone" className="absolute inset-0 w-full h-full object-cover opacity-30" />
         
         <div className="relative z-20 max-w-4xl mx-auto px-4">
            <div className="inline-block px-3 py-1 bg-red-800 rounded-full text-xs font-bold uppercase tracking-wide mb-6 shadow-lg">
                Organisme de Formation
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">PASSEZ DE LA THÉORIE À LA RÉALITÉ DU TERRAIN.</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Ne vous contentez pas d'apprendre à voler. Apprenez à cadrer, à gérer le stress et à sécuriser vos missions avec un professionnel de l'image.
            </p>
         </div>
      </div>

      {/* SECTION 1 : POURQUOI NOUS ? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">UNE PÉDAGOGIE ISSUE DU DIRECT.</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Le manuel, c'est bien. L'expérience, c'est mieux. Notre formation est basée sur des cas concrets rencontrés lors de tournages Broadcast (TV) et fictions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Point 1 */}
                <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-blue-900 hover:shadow-lg transition duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 mb-4">
                        <Camera size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">L'Oeil du Réalisateur</h3>
                    <p className="text-slate-600 text-sm">
                        Savoir piloter ne suffit pas. Nous vous apprenons à composer une image, gérer la lumière et réaliser des mouvements fluides "cinématiques".
                    </p>
                </div>
                {/* Point 2 */}
                <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-red-800 hover:shadow-lg transition duration-300">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-800 mb-4">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Sécurité & Rigueur</h3>
                    <p className="text-slate-600 text-sm">
                        La gestion du risque est notre priorité. Apprenez à préparer vos missions (SORA, MANEX) et à réagir calmement face aux imprévus techniques.
                    </p>
                </div>
                {/* Point 3 */}
                <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-blue-900 hover:shadow-lg transition duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 mb-4">
                        <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Coaching Personnalisé</h3>
                    <p className="text-slate-600 text-sm">
                        Pas de cours magistraux en amphithéâtre. Nous privilégions les petits groupes ou le "One-to-One" pour maximiser votre temps de vol.
                    </p>
                </div>
            </div>
        </div>
      </section>

    

      {/* FOOTER */}
      <footer className="bg-blue-950 border-t border-blue-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl text-white font-bold mb-6">Prêt à prendre les commandes ?</h2>
            <div className="flex justify-center gap-4 mt-8">
                <Link href="/contact" className="bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-900 transition">Demander un devis</Link>
                <a href="tel:+33660770402" className="border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition flex items-center justify-center">06 60 77 04 02</a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-sm flex justify-center gap-8">
                <span>© 2026 ATLANTIC DRONES</span>
                <span>Télépilote Pro DGAC</span>
            </div>
        </div>
      </footer>

    </div>
  );
}