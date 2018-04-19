/**
 * Objet représentant l'état d'un widget.
 */
export interface WidgetState {
  /**
   * Widget fermé/inactif.
   */
  closed: boolean;

  /**
   * Widget plié/déplié
   */
  folded: boolean;

  /**
   * Widget rattaché a une zone d'ancrage.
   */
  anchored: boolean;

  /**
   * Id de la zone d'ancrage.
   */
  anchorZone?: string;

  /**
   * Position à l'écran.
   */
  position?: { left: number; top: number };

  /**
   * Taille du widget.
   */
  size?: {
    /**
     * Largeur en pixels.
     */
    width: number;

    /**
     * Hauteur en pixels.
     */
    height: number;
  };

  /**
   * Z-index (css) lorsque le widget est en mode flottant.
   */
  zIndex?: number;

  /**
   * Objet permettant au widgets de stocker leur état fonctionnel.
   */
  data?: any;
}
// taille par défaut d'un widget
const width = 320;
const height = 240;

/**
 * Position initiale d'un widget.
 */
export function initialWidgetState(): WidgetState {
  return {
    folded: false,
    closed: true,
    anchored: true,
    position: {
      // la moitié de l'écran moins la moitié du widget - la marge = la position.
      left: window.innerWidth / 2 - width / 2,
      top: window.innerHeight / 2 - height / 2,
    },
    size: {
      width,
      height,
    },
    // attention, primeng à partir de 3000
    zIndex: 100,
  };
}

export default WidgetState;
