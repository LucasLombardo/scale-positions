import Fretboard from "./Fretboard";
import keys from "../data/keys";

export default function ScalePosition({
  selectedKey,
  position,
  positionIndex,
}) {
  const keyType = selectedKey.endsWith("m") ? "Minor" : "Major";

  return (
    <div>
      <h2 className="mb-1 font-bold text-center">
        {keyType} Position {positionIndex + 1}
      </h2>
      <Fretboard
        keyNote={selectedKey.replace("m", "")}
        markers={position.markers}
        startingFret={keys[selectedKey].positionStarts[positionIndex]}
      />
    </div>
  );
}
