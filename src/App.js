import Fretboard from "./components/Fretboard";
import positions from "./data/positions";
import notes from "./data/notes";
import keys from "./data/keys";
import { useState } from "react";
import { Radios } from "./components/Radios";

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
  console.log(sortedPositions)

  return (
    <div className="App">
      <div>
        <Radios
          options={Object.keys(keys)}
          setSelected={setKey}
          selected={key}
        />
        <Fretboard
          markers={markers}
          startingFret={1}
          fretCount={18}
          width={1100}
          height={200}
          className="full"
        />
        {sortedPositions.map((position, i) => (
          <Fretboard
            key={i}
            markers={position.markers}
            startingFret={keys[key].positionStarts[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
