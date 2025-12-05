import Airtable from 'airtable';

// Initialisation
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

// Utilitaire YouTube
function getYouTubeId(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export interface Project {
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
  Images?: any[]; // RESTE PLURIEL car c'est un tableau de photos (pour le code)
}

export async function getProjects() {
  try {
    // 1. REQUÊTE AIRTABLE
    // On utilise 'view' pour respecter l'ordre manuel (Drag & Drop)
    const records = await base('Table 1').select({
      view: "Grid view", 
      filterByFormula: "NOT({Title} = '')"
    }).all();

    // 2. TRAITEMENT
    const projects = records.map((record) => {
      const isVideo = record.get('IsVideo') === true;
      const videoURL = record.get('VideoURL') as string || '';
      
      // --- CORRECTION STRICTE ---
      // On récupère EXCLUSIVEMENT la colonne "Image" (Singulier)
      // On le caste en tableau (any[]) car Airtable renvoie toujours une liste d'objets pour les pièces jointes
      let rawImages = record.get('Image') as any[];

      // Sécurité : si la case est vide, on met un tableau vide
      let images = rawImages || [];

      // --- MINIATURE YOUTUBE AUTO ---
      // Si c'est une vidéo (IsVideo) et qu'il n'y a pas d'image dans la colonne "Image"
      if (isVideo && images.length === 0 && videoURL) {
        const videoId = getYouTubeId(videoURL);
        if (videoId) {
          images = [{
            url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            width: 1280,
            height: 720,
            filename: 'youtube-thumbnail-auto.jpg'
          }];
        }
      }

      return {
        id: record.id,
        Title: record.get('Title') || '',
        Category: record.get('Category') || '',
        Type: record.get('Type') || '',
        Year: record.get('Year') || '',
        Theme: record.get('Theme') || 'blue',
        IsVideo: isVideo,
        VideoURL: videoURL,
        ShortDescription: record.get('ShortDescription') || '',
        Challenge: record.get('Challenge') || '',
        Solution: record.get('Solution') || '',
        Technique: record.get('Technique') || '',
        Images: images, // On envoie la liste "Images" au site
      };
    });

    return projects;

  } catch (error) {
    console.error("Erreur Airtable:", error);
    return [];
  }
}