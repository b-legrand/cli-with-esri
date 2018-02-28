/**
 * Configuration en dur d'un widget.
 *
 * Chaque config json de widget devrait hériter de celle là.
 */
export interface WidgetConfig {
  // peut il être fermé ?
  closable?: boolean;
  // peut il être bougé ?
  movable?: boolean;
  // peut il être plié ?
  foldable?: boolean;
  // peut il être attaché ?
  anchorable?: boolean;
  // peut il être redimensionné ?
  resizable?: boolean;
  // son contenu est il scrollable
  contentScroll?: boolean;
}
