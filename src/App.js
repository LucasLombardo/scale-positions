import positions from "./data/positions";
import keys from "./data/keys";
import { useEffect, useState } from "react";
import { Radios } from "./components/Radios";
import Progressions from "./components/Progressions";
import Degrees from "./components/Degrees";
import ScalePosition from "./components/ScalePosition";
import FullBoard from "./components/FullBoard";

function App() {
  const [key, setKey] = useState("C");
  const [sortLR, setSortLR] = useState(true);
  const [sortedPositions, setSortedPositions] = useState([]);
  const keyType = key.endsWith("m") ? "minor" : "major";

  useEffect(() => {
    let sortedByNumber = positions
      .toSorted((a, b) => a[keyType] - b[keyType])
      .map((p, i) => ({ ...p, start: keys[key].positionStarts[i] }));
    if (sortLR)
      sortedByNumber = sortedByNumber.toSorted((a, b) => a.start - b.start);
    setSortedPositions(sortedByNumber);
  }, [key, sortLR]);

  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <Radios options={Object.keys(keys)} setSelected={setKey} selected={key} />
      <div className="w-fit mx-auto">
        <Degrees degrees={keys[key].degrees} />
        <Progressions progressions={keys[key].progressions} />

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
    </div>
  );
}

export default App;
