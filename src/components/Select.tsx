import React from "react";

interface SelectProps {
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select({
  options,
  selected,
  setSelected,
}: SelectProps) {
  return (
    <label
      className={`border border-gray-200 inline-block text-sm text-center cursor-pointer`}
    >
      <select
        id="countries"
        className="p-1 font-bold"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
