const degrees = {
  A: {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
  },
  Am: {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
  },
  "A#": {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["A#", "Cm", "Dm", "D#", "F", "Gm", "Adim"],
  },
  "A#m": {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["A#m", "B#dim", "C#", "D#m", "E#m", "F#", "G#"],
  },
  B: {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
  },
  Bm: {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"],
  },
  C: {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
  },
  Cm: {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"],
  },
  "C#": {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"],
  },
  "C#m": {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["C#m", "D#dim", "E", "F#m", "G#m", "A", "B"],
  },
  D: {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
  },
  Dm: {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["Dm", "Edim", "F", "Gm", "Am", "Bb", "C"],
  },
  "D#": {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["D#", "Fm", "Gm", "G#", "A#", "Cm", "Ddim"],
  },
  "D#m": {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["D#m", "F#dim", "G#", "A#m", "Bm", "C#", "E"],
  },
  E: {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
  },
  Em: {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
  },
  F: {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
  },
  Fm: {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["Fm", "Gdim", "Ab", "Bbm", "Cm", "Db", "Eb"],
  },
  "F#": {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"],
  },
  "F#m": {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["F#m", "G#dim", "A", "Bm", "C#m", "D", "E"],
  },
  G: {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
  },
  Gm: {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["Gm", "Adim", "Bb", "Cm", "Dm", "Eb", "F"],
  },
  "G#": {
    numerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    chords: ["G#", "A#m", "B#m", "C#", "D#", "E#m", "Gdim"],
  },
  "G#m": {
    numerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
    chords: ["G#m", "A#dim", "B", "C#m", "D#m", "E", "F#"],
  },
};

export type DegreesType = typeof degrees;

export default degrees;
