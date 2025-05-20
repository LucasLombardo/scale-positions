import positions from "../../data/positions";
import keys from "../../data/keys";
import FullBoard from "../FullBoard";
import { useSettings } from "../../SettingsContext";
import { useScreenDimensions } from "../../hooks";

export default function Landscape() {
  const { sortPositions, key, keyType } = useSettings();
  const [width] = useScreenDimensions();

  let sortedPositions = positions.toSorted((a, b) => a[keyType] - b[keyType]).map((p, i) => ({ ...p, start: keys[key].positionStarts[i] }));
  if (sortPositions === "location") sortedPositions = sortedPositions.toSorted((a, b) => a.start - b.start)

  return (
    <div className="flex flex-col justify-evenly pt-16 pb-8 absolute top-0 left-0 w-full h-full">
      <div className="w-full grid grid-cols-5 gap-3 pl-6 pr-4 place-items-center text-sm">
        {keys[key].progressions.map((p) => (
          <div key={p.description} className="w-full h-full">
            <strong className="text-center block">{p.description}</strong>
            <div className="text-center block">{p.chords.join(", ")}</div>
          </div>
        ))}
      </div>
      <FullBoard selectedKey={key} width={width * 0.97} />
    </div>
  )
}
