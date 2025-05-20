import Fretboard from "./Fretboard";
import keys from "../data/keys";

export default function ScalePosition({ selectedKey, keyType, position, width = 220 }) {
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
