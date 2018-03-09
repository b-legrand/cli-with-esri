import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../../core/model/app.config';

/**
 * Composant servant à injecter du style global
 *
 * Permets d'injecter la couleur du theme de l'application par dessus primeng ou d'autres composants.
 *
 * Génère un `<style>` dans le `<head>` de la page.
 *
 * /!\ Attention, à traiter comme un global, vérifier qu'il n'y a pas de doublon avec style.scss.
 *
 */
@Component({
  selector: 'sncf-theme',
  styleUrls: ['./sncf-theme.component.scss'],
  template: '',
  /* tslint:disable:use-view-encapsulation*/ // c'est ce qu'on veut.
  encapsulation: ViewEncapsulation.None,
})
export class SncfThemeComponent implements OnInit {

  public customCss: string;

  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.customCss = this.cssTemplate(appConfig.themeColor);
  }

  ngOnInit() {
    // à l'ancienne :
    const style: HTMLStyleElement = document.createElement('style');
    style.attributes['data-sncf-theme'] = true;
    style.type = 'text/css';
    style.innerHTML = this.customCss;
    document.head.appendChild(style);
  }

  /**
   * Les styles ayant besoin de la couleur.
   *
   * @returns du css avec la couleur injectée.
   */
  cssTemplate(themeColor) {
    return [
      // loading primeng
      `.ui-progress-spinner{stroke: ${themeColor};}`,
      `@keyframes ui-progress-spinner-color {
          100%, 0% {stroke: ${themeColor};}
          40% {stroke: ${themeColor};}
          66% {stroke: ${themeColor};}
          80%, 90% {stroke: ${themeColor};}
      }`,
      // scrollbar
      `.ui-progress-bar-x:hover,.ui-progress-bar-y:hover{background: ${themeColor};}`,
      // titres / balises html par défaut.
      `h1,h2,h3,h4,h5,h6{color: ${themeColor};}`,
      `*:focus    {outline-color: ${themeColor};}`,
      `.sncf-color, .couleur-theme{color: ${themeColor};}`,
    ].join('');
  }

}
