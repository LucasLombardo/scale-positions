import notes from "@data/notes";
import React from "react";

interface Marker {
  string: number;
  fret: number;
}

interface FretboardProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fretCount?: number;
  startingFret?: number;
  markers?: Marker[];
  keyNote?: string;
  boldedNotes?: string[];
}

export default function Fretboard({
  width = 300,
  height = 250,
  fretCount = 6,
  startingFret = 0,
  markers = [],
  keyNote = "",
  boldedNotes = [],
  ...props
}: FretboardProps) {
  const MARGIN = { LEFT: 30, RIGHT: 10, TOP: 15, BOTTOM: 35 };
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
    (_, i) => startingFret + i,
  );
  const displayFrets = [3, 5, 7, 9, 12, 15, 17];

  return (
    <svg viewBox={`0, 0, ${width}, ${height}`} {...props}>
      {stringLabels.map((s, i) => (
        <text
          key={i}
          x={5}
          y={stringPositions[i] + 5}
          fontSize="16"
          className={boldedNotes.includes(s) ? "string string--bold" : "string"}
        >
          {s}
        </text>
      ))}
      {fretLabels.map((n, i) => {
        if (i && !displayFrets.includes(n)) return null;
        return (
          <text
            key={n}
            x={fretPositions[n - startingFret] + fretPositions[0] - 6}
            y={MARGIN.TOP + innerHeight + 30}
            fontSize="16"
            fill="black"
          >
            {n}
          </text>
        );
      })}
      {fretPositions.map((x) => (
        <line
          key={x}
          x1={x}
          y1={MARGIN.TOP}
          x2={x}
          y2={MARGIN.TOP + innerHeight}
          stroke="black"
          strokeWidth="2"
        />
      ))}
      {stringPositions.map((y) => (
        <line
          key={y}
          x1={MARGIN.LEFT}
          y1={y}
          x2={MARGIN.LEFT + innerWidth}
          y2={y}
          stroke="black"
          strokeWidth="2"
        />
      ))}
      {markers.map(({ string, fret }) => {
        const note = notes[string][fret + startingFret - 1];
        const isKeyNote = note === keyNote;
        const x = Math.max(
          fretPositions[startingFret ? fret : fret - 1] - fretPositions[0],
          14,
        );
        return (
          <g key={`${string}-${fret}`}>
            <circle
              cx={x}
              cy={stringPositions[string]}
              r="12"
              fill={isKeyNote ? "#9c1daf" : "white"}
              stroke="black"
              strokeWidth="2"
            />
            <text
              x={x}
              y={stringPositions[string] + 1.5}
              fontSize="15"
              fill={isKeyNote ? "white" : "black"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {note}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
