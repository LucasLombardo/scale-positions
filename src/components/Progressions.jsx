import { useState } from "react";

export default function Progressions({ progressions }) {
  const [selected, setSelected] = useState("");
  return (
    <div className="mt-2 w-full">
      <ul className="grid grid-cols-5 gap-2 w-full">
        {progressions.map(({ chords, description }, i) => (
          <li
            key={description}
            className={`w-full py-1 border text-center cursor-pointer ${selected === i ? "bg-slate-700 text-white" : ""}`}
            onClick={() => {
              if (selected === i) {
                setSelected("");
              } else {
                setSelected(i);
              }
            }}
          >
            <strong className="underline">{description}</strong>
            <span className="ml-auto block">{chords.join(", ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
