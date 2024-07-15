export default {
  A: {
    pentatonic: ["A", "B", "C#", "E", "F#"],
    full: ["A", "B", "C#", "D", "E", "F#", "G#"],
    positionStarts: [4, 6, 9, 11, 2],
    progressions: [
      { chords: ["A", "D", "E", "A"], description: "I-IV-V-I" },
      { chords: ["A", "F#m", "D", "E"], description: "I-vi-IV-V" },
      { chords: ["A", "E", "F#m", "D"], description: "I-V-vi-IV" },
      { chords: ["A", "Bm", "E", "A"], description: "I-ii-V-I" },
      { chords: ["A", "C#m", "F#m", "D"], description: "I-iii-vi-IV" },
      { chords: ["A", "D", "A", "E"], description: "I-IV-I-V" },
      { chords: ["A", "E", "A", "D"], description: "I-V-I-IV" },
      { chords: ["A", "D", "Bm", "E"], description: "I-IV-ii-V" },
      { chords: ["A", "G", "D", "E"], description: "I-bVII-IV-V" },
      { chords: ["A", "E", "D", "A"], description: "I-V-IV-I" },
    ],
  },
  Am: {
    pentatonic: ["A", "C", "D", "E", "G"],
    full: ["A", "B", "C", "D", "E", "F", "G"],
    positionStarts: [5, 7, 9, 12, 2],
    progressions: [
      { chords: ["Am", "F", "C", "G"], description: "i-VI-III-VII" },
      { chords: ["Am", "Dm", "E"], description: "i-iv-V" },
      { chords: ["Am", "F", "G"], description: "i-VI-VII" },
      { chords: ["Am", "G", "F", "E"], description: "i-VII-VI-V" },
      { chords: ["Am", "C", "G", "F"], description: "i-III-VII-VI" },
      { chords: ["Am", "G", "F"], description: "i-VII-VI" },
      { chords: ["Am", "E", "F"], description: "i-V-VI" },
      { chords: ["Am", "Dm", "G", "E"], description: "i-iv-VII-V" },
      { chords: ["Am", "G", "C", "F"], description: "i-VII-III-VI" },
      { chords: ["Am", "Dm", "F", "E"], description: "i-iv-VI-V" },
    ],
  },
  "A#": {
    pentatonic: ["A#", "C#", "D#", "F", "G"],
    full: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
    positionStarts: [5, 7, 10, 0, 3],
    progressions: [
      { chords: ["A#", "D#", "F", "A#"], description: "I-IV-V-I" },
      { chords: ["A#", "Gm", "D#", "F"], description: "I-vi-IV-V" },
      { chords: ["A#", "F", "Gm", "D#"], description: "I-V-vi-IV" },
      { chords: ["A#", "Cm", "F", "A#"], description: "I-ii-V-I" },
      { chords: ["A#", "Dm", "Gm", "D#"], description: "I-iii-vi-IV" },
      { chords: ["A#", "D#", "A#", "F"], description: "I-IV-I-V" },
      { chords: ["A#", "F", "A#", "D#"], description: "I-V-I-IV" },
      { chords: ["A#", "D#", "Cm", "F"], description: "I-IV-ii-V" },
      { chords: ["A#", "G#", "D#", "F"], description: "I-bVII-IV-V" },
      { chords: ["A#", "F", "D#", "A#"], description: "I-V-IV-I" },
    ],
  },
  "A#m": {
    pentatonic: ["A#", "C#", "D#", "F", "G#"],
    full: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
    positionStarts: [6, 8, 10, 1, 3],
    progressions: [
      { chords: ["A#m", "F#", "C#", "G#"], description: "i-VI-III-VII" },
      { chords: ["A#m", "D#m", "F"], description: "i-iv-V" },
      { chords: ["A#m", "F#", "G#"], description: "i-VI-VII" },
      { chords: ["A#m", "G#", "F#", "F"], description: "i-VII-VI-V" },
      { chords: ["A#m", "C#", "G#", "F#"], description: "i-III-VII-VI" },
      { chords: ["A#m", "G#", "F#"], description: "i-VII-VI" },
      { chords: ["A#m", "F", "F#"], description: "i-V-VI" },
      { chords: ["A#m", "D#m", "G#", "F"], description: "i-iv-VII-V" },
      { chords: ["A#m", "G#", "C#", "F#"], description: "i-VII-III-VI" },
      { chords: ["A#m", "D#m", "F#", "F"], description: "i-iv-VI-V" },
    ],
  },
  B: {
    pentatonic: ["B", "C#", "D#", "F#", "G#"],
    full: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    positionStarts: [6, 8, 11, 1, 4],
    progressions: [
      { chords: ["B", "E", "F#", "B"], description: "I-IV-V-I" },
      { chords: ["B", "G#m", "E", "F#"], description: "I-vi-IV-V" },
      { chords: ["B", "F#", "G#m", "E"], description: "I-V-vi-IV" },
      { chords: ["B", "C#m", "F#", "B"], description: "I-ii-V-I" },
      { chords: ["B", "D#m", "G#m", "E"], description: "I-iii-vi-IV" },
      { chords: ["B", "E", "B", "F#"], description: "I-IV-I-V" },
      { chords: ["B", "F#", "B", "E"], description: "I-V-I-IV" },
      { chords: ["B", "E", "C#m", "F#"], description: "I-IV-ii-V" },
      { chords: ["B", "A", "E", "F#"], description: "I-bVII-IV-V" },
      { chords: ["B", "F#", "E", "B"], description: "I-V-IV-I" },
    ],
  },
  Bm: {
    pentatonic: ["B", "D", "E", "F#", "A"],
    full: ["B", "C#", "D", "E", "F#", "G", "A"],
    positionStarts: [7, 9, 11, 2, 4],
    progressions: [
      { chords: ["Bm", "G", "D", "A"], description: "i-VI-III-VII" },
      { chords: ["Bm", "Em", "F#"], description: "i-iv-V" },
      { chords: ["Bm", "G", "A"], description: "i-VI-VII" },
      { chords: ["Bm", "A", "G", "F#"], description: "i-VII-VI-V" },
      { chords: ["Bm", "D", "A", "G"], description: "i-III-VII-VI" },
      { chords: ["Bm", "A", "G"], description: "i-VII-VI" },
      { chords: ["Bm", "F#", "G"], description: "i-V-VI" },
      { chords: ["Bm", "Em", "A", "F#"], description: "i-iv-VII-V" },
      { chords: ["Bm", "A", "D", "G"], description: "i-VII-III-VI" },
      { chords: ["Bm", "Em", "G", "F#"], description: "i-iv-VI-V" },
    ],
  },
  C: {
    pentatonic: ["C", "D", "E", "G", "A"],
    full: ["C", "D", "E", "F", "G", "A", "B"],
    positionStarts: [7, 9, 12, 2, 5],
    progressions: [
      { chords: ["C", "F", "G", "C"], description: "I-IV-V-I" },
      { chords: ["C", "Am", "F", "G"], description: "I-vi-IV-V" },
      { chords: ["C", "G", "Am", "F"], description: "I-V-vi-IV" },
      { chords: ["C", "Dm", "G", "C"], description: "I-ii-V-I" },
      { chords: ["C", "Em", "Am", "F"], description: "I-iii-vi-IV" },
      { chords: ["C", "F", "C", "G"], description: "I-IV-I-V" },
      { chords: ["C", "G", "C", "F"], description: "I-V-I-IV" },
      { chords: ["C", "F", "Dm", "G"], description: "I-IV-ii-V" },
      { chords: ["C", "Bb", "F", "G"], description: "I-bVII-IV-V" },
      { chords: ["C", "G", "F", "C"], description: "I-V-IV-I" },
    ],
  },
  Cm: {
    pentatonic: ["C", "D#", "F", "G", "A#"],
    full: ["C", "D", "D#", "F", "G", "A", "A#"],
    positionStarts: [8, 10, 12, 3, 5],
    progressions: [
      { chords: ["Cm", "G#", "D#", "A#"], description: "i-VI-III-VII" },
      { chords: ["Cm", "Fm", "G"], description: "i-iv-V" },
      { chords: ["Cm", "G#", "A#"], description: "i-VI-VII" },
      { chords: ["Cm", "A#", "G#", "G"], description: "i-VII-VI-V" },
      { chords: ["Cm", "D#", "A#", "G#"], description: "i-III-VII-VI" },
      { chords: ["Cm", "A#", "G#"], description: "i-VII-VI" },
      { chords: ["Cm", "G", "G#"], description: "i-V-VI" },
      { chords: ["Cm", "Fm", "A#", "G"], description: "i-iv-VII-V" },
      { chords: ["Cm", "A#", "D#", "G#"], description: "i-VII-III-VI" },
      { chords: ["Cm", "Fm", "G#", "G"], description: "i-iv-VI-V" },
    ],
  },
  "C#": {
    pentatonic: ["C#", "D#", "F", "G#", "A#"],
    full: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    positionStarts: [8, 10, 1, 3, 6],
    progressions: [
      { chords: ["C#", "F#", "G#", "C#"], description: "I-IV-V-I" },
      { chords: ["C#", "A#m", "F#", "G#"], description: "I-vi-IV-V" },
      { chords: ["C#", "G#", "A#m", "F#"], description: "I-V-vi-IV" },
      { chords: ["C#", "D#m", "G#", "C#"], description: "I-ii-V-I" },
      { chords: ["C#", "Fm", "A#m", "F#"], description: "I-iii-vi-IV" },
      { chords: ["C#", "F#", "C#", "G#"], description: "I-IV-I-V" },
      { chords: ["C#", "G#", "C#", "F#"], description: "I-V-I-IV" },
      { chords: ["C#", "F#", "D#m", "G#"], description: "I-IV-ii-V" },
      { chords: ["C#", "B", "F#", "G#"], description: "I-bVII-IV-V" },
      { chords: ["C#", "G#", "F#", "C#"], description: "I-V-IV-I" },
    ],
  },
  "C#m": {
    pentatonic: ["C#", "E", "F#", "G#", "B"],
    full: ["C#", "D#", "E", "F#", "G#", "A", "B"],
    positionStarts: [9, 11, 1, 4, 6],
    progressions: [
      { chords: ["C#m", "A", "E", "B"], description: "i-VI-III-VII" },
      { chords: ["C#m", "F#m", "G#"], description: "i-iv-V" },
      { chords: ["C#m", "A", "B"], description: "i-VI-VII" },
      { chords: ["C#m", "B", "A", "G#"], description: "i-VII-VI-V" },
      { chords: ["C#m", "E", "B", "A"], description: "i-III-VII-VI" },
      { chords: ["C#m", "B", "A"], description: "i-VII-VI" },
      { chords: ["C#m", "G#", "A"], description: "i-V-VI" },
      { chords: ["C#m", "F#m", "B", "G#"], description: "i-iv-VII-V" },
      { chords: ["C#m", "B", "E", "A"], description: "i-VII-III-VI" },
      { chords: ["C#m", "F#m", "A", "G#"], description: "i-iv-VI-V" },
    ],
  },
  D: {
    pentatonic: ["D", "E", "F#", "A", "B"],
    full: ["D", "E", "F#", "G", "A", "B", "C#"],
    positionStarts: [9, 11, 2, 4, 7],
    progressions: [
      { chords: ["D", "G", "A", "D"], description: "I-IV-V-I" },
      { chords: ["D", "Bm", "G", "A"], description: "I-vi-IV-V" },
      { chords: ["D", "A", "Bm", "G"], description: "I-V-vi-IV" },
      { chords: ["D", "Em", "A", "D"], description: "I-ii-V-I" },
      { chords: ["D", "F#m", "Bm", "G"], description: "I-iii-vi-IV" },
      { chords: ["D", "G", "D", "A"], description: "I-IV-I-V" },
      { chords: ["D", "A", "D", "G"], description: "I-V-I-IV" },
      { chords: ["D", "G", "Em", "A"], description: "I-IV-ii-V" },
      { chords: ["D", "C", "G", "A"], description: "I-bVII-IV-V" },
      { chords: ["D", "A", "G", "D"], description: "I-V-IV-I" },
    ],
  },
  Dm: {
    pentatonic: ["D", "F", "G", "A", "C"],
    full: ["D", "E", "F", "G", "A", "A#", "C"],
    positionStarts: [10, 12, 2, 5, 7],
    progressions: [
      { chords: ["Dm", "Bb", "F", "C"], description: "i-VI-III-VII" },
      { chords: ["Dm", "Gm", "A"], description: "i-iv-V" },
      { chords: ["Dm", "Bb", "C"], description: "i-VI-VII" },
      { chords: ["Dm", "C", "Bb", "A"], description: "i-VII-VI-V" },
      { chords: ["Dm", "F", "C", "Bb"], description: "i-III-VII-VI" },
      { chords: ["Dm", "C", "Bb"], description: "i-VII-VI" },
      { chords: ["Dm", "A", "Bb"], description: "i-V-VI" },
      { chords: ["Dm", "Gm", "C", "A"], description: "i-iv-VII-V" },
      { chords: ["Dm", "C", "F", "Bb"], description: "i-VII-III-VI" },
      { chords: ["Dm", "Gm", "Bb", "A"], description: "i-iv-VI-V" },
    ],
  },
  "D#": {
    pentatonic: ["D#", "F", "G", "A#", "C"],
    full: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
    positionStarts: [10, 12, 3, 5, 8],
    progressions: [
      { chords: ["D#", "G#", "A#", "D#"], description: "I-IV-V-I" },
      { chords: ["D#", "Cm", "G#", "A#"], description: "I-vi-IV-V" },
      { chords: ["D#", "A#", "Cm", "G#"], description: "I-V-vi-IV" },
      { chords: ["D#", "Fm", "A#", "D#"], description: "I-ii-V-I" },
      { chords: ["D#", "Gm", "Cm", "G#"], description: "I-iii-vi-IV" },
      { chords: ["D#", "G#", "D#", "A#"], description: "I-IV-I-V" },
      { chords: ["D#", "A#", "D#", "G#"], description: "I-V-I-IV" },
      { chords: ["D#", "G#", "Fm", "A#"], description: "I-IV-ii-V" },
      { chords: ["D#", "C#", "G#", "A#"], description: "I-bVII-IV-V" },
      { chords: ["D#", "A#", "G#", "D#"], description: "I-V-IV-I" },
    ],
  },
  "D#m": {
    pentatonic: ["D#", "F#", "G#", "A#", "C#"],
    full: ["D#", "F", "F#", "G#", "A#", "B", "C#"],
    positionStarts: [11, 1, 3, 6, 8],
    progressions: [
      { chords: ["D#m", "B", "F#", "C#"], description: "i-VI-III-VII" },
      { chords: ["D#m", "G#m", "A#"], description: "i-iv-V" },
      { chords: ["D#m", "B", "C#"], description: "i-VI-VII" },
      { chords: ["D#m", "C#", "B", "A#"], description: "i-VII-VI-V" },
      { chords: ["D#m", "F#", "C#", "B"], description: "i-III-VII-VI" },
      { chords: ["D#m", "C#", "B"], description: "i-VII-VI" },
      { chords: ["D#m", "A#", "B"], description: "i-V-VI" },
      { chords: ["D#m", "G#m", "C#", "A#"], description: "i-iv-VII-V" },
      { chords: ["D#m", "C#", "F#", "B"], description: "i-VII-III-VI" },
      { chords: ["D#m", "G#m", "B", "A#"], description: "i-iv-VI-V" },
    ],
  },
  E: {
    pentatonic: ["E", "F#", "G#", "B", "C#"],
    full: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    positionStarts: [11, 1, 4, 6, 9],
    progressions: [
      { chords: ["E", "A", "B", "E"], description: "I-IV-V-I" },
      { chords: ["E", "C#m", "A", "B"], description: "I-vi-IV-V" },
      { chords: ["E", "B", "C#m", "A"], description: "I-V-vi-IV" },
      { chords: ["E", "F#m", "B", "E"], description: "I-ii-V-I" },
      { chords: ["E", "G#m", "C#m", "A"], description: "I-iii-vi-IV" },
      { chords: ["E", "A", "E", "B"], description: "I-IV-I-V" },
      { chords: ["E", "B", "E", "A"], description: "I-V-I-IV" },
      { chords: ["E", "A", "F#m", "B"], description: "I-IV-ii-V" },
      { chords: ["E", "D", "A", "B"], description: "I-bVII-IV-V" },
      { chords: ["E", "B", "A", "E"], description: "I-V-IV-I" },
    ],
  },
  Em: {
    pentatonic: ["E", "G", "A", "B", "D"],
    full: ["E", "F#", "G", "A", "B", "C", "D"],
    positionStarts: [12, 2, 4, 7, 9],
    progressions: [
      { chords: ["Em", "C", "G", "D"], description: "i-VI-III-VII" },
      { chords: ["Em", "Am", "B"], description: "i-iv-V" },
      { chords: ["Em", "C", "D"], description: "i-VI-VII" },
      { chords: ["Em", "D", "C", "B"], description: "i-VII-VI-V" },
      { chords: ["Em", "G", "D", "C"], description: "i-III-VII-VI" },
      { chords: ["Em", "D", "C"], description: "i-VII-VI" },
      { chords: ["Em", "B", "C"], description: "i-V-VI" },
      { chords: ["Em", "Am", "D", "B"], description: "i-iv-VII-V" },
      { chords: ["Em", "D", "G", "C"], description: "i-VII-III-VI" },
      { chords: ["Em", "Am", "C", "B"], description: "i-iv-VI-V" },
    ],
  },
  F: {
    pentatonic: ["F", "G", "A", "C", "D"],
    full: ["F", "G", "A", "A#", "C", "D", "E"],
    positionStarts: [12, 2, 5, 7, 10],
    progressions: [
      { chords: ["F", "A#", "C", "F"], description: "I-IV-V-I" },
      { chords: ["F", "Dm", "A#", "C"], description: "I-vi-IV-V" },
      { chords: ["F", "C", "Dm", "A#"], description: "I-V-vi-IV" },
      { chords: ["F", "Gm", "C", "F"], description: "I-ii-V-I" },
      { chords: ["F", "Am", "Dm", "A#"], description: "I-iii-vi-IV" },
      { chords: ["F", "A#", "F", "C"], description: "I-IV-I-V" },
      { chords: ["F", "C", "F", "A#"], description: "I-V-I-IV" },
      { chords: ["F", "A#", "Gm", "C"], description: "I-IV-ii-V" },
      { chords: ["F", "D#", "A#", "C"], description: "I-bVII-IV-V" },
      { chords: ["F", "C", "A#", "F"], description: "I-V-IV-I" },
    ],
  },
  Fm: {
    pentatonic: ["F", "G#", "A#", "C", "D#"],
    full: ["F", "G", "G#", "A#", "C", "D", "D#"],
    positionStarts: [1, 3, 5, 8, 10],
    progressions: [
      { chords: ["Fm", "C#", "G#", "D#"], description: "i-VI-III-VII" },
      { chords: ["Fm", "A#m", "C"], description: "i-iv-V" },
      { chords: ["Fm", "C#", "D#"], description: "i-VI-VII" },
      { chords: ["Fm", "D#", "C#", "C"], description: "i-VII-VI-V" },
      { chords: ["Fm", "G#", "D#", "C#"], description: "i-III-VII-VI" },
      { chords: ["Fm", "D#", "C#"], description: "i-VII-VI" },
      { chords: ["Fm", "C", "C#"], description: "i-V-VI" },
      { chords: ["Fm", "A#m", "D#", "C"], description: "i-iv-VII-V" },
      { chords: ["Fm", "D#", "G#", "C#"], description: "i-VII-III-VI" },
      { chords: ["Fm", "A#m", "C#", "C"], description: "i-iv-VI-V" },
    ],
  },
  "F#": {
    pentatonic: ["F#", "G#", "A#", "C#", "D#"],
    full: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    positionStarts: [1, 3, 6, 8, 11],
    progressions: [
      { chords: ["F#", "B", "C#", "F#"], description: "I-IV-V-I" },
      { chords: ["F#", "D#m", "B", "C#"], description: "I-vi-IV-V" },
      { chords: ["F#", "C#", "D#m", "B"], description: "I-V-vi-IV" },
      { chords: ["F#", "G#m", "C#", "F#"], description: "I-ii-V-I" },
      { chords: ["F#", "A#m", "D#m", "B"], description: "I-iii-vi-IV" },
      { chords: ["F#", "B", "F#", "C#"], description: "I-IV-I-V" },
      { chords: ["F#", "C#", "F#", "B"], description: "I-V-I-IV" },
      { chords: ["F#", "B", "G#m", "C#"], description: "I-IV-ii-V" },
      { chords: ["F#", "E", "B", "C#"], description: "I-bVII-IV-V" },
      { chords: ["F#", "C#", "B", "F#"], description: "I-V-IV-I" },
    ],
  },
  "F#m": {
    pentatonic: ["F#", "A", "B", "C#", "E"],
    full: ["F#", "G#", "A", "B", "C#", "D", "E"],
    positionStarts: [2, 4, 6, 9, 11],
    progressions: [
      { chords: ["F#m", "D", "A", "E"], description: "i-VI-III-VII" },
      { chords: ["F#m", "Bm", "C#"], description: "i-iv-V" },
      { chords: ["F#m", "D", "E"], description: "i-VI-VII" },
      { chords: ["F#m", "E", "D", "C#"], description: "i-VII-VI-V" },
      { chords: ["F#m", "A", "E", "D"], description: "i-III-VII-VI" },
      { chords: ["F#m", "E", "D"], description: "i-VII-VI" },
      { chords: ["F#m", "C#", "D"], description: "i-V-VI" },
      { chords: ["F#m", "Bm", "E", "C#"], description: "i-iv-VII-V" },
      { chords: ["F#m", "E", "A", "D"], description: "i-VII-III-VI" },
      { chords: ["F#m", "Bm", "D", "C#"], description: "i-iv-VI-V" },
    ],
  },
  G: {
    pentatonic: ["G", "A", "B", "D", "E"],
    full: ["G", "A", "B", "C", "D", "E", "F#"],
    positionStarts: [2, 4, 7, 9, 12],
    progressions: [
      { chords: ["G", "C", "D", "G"], description: "I-IV-V-I" },
      { chords: ["G", "Em", "C", "D"], description: "I-vi-IV-V" },
      { chords: ["G", "D", "Em", "C"], description: "I-V-vi-IV" },
      { chords: ["G", "Am", "D", "G"], description: "I-ii-V-I" },
      { chords: ["G", "Bm", "Em", "C"], description: "I-iii-vi-IV" },
      { chords: ["G", "C", "G", "D"], description: "I-IV-I-V" },
      { chords: ["G", "D", "G", "C"], description: "I-V-I-IV" },
      { chords: ["G", "C", "Am", "D"], description: "I-IV-ii-V" },
      { chords: ["G", "F", "C", "D"], description: "I-bVII-IV-V" },
      { chords: ["G", "D", "C", "G"], description: "I-V-IV-I" },
    ],
  },
  Gm: {
    pentatonic: ["G", "A#", "C", "D", "F"],
    full: ["G", "A", "A#", "C", "D", "D#", "F"],
    positionStarts: [3, 5, 7, 10, 12],
    progressions: [
      { chords: ["Gm", "D#", "A#", "F"], description: "i-VI-III-VII" },
      { chords: ["Gm", "Cm", "D"], description: "i-iv-V" },
      { chords: ["Gm", "D#", "F"], description: "i-VI-VII" },
      { chords: ["Gm", "F", "D#", "D"], description: "i-VII-VI-V" },
      { chords: ["Gm", "A#", "F", "D#"], description: "i-III-VII-VI" },
      { chords: ["Gm", "F", "D#"], description: "i-VII-VI" },
      { chords: ["Gm", "D", "D#"], description: "i-V-VI" },
      { chords: ["Gm", "Cm", "F", "D"], description: "i-iv-VII-V" },
      { chords: ["Gm", "F", "A#", "D#"], description: "i-VII-III-VI" },
      { chords: ["Gm", "Cm", "D#", "D"], description: "i-iv-VI-V" },
    ],
  },
  "G#": {
    pentatonic: ["G#", "A#", "C", "D#", "F"],
    full: ["G#", "A#", "B#", "C#", "D#", "E#", "G"],
    positionStarts: [3, 5, 8, 10, 1],
    progressions: [
      { chords: ["G#", "C#", "D#", "G#"], description: "I-IV-V-I" },
      { chords: ["G#", "Fm", "C#", "D#"], description: "I-vi-IV-V" },
      { chords: ["G#", "D#", "Fm", "C#"], description: "I-V-vi-IV" },
      { chords: ["G#", "A#m", "D#", "G#"], description: "I-ii-V-I" },
      { chords: ["G#", "Cm", "Fm", "C#"], description: "I-iii-vi-IV" },
      { chords: ["G#", "C#", "G#", "D#"], description: "I-IV-I-V" },
      { chords: ["G#", "D#", "G#", "C#"], description: "I-V-I-IV" },
      { chords: ["G#", "C#", "A#m", "D#"], description: "I-IV-ii-V" },
      { chords: ["G#", "F#", "C#", "D#"], description: "I-bVII-IV-V" },
      { chords: ["G#", "D#", "C#", "G#"], description: "I-V-IV-I" },
    ],
  },
  "G#m": {
    pentatonic: ["G#", "B", "C#", "D#", "F#"],
    full: ["G#", "A#", "B", "C#", "D#", "F", "F#"],
    positionStarts: [4, 6, 8, 11, 1],
    progressions: [
      { chords: ["G#m", "E", "B", "F#"], description: "i-VI-III-VII" },
      { chords: ["G#m", "C#m", "D#"], description: "i-iv-V" },
      { chords: ["G#m", "E", "F#"], description: "i-VI-VII" },
      { chords: ["G#m", "F#", "E", "D#"], description: "i-VII-VI-V" },
      { chords: ["G#m", "B", "F#", "E"], description: "i-III-VII-VI" },
      { chords: ["G#m", "F#", "E"], description: "i-VII-VI" },
      { chords: ["G#m", "D#", "E"], description: "i-V-VI" },
      { chords: ["G#m", "C#m", "F#", "D#"], description: "i-iv-VII-V" },
      { chords: ["G#m", "F#", "B", "E"], description: "i-VII-III-VI" },
      { chords: ["G#m", "C#m", "E", "D#"], description: "i-iv-VI-V" },
    ],
  },
};
