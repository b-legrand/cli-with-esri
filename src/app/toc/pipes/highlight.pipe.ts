import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transformation permettant de mettre en gras un texte.
 *
 * Usage:
 *     <input type="text" [(ngModel)]="filter">
 *     <div [innerHTML]="myAwesomeText  | highlight : filter"></div>
 *
 */
@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, search): string {
    // si rien a filtrer on quitte
    if (!search || !search.length) {
      return text;
    }
    // enlève les caractères regex de la chaine recherchée
    let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    // si un espace, on remplace par un pipe OR
    pattern = pattern
      .split(' ')
      .filter(t => {
        return t.length > 0;
      })
      .join('|');
    const regex = new RegExp(pattern, 'gi');

    return search
      ? text.replace(regex, match => `<b>${match}</b>`)
      : text;
  }
}
