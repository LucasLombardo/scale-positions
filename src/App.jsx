// import positions from "./data/positions";
// import keys from "./data/keys";
import { useEffect, useState } from "react";
// import Radios from "./components/Radios";
// import Select from "./components/Select";
// import Progressions from "./components/Progressions";
// import Degrees from "./components/Degrees";
// import ScalePosition from "./components/ScalePosition";
// import FullBoard from "./components/FullBoard";
// import { useScreenDimensions } from "./hooks";
import { useSettings } from "./SettingsContext";
import Settings from "./components/Settings";

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const {
    rootNote, setRootNote,
    type, setType,
    accidental, setAccidental,
    sortPositions, setSortPositions,
    lockOrientation, setLockOrientation,
    orientation, setOrientation,
  } = useSettings();

  // C major degrees and chords
  const romanNumerals = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
  const chords = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-30 bg-gradient-to-r from-purple-800 via-fuchsia-700 to-pink-700 shadow-lg">
        {/* Left: Table */}
        <table className="mx-auto text-white text-xs font-semibold rounded overflow-hidden shadow border border-white/20">
          <tbody>
            <tr>
              {romanNumerals.map((num) => (
                <td key={num} className="px-2 py-1 text-center">{num}</td>
              ))}
            </tr>
            <tr>
              {chords.map((chord) => (
                <td key={chord} className="px-2 py-1 text-center">{chord}</td>
              ))}
            </tr>
          </tbody>
        </table>
        {/* Right: Settings Icon Button */}
        <button
          className="sm:absolute sm:right-4 p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setSettingsOpen(true)}
          aria-label="Open settings"
        >
          {/* Inline SVG for settings icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Settings Panel (Drawer) */}
      <Settings open={settingsOpen} onClose={() => setSettingsOpen(false)} />

      {/* Main Content (with top padding for bar) */}
      <div className="pt-20">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;


// const [key, setKey] = useState("C");
// const [sortLR, setSortLR] = useState(true);
// const [sortedPositions, setSortedPositions] = useState([]);
// const keyType = key.endsWith("m") ? "minor" : "major";

// const width = useScreenWidth();

// useEffect(() => {
//   let sortedByNumber = positions
//     .toSorted((a, b) => a[keyType] - b[keyType])
//     .map((p, i) => ({ ...p, start: keys[key].positionStarts[i] }));
//   if (sortLR)
//     sortedByNumber = sortedByNumber.toSorted((a, b) => a.start - b.start);
//   setSortedPositions(sortedByNumber);
// }, [key, sortLR, keyType]);

// const isDesktop = width > 1024;


// {isDesktop ? (
//   <>
//     <Radios
//       options={Object.keys(keys)}
//       setSelected={setKey}
//       selected={key}
//     />
//     <div className="w-fit mx-auto">
//       <Degrees
//         className="mt-2 text-sm w-full"
//         degrees={keys[key].degrees}
//       />
//       <Progressions
//         className="mt-2 w-full"
//         progressions={keys[key].progressions}
//       />

//       <div className="grid grid-cols-3 gap-2 place-items-center mt-2">
//         {sortedPositions.map((position, i) => (
//           <ScalePosition key={i} selectedKey={key} position={position} />
//         ))}
//         <button
//           className="border-2 border-gray-200 p-2 text-center"
//           onClick={() => setSortLR(!sortLR)}
//         >
//           {sortLR ? "Sort Position #" : "Sort L-R"}
//         </button>
//       </div>
//       <FullBoard selectedKey={key} />
//     </div>
//   </>
// ) : (
//   <>
//     <div className="flex items-end justify-between">
//       <Degrees
//         className="text-[9px] sm:text-sm mr-2 mt-2 w-full"
//         isAbbreviated
//         degrees={keys[key].degrees}
//       />
//       <Select
//         options={Object.keys(keys)}
//         setSelected={setKey}
//         selected={key}
//       />
//     </div>
//     <Progressions
//       className="text-[8px] sm:text-sm xs:text-xs mt-1"
//       isDesktop={isDesktop}
//       progressions={keys[key].progressions}
//     />
//     <div className="grid grid-cols-2 gap-1 place-items-center mt-2 text-sm">
//       {sortedPositions.map((position, i) => (
//         <ScalePosition
//           key={i}
//           selectedKey={key}
//           position={position}
//           width={width / 2.2}
//         />
//       ))}
//       <button
//         className="border-2 border-gray-200 p-2 text-center"
//         onClick={() => setSortLR(!sortLR)}
//       >
//         {sortLR ? "Sort Position #" : "Sort L-R"}
//       </button>
//     </div>
//     <FullBoard selectedKey={key} width={width * 0.97} />
//   </>
// )}