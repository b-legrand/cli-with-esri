import {Directive, Input, ElementRef, OnChanges} from '@angular/core';

export const LOREM_IPSUM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  ' minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ',
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in',
  'culpa qui officia deserunt mollit anim id est laborum.'
].join('');

@Directive({
  selector: '[loremIpsum]'
})
export class LoremIpsumDirective implements OnChanges{

  /** Nombre de mots. */
  @Input() words: number;

  constructor(private el: ElementRef) { }

  public ngOnChanges(changes) {
    this.el.nativeElement.innerHTML = this.generate();
  }

  private generate() {
    let output = '';
    if (!this.words ) {
      return LOREM_IPSUM;
    }
    const latinWords = LOREM_IPSUM.split(' ');
    for (let i = 0; i < this.words - 1; i++) {
      // const randIndex = Math.floor(Math.random() * latinWords.length);
      output += latinWords[i] + ' ';
    }
    return output;
  }
}
