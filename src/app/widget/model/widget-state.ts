/** 
 * Objet représentant l'état d'un widget.
 */
export interface WidgetState{

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
    position?: { left: number, top: number },

    /**
     * Taille du widget.
     */
    size?: {
        width: number;
        height: number;
    }
}

/**
 * Créé un état initial avec le widget centré.
 */
export function initialWidgetState(screenSize?: {width: number, height: number}): WidgetState {
    return {
        folded: false,
        closed: false,
        anchored: false,
        position: {
            left:0,
            top:0
        },
        size: {
            width: 320,
            height: 240
        }
    }
}

export default WidgetState;
