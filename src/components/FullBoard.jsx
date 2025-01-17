import Fretboard from "./Fretboard";
import notes from "../data/notes";
import keys from "../data/keys";

export default function FullBoard({ selectedKey, width = 1000 }) {
  const markers = notes.reduce((a, c, i) => {
    c.forEach((note, j) => {
      if (!j) return;
      if (!keys[selectedKey].pentatonic.includes(note)) return;
      a.push({ string: i, fret: j });
    });
    return a;
  }, []);
  return (
    <Fretboard
      markers={markers}
      startingFret={1}
      keyNote={selectedKey.replace("m", "")}
      fretCount={18}
      width={1100}
      height={200}
      boldedNotes={keys[selectedKey].pentatonic}
      className="full mt-4 mx-auto"
      style={{ width }}
    />
  );
}
