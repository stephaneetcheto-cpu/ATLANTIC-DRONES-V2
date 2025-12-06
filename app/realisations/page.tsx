import { getProjects } from '@/lib/airtable';
import ProjectGrid from '@/components/ProjectGrid';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const revalidate = 0;

export default async function RealisationsPage() {
  console.log("--- Chargement de la page Réalisations ---");
  const projects = await getProjects();
  console.log(`--- Page chargée avec ${projects.length} projets ---`);

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
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

      <div className="pt-32 pb-16 bg-blue-950 text-white text-center relative overflow-hidden">
         <div className="relative z-20 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">NOS RÉALISATIONS</h1>
         </div>
      </div>

      <ProjectGrid projects={projects as any} />

       {/* FOOTER */}
      <footer className="bg-blue-950 border-t border-blue-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl text-white font-bold mb-6">Un projet au Pays Basque ou dans les Landes ?</h2>
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