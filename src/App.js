import Fretboard from "./components/Fretboard";
import positions from "./data/positions";
import notes from "./data/notes";
import keys from "./data/keys";
import { useState } from "react";
import { Radios } from "./components/Radios";
import Progressions from "./components/Progressions";

function App() {
  const [key, setKey] = useState("C");

  const markers = notes.reduce((a, c, i) => {
    c.forEach((note, j) => {
      if (!j) return;
      if (!keys[key].pentatonic.includes(note)) return;
      a.push({ string: i, fret: j });
    });
    return a;
  }, []);

  const keyType = key.endsWith("m") ? "minor" : "major";
  const sortedPositions = positions.sort((a, b) => a[keyType] - b[keyType]);

  return (
    <div className="container mx-auto px-4">
      <div>
        <Radios
          options={Object.keys(keys)}
          setSelected={setKey}
          selected={key}
        />
        <Progressions progressions={keys[key].progressions}/>
        <Fretboard
          markers={markers}
          startingFret={1}
          keyNote={key.replace("m", "")}
          fretCount={18}
          width={1100}
          height={200}
          className="full mx-auto mt-6"
        />
        <div className="grid grid-cols-3 gap-2 place-items-center mt-6">
          {sortedPositions.map((position, i) => (
            <Fretboard
              key={i}
              keyNote={key.replace("m", "")}
              markers={position.markers}
              startingFret={keys[key].positionStarts[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
