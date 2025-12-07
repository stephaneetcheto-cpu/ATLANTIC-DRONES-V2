'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Calendar, Image as ImageIcon, ChevronDown } from 'lucide-react';

interface Project {
  id: string;
  Title: string;
  Category: string;
  Type: string;
  Year: string;
  Theme: string;
  IsVideo: boolean;
  VideoURL?: string;
  ShortDescription: string;
  Challenge?: string;
  Solution?: string;
  Technique?: string;
  Images?: any[];
}

const getThemeStyles = (theme: string) => {
  const t = theme?.toLowerCase() || 'blue';

  switch (t) {
    case 'red':
      return {
        badge: 'bg-red-100 text-red-800 border-red-200',
        // BORDURE : On garde le correctif qui marche (hover direct)
        borderHover: 'hover:border-red-800 hover:ring-1 hover:ring-red-800',
        icon: 'text-red-700',
        filterActive: 'bg-red-800 text-white shadow-md shadow-red-900/20',
        filterInactive: 'hover:text-red-800 hover:border-red-800',
        scrollBtn: 'text-red-800 bg-red-50 hover:bg-red-200 border-red-100'
      };
    case 'green':
      return {
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        borderHover: 'hover:border-emerald-700 hover:ring-1 hover:ring-emerald-700',
        icon: 'text-emerald-700',
        filterActive: 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20',
        filterInactive: 'hover:text-emerald-700 hover:border-emerald-700',
        scrollBtn: 'text-emerald-800 bg-emerald-50 hover:bg-emerald-200 border-emerald-100'
      };
    case 'blue':
    default:
      return {
        badge: 'bg-blue-100 text-blue-900 border-blue-200',
        borderHover: 'hover:border-blue-900 hover:ring-1 hover:ring-blue-900',
        icon: 'text-blue-900',
        filterActive: 'bg-blue-900 text-white shadow-md shadow-blue-900/20',
        filterInactive: 'hover:text-blue-900 hover:border-blue-900',
        scrollBtn: 'text-blue-900 bg-blue-50 hover:bg-blue-200 border-blue-100'
      };
  }
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('Tous');

  const categoriesData = useMemo(() => {
    const uniqueCats = Array.from(new Set(projects.map((p) => p.Category).filter(Boolean)));
    return uniqueCats.map(cat => {
      const exampleProject = projects.find(p => p.Category === cat);
      const theme = exampleProject ? exampleProject.Theme : 'blue';
      return { name: cat, theme: theme };
    });
  }, [projects]);

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter((p) => p.Category === activeFilter);

  const scrollToGallery = () => {
    const galleryElement = document.getElementById('project-gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-slate-50">
      
      {/* FILTRES */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveFilter('Tous')}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
            activeFilter === 'Tous'
              ? 'bg-blue-950 text-white shadow-lg scale-105 border-blue-950'
              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-900 hover:text-blue-900'
          }`}
        >
          Tous
        </button>

        {categoriesData.map((cat) => {
          const styles = getThemeStyles(cat.theme);
          const isActive = activeFilter === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                isActive
                  ? `${styles.filterActive} scale-105 border-transparent`
                  : `bg-white text-slate-600 border-slate-200 ${styles.filterInactive}`
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* GRILLE */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const styles = getThemeStyles(project.Theme);
            const imageUrl = project.Images && project.Images.length > 0 ? project.Images[0].url : null;
            
            const showVideoIcon = project.IsVideo;
            const showGalleryIcon = !project.IsVideo && project.Images && project.Images.length > 0;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                layoutId={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`cursor-pointer group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${styles.borderHover}`}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-200">
                  {imageUrl ? (
                    <img src={imageUrl} alt={project.Title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 text-xs">Pas d'image</div>
                  )}

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-slate-700 shadow-sm flex items-center gap-1">
                      <Calendar size={12} /> {project.Year}
                  </div>

                  {/* OVERLAY ICONES (CORRIGÉ : Transparence et Flou Légers) */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    {showVideoIcon ? (
                      // bg-white/20 (20% opacité) par défaut + backdrop-blur-sm (flou léger) = Effet Verre
                      // group-hover:bg-white = Blanc solide au survol (PC)
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 scale-100 group-hover:scale-110 bg-white/20 group-hover:bg-white ${styles.icon}`}>
                        <Play fill="currentColor" size={24} className="opacity-90 group-hover:opacity-100" />
                      </div>
                    ) : showGalleryIcon ? (
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 scale-100 group-hover:scale-110 bg-white/20 group-hover:bg-white ${styles.icon}`}>
                        <ImageIcon size={24} className="opacity-90 group-hover:opacity-100" />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3 items-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${styles.badge}`}>
                      {project.Category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium bg-slate-50 px-2 py-1 rounded border border-slate-100">
                      {project.Type}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-900 transition-colors">{project.Title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">{project.ShortDescription}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* --- MODALE --- */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedId}
              className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto flex flex-col"
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedId);
                if (!project) return null;
                const styles = getThemeStyles(project.Theme);
                
                const allImages = project.Images || [];
                const mainImage = allImages.length > 0 ? allImages[0].url : null;
                const galleryImages = project.IsVideo ? allImages : allImages.slice(1);
                const hasGalleryContent = galleryImages.length > 0;

                return (
                  <div className="pb-20">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                      className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-20 transition"
                    >
                      <X size={20} />
                    </button>

                    <div className="aspect-video w-full bg-black relative">
                      {project.IsVideo && project.VideoURL ? (
                        <iframe
                          src={project.VideoURL.replace("watch?v=", "embed/")}
                          className="w-full h-full absolute inset-0"
                          allowFullScreen
                          allow="autoplay; encrypted-media"
                        ></iframe>
                      ) : mainImage ? (
                        <img src={mainImage} alt={project.Title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white">Image non disponible</div>
                      )}
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                        <div className="flex items-center gap-3">
                           <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border ${styles.badge}`}>
                              {project.Category}
                           </span>
                           <span className="text-slate-400 text-sm flex items-center gap-1">
                              <Calendar size={14}/> {project.Year}
                           </span>
                        </div>

                        {/* BOUTON GALERIE (Toujours visible si galerie) */}
                        {hasGalleryContent && (
                          <button 
                            onClick={scrollToGallery}
                            className={`w-full md:w-auto flex justify-center items-center gap-2 text-xs font-bold px-4 py-3 rounded-lg transition border shadow-sm ${styles.scrollBtn}`}
                          >
                            <ImageIcon size={16} /> Voir la galerie ({galleryImages.length}) <ChevronDown size={16} />
                          </button>
                        )}
                      </div>

                      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">{project.Title}</h2>
                      <div className="prose prose-slate max-w-none text-slate-600 mb-8">
                          <p className="text-base md:text-lg leading-relaxed">{project.ShortDescription}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100 bg-slate-50 p-6 rounded-xl">
                          {project.Challenge && <div><h4 className={`font-bold mb-2 flex items-center gap-2 ${styles.icon}`}>Challenge</h4><p className="text-sm text-slate-600">{project.Challenge}</p></div>}
                          {project.Solution && <div><h4 className={`font-bold mb-2 flex items-center gap-2 ${styles.icon}`}>Solution</h4><p className="text-sm text-slate-600">{project.Solution}</p></div>}
                          {project.Technique && <div><h4 className={`font-bold mb-2 flex items-center gap-2 ${styles.icon}`}>Matériel</h4><p className="text-sm text-slate-600">{project.Technique}</p></div>}
                      </div>
                      
                      {hasGalleryContent && (
                        <div id="project-gallery" className="mt-12 pt-8 border-t-2 border-slate-100 scroll-mt-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <ImageIcon className="text-slate-400"/> Galerie Photos
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {galleryImages.map((img: any, idx: number) => (
                                    <div key={idx} className="rounded-xl overflow-hidden h-64 border border-slate-100 shadow-sm hover:shadow-md transition bg-slate-50">
                                        <img src={img.url} alt={`${project.Title} ${idx + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                      )}

                      {project.VideoURL && (
                         <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                             <a href={project.VideoURL} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg transition hover:bg-slate-50 ${styles.icon}`}>
                                Voir sur YouTube <ExternalLink size={16}/>
                             </a>
                         </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}