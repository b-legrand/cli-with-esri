/**
 * Paramètres d'entrées.
 */
export interface SubLayer {
  title: string;
  uid: string;
  id: string;
  // containers
  token?: string;
  url?: string;
  sublayers?: SubLayer[];
  // leafs
  visible?: boolean;
  minScale?: number;
  maxScale?: number;
}
