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

      <footer className="bg-blue-950 border-t border-blue-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
             <span className="text-white">© 2026 ATLANTIC DRONES</span>
        </div>
      </footer>
    </div>
  );
}