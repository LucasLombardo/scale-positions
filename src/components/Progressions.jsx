import { useState } from "react";

export default function Progressions({ progressions, className="", isDesktop }) {
  const [selected, setSelected] = useState("");
  return (
    <div className={className}>
      <ul className={`grid grid-cols-5 ${isDesktop ? "gap-2" : "gap-0.5"} w-full`}>
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
