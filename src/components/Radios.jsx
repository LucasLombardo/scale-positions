export function Radios({ options, selected, setSelected }) {
  return (
    <div className="items-center text-sm font-medium text-gray-900 mt-2 w-fit mx-auto">
      {options.map((option, i) => (
        <label
          key={option}
          className={`border-2 ${i ? "border-l-0" : ""} border-gray-200 p-2 inline-block w-12 text-center cursor-pointer ${
            selected === option ? "bg-slate-700 text-white" : ""
          }`}
          onChange={(e) => setSelected(e.target.value)}
        >
          <input
            type="radio"
            className="sr-only"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}
