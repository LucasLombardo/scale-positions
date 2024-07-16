import positions from "./data/positions";
import keys from "./data/keys";
import { useEffect, useState } from "react";
import Radios from "./components/Radios";
import Select from "./components/Select";
import Progressions from "./components/Progressions";
import Degrees from "./components/Degrees";
import ScalePosition from "./components/ScalePosition";
import FullBoard from "./components/FullBoard";
import { useScreenWidth } from "./hooks";

function App() {
  const [key, setKey] = useState("C");
  const [sortLR, setSortLR] = useState(true);
  const [sortedPositions, setSortedPositions] = useState([]);
  const keyType = key.endsWith("m") ? "minor" : "major";

  const width = useScreenWidth();

  useEffect(() => {
    let sortedByNumber = positions
      .toSorted((a, b) => a[keyType] - b[keyType])
      .map((p, i) => ({ ...p, start: keys[key].positionStarts[i] }));
    if (sortLR)
      sortedByNumber = sortedByNumber.toSorted((a, b) => a.start - b.start);
    setSortedPositions(sortedByNumber);
  }, [key, sortLR, keyType]);

  const isDesktop = width > 1024;

  return (
    <div className="container max-w-screen-xl mx-auto px-2">
      {isDesktop ? (
        <>
          <Radios
            options={Object.keys(keys)}
            setSelected={setKey}
            selected={key}
          />
          <div className="w-fit mx-auto">
            <Degrees
              className="mt-2 text-sm w-full"
              degrees={keys[key].degrees}
            />
            <Progressions
              className="mt-2 w-full"
              progressions={keys[key].progressions}
            />

            <div className="grid grid-cols-3 gap-2 place-items-center mt-2">
              {sortedPositions.map((position, i) => (
                <ScalePosition key={i} selectedKey={key} position={position} />
              ))}
              <button
                className="border-2 border-gray-200 p-2 text-center"
                onClick={() => setSortLR(!sortLR)}
              >
                {sortLR ? "Sort Position #" : "Sort L-R"}
              </button>
            </div>
            <FullBoard selectedKey={key} />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-end justify-between">
            <Degrees
              className="text-[8px] mr-2 mt-2 w-full"
              isAbbreviated
              degrees={keys[key].degrees}
            />
            <Select
              options={Object.keys(keys)}
              setSelected={setKey}
              selected={key}
            />
          </div>
          <Progressions
            className="text-[8px] mt-1"
            isDesktop={isDesktop}
            progressions={keys[key].progressions}
          />
          <div className="grid grid-cols-2 gap-1 place-items-center mt-2 text-sm">
            {sortedPositions.map((position, i) => (
              <ScalePosition
                key={i}
                selectedKey={key}
                position={position}
                width={width / 2.2}
              />
            ))}
            <button
              className="border-2 border-gray-200 p-2 text-center"
              onClick={() => setSortLR(!sortLR)}
            >
              {sortLR ? "Sort Position #" : "Sort L-R"}
            </button>
          </div>
          <FullBoard selectedKey={key} width={width * 0.97} />
        </>
      )}
    </div>
  );
}

export default App;
