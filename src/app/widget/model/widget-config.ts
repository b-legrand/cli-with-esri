/**
 * Configuration en dur d'une fenètre de widget.
 *
 * Chaque config json de widget devrait hériter de celle là. ou s'ajouter dans data.
 */
export interface WidgetConfig {

  /**
   * Identifiant unique / uuid du widget
   */
  uuid: string;

  /**
   * nom technique lisible du widget
   */
  name: string;

  /*
   * peut il être fermé ?
   */
  closable?: boolean;

  /**
   * peut il être déplacé ?
   */
  movable?: boolean;

  /**
   * peut il être plié ?
   */
  foldable?: boolean;

  /**
   * Peut il être ancré ?
   */
  anchorable?: boolean;

  /**
   * peut il être redimensionné ?
   */
  resizable?: boolean;

  /**
   * son contenu est il scrollable
   */
  scrollable?: boolean;

  /**
   * configuration fonctionnelle du widget
   */
  data?: any;
}
