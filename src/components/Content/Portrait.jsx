import positions from "../../data/positions";
import keys from "../../data/keys";
import ScalePosition from "../ScalePosition";
import { useSettings } from "../../SettingsContext";
import { useScreenDimensions } from "../../hooks";

export default function Portrait() {
  const { rootNote, type, sortPositions, accidental } = useSettings();
  const [width] = useScreenDimensions();
  const accidentalSymbol = accidental === "sharp" ? "#" : "";
  const key = rootNote + accidentalSymbol + (type === "major pentatonic" ? "" : "m");
  const keyType = type === "major pentatonic" ? "major" : "minor";

  let sortedPositions = positions.toSorted((a, b) => a[keyType] - b[keyType]).map((p, i) => ({ ...p, start: keys[key].positionStarts[i] }));
  if (sortPositions === "location") sortedPositions = sortedPositions.toSorted((a, b) => a.start - b.start)

  return (
    <div className="grid grid-cols-2 gap-1 place-items-center mt-2 text-sm">
      {sortedPositions.map((position, i) => (
        <ScalePosition
          key={i}
          selectedKey={key}
          position={position}
          width={width / 2.2}
        />
      ))}
    </div>
  );
}
