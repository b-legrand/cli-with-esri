/**
 * Paramètres d'entrées.
 */
export interface SubLayer {
  title: string;
  uid: string;
  id: string;
  type?: string;
  // containers
  token?: string;
  url?: string;
  sublayers?: SubLayer[];
  // leafs
  visible?: boolean;
  minScale?: number;
  maxScale?: number;
}
