import {Directive, Input, ElementRef, OnChanges} from '@angular/core';

/**
 * Le texte mythique.
 */
export const LOREM_IPSUM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  ' minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ',
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in',
  'culpa qui officia deserunt mollit anim id est laborum.'
].join('');

/**
 * Directive permettant de générer du texte aléatoire dans le contenu de la balise sur laquelle elle est appliquée.
 */
@Directive({
  selector: '[loremIpsum]'
})
export class LoremIpsumDirective implements OnChanges {

  /**
   * Nombre de mots maximum peut être passé en paramètre.
   */
  @Input() loremIpsum: number;

  constructor(private el: ElementRef) { }

  public ngOnChanges(changes) {
    this.el.nativeElement.innerHTML = this.generate();
  }

  private generate() {
    let output = '';
    if (!this.loremIpsum ) {
      return LOREM_IPSUM;
    }
    // si un param est fourni, on redécoupe et on limite.
    const latinWords = LOREM_IPSUM.split(' ');
    latinWords.forEach((word, index) => {
      if (index < this.loremIpsum - 1) {
        output += ` ${word}`;
      }
    });
    // on prends des mots au pif ensuite
    if (this.loremIpsum > latinWords.length) {
      for (let i = latinWords.length; i < this.loremIpsum - 1; i++) {
        const randIndex = Math.floor(Math.random() * latinWords.length);
        output += latinWords[randIndex] + ' ';
      }
    }
    return output;
  }
}
