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
  position?: { left: number, top: number };

  /**
   * Taille du widget.
   */
  size?: {
    width: number;
    height: number;
  };

  /**
   * Z-index (css) lorsque le widget est en mode flottant.
   */
  zIndex: number;

}
// taille par défaut d'un widget
const width = 320;
const height = 240;

/**
 * Créé un état initial avec le widget centré.
 */
export function initialWidgetState(): WidgetState {

  return {
    folded: false,
    closed: true,
    anchored: false,
    position: {
      left: window.innerWidth - width / 2,
      top: window.innerHeight - height / 2
    },
    size: {
      width: 320,
      height: 240
    },
    zIndex: 3000,
  };
}

export default WidgetState;
