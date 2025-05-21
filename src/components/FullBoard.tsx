import Fretboard from "@components/Fretboard";
import notes from "@data/notes";
import keysData from "@data/keys";

interface KeyData {
  pentatonic: string[];
  full: string[];
  positionStarts: number[];
  progressions: { chords: string[]; description: string }[];
}

interface Keys {
  [key: string]: KeyData;
}

interface Marker {
  string: number;
  fret: number;
}

interface FullBoardProps {
  selectedKey: string;
  width?: number;
}

const keys: Keys = keysData;

export default function FullBoard({
  selectedKey,
  width = 1000,
}: FullBoardProps) {
  const markers: Marker[] = notes.reduce((a: Marker[], c, i) => {
    c.forEach((note: string, j: number) => {
      if (!j) return;
      if (!keys[selectedKey].pentatonic.includes(note)) return;
      a.push({ string: i, fret: j });
    });
    return a;
  }, [] as Marker[]);
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
