const FretboardVis = ({
  width = 300,
  height = 250,
  fretCount = 6,
  startingFret = 0,
  markers = [],
  isMinorKey = false,
  ...props
}) => {
  const MARGIN = { LEFT: 25, RIGHT: 10, TOP: 15, BOTTOM: 35 };
  const innerHeight = height - MARGIN.TOP - MARGIN.BOTTOM;
  const innerWidth = width - MARGIN.LEFT - MARGIN.RIGHT;

  const fretPositions = [...new Array(fretCount)].map((_, i) => {
    const fretWidth = innerWidth / (fretCount - 1);
    return i * fretWidth + MARGIN.LEFT;
  });
  const stringPositions = [...new Array(6)].map((_, i) => {
    const stringHeight = innerHeight / 5;
    return i * stringHeight + MARGIN.TOP;
  });
  const stringLabels = ["E", "B", "G", "D", "A", "E"];
  const fretLabels = [...new Array(fretCount - 1)].map(
    (_, i) => startingFret + i
  );
  const displayFrets = [3, 5, 7, 9, 12, 15, 17];

  return (
    <svg
      viewBox={`0, 0, ${width}, ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {stringLabels.map((s, i) => (
        <text x={5} y={stringPositions[i] + 5} font-size="16" fill="black">
          {s}
        </text>
      ))}
      {fretLabels.map((n, i) => {
        if (i && !displayFrets.includes(n)) return null;
        return (
          <text
            x={fretPositions[n - startingFret] + fretPositions[0] - 6}
            y={MARGIN.TOP + innerHeight + 30}
            font-size="16"
            fill="black"
          >
            {n}
          </text>
        );
      })}
      {fretPositions.map((x) => (
        <line
          x1={x}
          y1={MARGIN.TOP}
          x2={x}
          y2={MARGIN.TOP + innerHeight}
          stroke="black"
          key={x}
          stroke-width="2"
        />
      ))}
      {stringPositions.map((y) => (
        <line
          x1={MARGIN.LEFT}
          y1={y}
          x2={MARGIN.LEFT + innerWidth}
          y2={y}
          stroke="black"
          stroke-width="2"
        />
      ))}

      {markers.map(({ string, fret, minor, major }) => (
        <circle
          cx={fretPositions[fret] - fretPositions[0]}
          cy={stringPositions[string]}
          r="12"
          fill={
            (isMinorKey && minor) || (!isMinorKey && major) ? "black" : "white"
          }
          stroke="black"
          stroke-width="2"
        />
      ))}
    </svg>
  );
};

function App() {
  const positions = [
    {
      minor: 1,
      major: 5,
      majorShape: "",
      minorShape: "G Shape",
      markers: [
        { string: 0, fret: 1, minor: "black" },
        { string: 0, fret: 4, major: "black" },
        { string: 1, fret: 1 },
        { string: 1, fret: 4 },
        { string: 2, fret: 1, major: "black" },
        { string: 2, fret: 3 },
        { string: 3, fret: 1 },
        { string: 3, fret: 3, minor: "black" },
        { string: 4, fret: 1 },
        { string: 4, fret: 3 },
        { string: 5, fret: 1, minor: "black" },
        { string: 5, fret: 4, major: "black" },
      ],
    },
    {
      minor: 2,
      major: 1,
      majorShape: "G Shape",
      minorShape: "",
      markers: [
        { string: 0, fret: 2, major: "black" },
        { string: 0, fret: 4 },
        { string: 1, fret: 2 },
        { string: 1, fret: 4, minor: "black" },
        { string: 2, fret: 1 },
        { string: 2, fret: 3 },
        { string: 3, fret: 1, minor: "black" },
        { string: 3, fret: 4, major: "black" },
        { string: 4, fret: 1 },
        { string: 4, fret: 4 },
        { string: 5, fret: 2, major: "black" },
        { string: 5, fret: 4 },
      ],
    },
    {
      minor: 3,
      major: 2,
      markers: [
        { string: 0, fret: 2 },
        { string: 0, fret: 4 },
        { string: 1, fret: 2, minor: "black" },
        { string: 1, fret: 5, major: "black" },
        { string: 2, fret: 1 },
        { string: 2, fret: 4 },
        { string: 3, fret: 2, major: "black" },
        { string: 3, fret: 4 },
        { string: 4, fret: 2 },
        { string: 4, fret: 4, minor: "black" },
        { string: 5, fret: 2 },
        { string: 5, fret: 4 },
      ],
    },
    {
      minor: 4,
      major: 3,
      markers: [
        { string: 0, fret: 1 },
        { string: 0, fret: 4 },
        { string: 1, fret: 2, major: "black" },
        { string: 1, fret: 4 },
        { string: 2, fret: 1 },
        { string: 2, fret: 3, minor: "black" },
        { string: 3, fret: 1 },
        { string: 3, fret: 3 },
        { string: 4, fret: 1, minor: "black" },
        { string: 4, fret: 4, major: "black" },
        { string: 5, fret: 1 },
        { string: 5, fret: 4 },
      ],
    },
    {
      minor: 5,
      major: 4,
      markers: [
        { string: 0, fret: 2 },
        { string: 0, fret: 4, minor: "black" },
        { string: 1, fret: 2 },
        { string: 1, fret: 4 },
        { string: 2, fret: 1, minor: "black" },
        { string: 2, fret: 4, major: "black" },
        { string: 3, fret: 1 },
        { string: 3, fret: 4 },
        { string: 4, fret: 2, major: "black" },
        { string: 4, fret: 4 },
        { string: 5, fret: 2 },
        { string: 5, fret: 4, minor: "black" },
      ],
    },
  ];
  return (
    <div className="App">
      <div>
        <FretboardVis markers={positions[0].markers} startingFret={6} />
        <FretboardVis markers={positions[1].markers} startingFret={8} />
        <FretboardVis markers={positions[2].markers} startingFret={11} />
        <FretboardVis markers={positions[3].markers} startingFret={1} />
        <FretboardVis markers={positions[4].markers} startingFret={4} />
        <br />
        <FretboardVis
          markers={[]}
          startingFret={1}
          fretCount={18}
          width={1100}
          height={200}
          className="full"
        />
      </div>
    </div>
  );
}

export default App;
