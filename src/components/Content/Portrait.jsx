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
      {/* Position charts */}
      {sortedPositions.map((position, i) => (
        <ScalePosition
          key={i}
          selectedKey={key}
          keyType={keyType}
          position={position}
          width={width / 2.2}
        />
      ))}
      {/* Common Progressions */}
      <div>
        <table className="text-[0.6rem] text-center mr-2">
          <tbody>
            {keys[key].progressions.slice(0, 6).map((p, i, arr) => (
              <tr
                key={p.description}
                className={
                  (i !== arr.length - 1 ? "border-b border-gray-400" : "")
                }
              >
                <td className="px-[0.7rem] py-1 border-r border-gray-400 align-middle text-center"><strong>{p.description}</strong></td>
                <td className="px-[0.7rem] py-1 align-middle text-center">{p.chords.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
