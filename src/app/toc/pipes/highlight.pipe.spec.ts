import { HighlightPipe } from './highlight.pipe';

describe('HighlightPipe', () => {
  let pipe: HighlightPipe;

  beforeEach(() => {
    pipe = new HighlightPipe();
    expect(pipe).toBeTruthy();
  });

  it('peut être appelé sans filtre', () => {
    expect(pipe.transform('texte', undefined)).toBe('texte');
  });

  it('peut être appelé avec des caractères regex', () => {
    expect(pipe.transform('texte', '\\')).toBe('texte');
  });

  it('met en valeur le texte sélectionné', () => {
    const result = pipe.transform('texte', 'tex');
    expect(result).toBe('<b>tex</b>te');
  });

  it('est insensible à la casse', () => {
    const result = pipe.transform('Texte', 'tex');
    expect(result).toBe('<b>Tex</b>te');
  });

  // evolution pour plus tard
  xit('est insensible aux accents', () => {
    const result = pipe.transform('éééùùù', 'eee');
    expect(result).toBe('<b>ééé</b>ùùù');
  });


});
