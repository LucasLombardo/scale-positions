import positions from "../../data/positions";
import keys from "../../data/keys";
import ScalePosition from "../ScalePosition";
import { useSettings } from "../../SettingsContext";
import { useScreenDimensions } from "../../hooks";

interface KeyData {
  pentatonic: string[];
  full: string[];
  positionStarts: number[];
  progressions: { chords: string[]; description: string }[];
}
interface Keys {
  [key: string]: KeyData;
}

export default function Portrait() {
  const { sortPositions, key, keyType } = useSettings();
  const [width] = useScreenDimensions();

  let sortedPositions = positions
    .slice()
    .sort(
      (a, b) =>
        (a[keyType as keyof typeof a] as number) -
        (b[keyType as keyof typeof b] as number),
    )
    .map((p, i) => ({ ...p, start: (keys as Keys)[key].positionStarts[i] }));
  if (sortPositions === "location")
    sortedPositions = sortedPositions.slice().sort((a, b) => a.start - b.start);

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
            {(keys as Keys)[key].progressions.slice(0, 6).map((p, i, arr) => (
              <tr
                key={p.description}
                className={
                  i !== arr.length - 1 ? "border-b border-gray-400" : ""
                }
              >
                <td className="px-[0.7rem] py-1 border-r border-gray-400 align-middle text-center">
                  <strong>{p.description}</strong>
                </td>
                <td className="px-[0.7rem] py-1 align-middle text-center">
                  {p.chords.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
