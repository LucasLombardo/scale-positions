import Fretboard from "./Fretboard";
import keys from "../data/keys";

export default function ScalePosition({
  selectedKey,
  position,
}) {
  const keyType = selectedKey.endsWith("m") ? "Minor" : "Major";
    const positionNumber = position[keyType.toLowerCase()]
  return (
    <div>
      <h2 className="font-bold text-center">
        {keyType} Position {positionNumber}
      </h2>
      <p className="text-center text-xs">{["E", "D", "C", "A", "G"][positionNumber - 1]} Shape</p>
      <Fretboard
        keyNote={selectedKey.replace("m", "")}
        markers={position.markers}
        startingFret={keys[selectedKey].positionStarts[positionNumber - 1]}
        boldedNotes={keys[selectedKey].pentatonic}
      />
    </div>
  );
}
