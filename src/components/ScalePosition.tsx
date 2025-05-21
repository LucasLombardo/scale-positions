import Fretboard from "./Fretboard";
import keysData from "../data/keys";

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

interface ScalePositionProps {
  selectedKey: string;
  keyType: string;
  position: { markers: Marker[]; [key: string]: any };
  width?: number;
}

const keys: Keys = keysData;

export default function ScalePosition({
  selectedKey,
  keyType,
  position,
  width = 220,
}: ScalePositionProps) {
  const positionNumber = position[keyType.toLowerCase()];
  const formattedKeyType = keyType[0].toUpperCase() + keyType.slice(1);
  return (
    <div>
      <h2 className="font-bold text-center text-gray-800">
        {formattedKeyType} Position {positionNumber}
      </h2>
      <p className="text-center text-xs">
        {["E", "D", "C", "A", "G"][positionNumber - 1]} Shape
      </p>
      <Fretboard
        style={{ width: width + "px" }}
        keyNote={selectedKey.replace("m", "")}
        markers={position.markers}
        startingFret={keys[selectedKey].positionStarts[positionNumber - 1]}
        boldedNotes={keys[selectedKey].pentatonic}
      />
    </div>
  );
}
