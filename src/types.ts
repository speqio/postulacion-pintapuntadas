export type CategoryType = 
  | 'todos'
  | 'patrimoniales'
  | 'flora'
  | 'fauna'
  | 'principiantes'
  | 'kits';

export type DifficultyLevel = 'Principiante' | 'Intermedio' | 'Avanzado';

export interface ThreadColor {
  code: string;
  name: string;
  hex: string;
}

export interface FichaObra {
  titulo: string;
  autora: string;
  anioCreacion: string;
  tecnica: string;
  materiales: string;
  dimensiones: string;
  peso: string;
  breveContexto: string;
  valorEstimado: number; // in CLP
}

export interface DesignItem {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  categoryLabel: string;
  location?: string;
  image: string;
  price: number; // in CLP
  difficulty: DifficultyLevel;
  dimensions: string; // e.g., "Bastidor 20 cm"
  timeHours: number;
  description: string;
  stitchesUsed: string[];
  threadPalette: ThreadColor[];
  includedInKit: string[];
  featured?: boolean;
  isKitAvailable: boolean;
  ficha?: FichaObra;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Obras' | 'Detalles' | 'Proceso' | 'Talleres';
  image: string;
  aspectRatio: 'portrait' | 'square' | 'wide';
  description: string;
  date?: string;
  location?: string;
  technique?: string;
}

export interface OrderRequest {
  fullName: string;
  email: string;
  phone: string;
  type: 'taller' | 'difusion' | 'colaboracion' | 'consulta';
  comuna?: string;
  landscapeDescription?: string;
  message: string;
  referenceImageName?: string;
}
