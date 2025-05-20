import positions from "../../data/positions";
import keys from "../../data/keys";
import ScalePosition from "../ScalePosition";
import { useSettings } from "../../SettingsContext";
import { useScreenDimensions } from "../../hooks";

export default function Portrait() {
  const { sortPositions, key, keyType } = useSettings();
  const [width] = useScreenDimensions();

  let sortedPositions = positions.toSorted((a, b) => a[keyType] - b[keyType]).map((p, i) => ({ ...p, start: keys[key].positionStarts[i] }));
  if (sortPositions === "location") sortedPositions = sortedPositions.toSorted((a, b) => a.start - b.start)

  return (
    <div className="grid grid-cols-2 gap-2 place-items-center mt-2 text-sm">
      {sortedPositions.map((position, i) => (
        <ScalePosition
          key={i}
          selectedKey={key}
          keyType={keyType}
          position={position}
          width={width / 2.2}
        />
      ))}
    </div>
  );
}
