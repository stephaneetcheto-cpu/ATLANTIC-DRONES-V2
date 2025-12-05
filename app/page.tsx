import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Video, Clock, Map, Brain, Camera, Box, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-blue-950/90 backdrop-blur-md border-b border-blue-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
                <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 bg-red-800 rounded-lg flex items-center justify-center shadow-lg">
                         <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">ATLANTIC DRONES</span>
                </div>
                
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#services" className="text-slate-300 hover:text-white font-medium transition">Expertise</a>
                    <Link href="/realisations" className="text-slate-300 hover:text-white font-medium transition">Réalisations</Link>
                    <Link href="/formation" className="text-slate-300 hover:text-white font-medium transition">Formation</Link>
                    <a href="#histoire" className="text-slate-300 hover:text-white font-medium transition">L'Agence</a>
                    <Link href="/contact" className="bg-red-800 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-red-900 transition shadow-lg shadow-red-900/30">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative w-full min-h-[600px] lg:min-h-0 lg:aspect-video flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover">
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    Basé au Pays Basque & Landes
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-xl">
                    L'Expertise de l'Image <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">Aérienne & Sol</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed drop-shadow-md font-medium">
                    Nous accompagnons les <strong>entreprises</strong>, les <strong>collectivités</strong>, les acteurs du <strong>BTP</strong> et de l'<strong>immobilier</strong> avec une production globale :<br/>
                    <span className="text-white font-bold mt-2 block drop-shadow-lg">Photo | Vidéo | Timelapse | Topographie | Innovation 3D.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-900 transition shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
                        Parlez-nous de votre projet <ArrowRight size={20} />
                    </Link>
                    <Link href="/realisations" className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
                        <Play size={20} /> Voir nos réalisations
                    </Link>
                </div>
            </div>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
             <Image
                src="/Gemini_Generated_Image_3im8o93im8o93im8.png"
                alt="Texture fond"
                fill
                className="object-cover opacity-[0.01]"
                sizes="100vw"
             />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">FILMER, MESURER, VALORISER.</h2>
                <div className="w-24 h-1 bg-red-800 mx-auto rounded mb-6"></div>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Des solutions complètes, de l'image créative à la donnée technique.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-800 transition duration-300">
                    <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 text-blue-900 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition-all">
                        <Video size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Reportage Photo & Vidéo</h3>
                    <p className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Communication Corporate & Institutionnelle</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Nous réalisons vos films d'entreprise et reportages territoriaux avec une écriture visuelle soignée. Une approche narrative complète (Sol & Drone) pour valoriser votre image.
                    </p>
                    <Link href="/realisations" className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700">Voir les reportages <ArrowRight className="ml-1" size={16} /></Link>
                </div>

                <div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-red-900/10 hover:border-red-800 transition duration-300">
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-800 group-hover:scale-110 group-hover:bg-red-800 group-hover:text-white transition-all">
                        <Clock size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Vidéo Timelapse & Suivi</h3>
                    <p class="text-sm font-bold text-red-800 mb-3 uppercase tracking-wide">Le gardien du temps de vos projets</p>
                    <p class="text-slate-600 mb-6 leading-relaxed">
                        Nous installons des boîtiers autonomes et connectés pour suivre l'évolution de vos constructions. Nous livrons un film promotionnel dynamique retraçant l'intégralité du chantier.
                    </p>
                    <Link href="/realisations" className="inline-flex items-center text-red-800 font-semibold hover:text-red-700">Voir un exemple <ArrowRight className="ml-1" size={16} /></Link>
                </div>

                <div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-red-900/10 hover:border-red-800 transition duration-300">
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-800 group-hover:scale-110 group-hover:bg-red-800 group-hover:text-white transition-all">
                        <Map size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Topographie & LiDAR</h3>
                    <p class="text-sm font-bold text-red-800 mb-3 uppercase tracking-wide">Relevés Techniques de Précision</p>
                    <p class="text-slate-600 mb-6 leading-relaxed">
                        L'ADN historique de la société. Nous déployons une chaîne de mesure hybride (Station totale, GPS, Drone LiDAR) pour fournir des données fiables aux géomètres-experts.
                    </p>
                    <Link href="/realisations" className="inline-flex items-center text-red-800 font-semibold hover:text-red-700">Détails techniques <ArrowRight className="ml-1" size={16} /></Link>
                </div>

                <div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-800 transition duration-300">
                    <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 text-blue-900 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition-all">
                        <Brain size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Innovation 3D & Immobilier</h3>
                    <p class="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Immersion & Home Staging IA</p>
                    <p class="text-slate-600 mb-6 leading-relaxed">
                        Accélérez vos ventes. Grâce à l'IA et à l'insertion 3D, nous donnons vie à vos maquettes 3D et transformons des biens vides ou en travaux en espaces de vie chaleureux.
                    </p>
                    <Link href="/realisations" className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700">Voir la démo IA <ArrowRight className="ml-1" size={16} /></Link>
                </div>
            </div>
        </div>
      </div>

      {/* FORMATION */}
      <div id="formation" className="py-24 bg-blue-950 text-white relative overflow-hidden border-t border-blue-900">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <div className="inline-block px-3 py-1 bg-red-800 rounded-full text-xs font-bold uppercase tracking-wide mb-4 shadow-lg">Transmission</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">APPRENDRE LE PILOTAGE AVEC UN PROFESSIONNEL.</h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Passez de la théorie à la réalité du terrain. Bénéficiez d'une expérience acquise sur les tournages les plus exigeants (TV, Sport, Fiction) pour maîtriser l'art du cadrage et la sécurité des vols en conditions réelles.
                    </p>
                    <div className="mt-10">
                        <Link href="/formation" className="bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-900 transition shadow-lg inline-block">
                            Découvrir le programme
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="rounded-2xl h-64 w-full flex items-center justify-center border border-white/10 overflow-hidden relative shadow-2xl">
                         <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Formation Drone" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* HISTOIRE */}
      <div id="histoire" className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">DE LA TOPOGRAPHIE À L'ÉMOTION DE L'IMAGE.</h2>
            <div className="space-y-8 text-left max-w-2xl mx-auto">
                <div className="flex gap-6 items-start">
                    <span className="font-bold text-red-800 w-24 text-right flex-shrink-0">2014</span>
                    <p className="text-slate-600 border-l-2 border-red-800 pl-6">
                        L'aventure commence en 2014 sur une base solide : la photogrammétrie technique, portée par <strong>François, ingénieur géomètre associé</strong>.
                    </p>
                </div>
                <div className="flex gap-6 items-start">
                    <span className="font-bold text-blue-900 w-24 text-right flex-shrink-0">Le Virage</span>
                    <p className="text-slate-600 border-l-2 border-slate-300 pl-6">
                        La passion de l'image a pris le dessus. En filmant la côte basque, nous avons développé une expertise narrative pour raconter des histoires complètes.
                    </p>
                </div>
                <div className="flex gap-6 items-start">
                    <span className="font-bold text-slate-900 w-24 text-right flex-shrink-0">Aujourd'hui</span>
                    <p className="text-slate-600 border-l-2 border-slate-300 pl-6">
                        Nous réunissons le meilleur des deux mondes : la rigueur de l'ingénieur pour vos suivis techniques et la sensibilité du réalisateur pour votre communication.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-blue-950 border-t border-blue-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl text-white font-bold mb-6">Un projet au Pays Basque ou dans les Landes ?</h2>
            <div className="flex justify-center gap-4 mt-8">
                <Link href="/contact" className="bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-900 transition">Demander un devis</Link>
                <a href="tel:+33660770402" className="border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition flex items-center justify-center">06 60 77 04 02</a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-sm flex justify-center gap-8">
                <span>© 2025 ATLANTIC DRONES</span>
                <span>Télépilote Pro DGAC</span>
            </div>
        </div>
      </footer>
    </div>
  );
}