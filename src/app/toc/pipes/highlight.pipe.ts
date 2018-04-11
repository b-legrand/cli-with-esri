import { Pipe, PipeTransform } from "@angular/core";

export function cleanupRegexChars(input: string): string {
  return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

export function normalize(input: string): string {
  const accents =
    "ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
  const accentsOut =
    "AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  return input
    .split("")
    .map((letter, index) => {
      const accentIndex = accents.indexOf(letter);
      return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
    })
    .join("");
}
/**
 * Transformation permettant de mettre en gras un texte.
 *
 * Recherche insensible à la casse et aux accents.
 *
 * ## Usage:
 *     <input type="text" [(ngModel)]="filter">
 *     <div [innerHTML]="myAwesomeText  | highlight : filter"></div>
 *
 */
@Pipe({ name: "highlight" })
export class HighlightPipe implements PipeTransform {
  public transform(text: string, search: string): string {
    // si rien a filtrer on quitte
    if (!search || !search.length) {
      return text;
    }
    // enlève les caractères regex de la chaine recherchée
    const pattern = cleanupRegexChars(search);

    const regex = new RegExp(pattern, "gi");
    // remplace si on a trouvé le texte.
    if (text.match(regex)) {
      return text.replace(regex, match => `<b>${match}</b>`);
    } else {
      // relance une recherche sans accents.
      return this.normalizedSearch(text, pattern);
    }
  }

  private normalizedSearch(text: string, search: string): string {
    // texte et termes recherchés sans accents.
    const cleanText = normalize(text);
    const cleanPattern = normalize(search);

    const regex = new RegExp(cleanPattern, "gi");
    if (cleanText.match(regex)) {
      // on prend les index dans la chaine sans accents.
      const startIndex = cleanText.indexOf(cleanText.match(regex)[0]);
      const endIndex = startIndex + cleanPattern.length;

      // on mets en valeur dans la chaine avec accent
      return `${text.slice(0, startIndex)}<b>${text.slice(
        startIndex,
        endIndex,
      )}</b>${text.slice(endIndex, text.length)}`;
    }
    return text;
  }
}
