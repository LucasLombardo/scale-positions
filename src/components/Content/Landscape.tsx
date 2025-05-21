import positions from "@data/positions";
import keys from "@data/keys";
import FullBoard from "@components/FullBoard";
import { useSettings } from "../../SettingsContext";
import { useScreenDimensions } from "@hooks/useDimensions";

interface KeyData {
  pentatonic: string[];
  full: string[];
  positionStarts: number[];
  progressions: { chords: string[]; description: string }[];
}
interface Keys {
  [key: string]: KeyData;
}

export default function Landscape() {
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
    <div className="flex flex-col justify-evenly pt-16 pb-8 absolute top-0 left-0 w-full h-full">
      <div className="w-full grid grid-cols-5 gap-3 pl-6 pr-4 place-items-center text-sm">
        {(keys as Keys)[key].progressions.map((p) => (
          <div key={p.description} className="w-full h-full">
            <strong className="text-center block">{p.description}</strong>
            <div className="text-center block">{p.chords.join(", ")}</div>
          </div>
        ))}
      </div>
      <FullBoard selectedKey={key} width={width * 0.97} />
    </div>
  );
}
