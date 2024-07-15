export function Radios({ options, selected, setSelected }) {
  return (
    <div className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {options.map((option) => (
        <label
          key={option}
          className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${selected === option ? "bg-cyan-300": ""}`}
          onChange={(e) => setSelected(e.target.value)}
        >
          <input
            type="radio"
            className="sr-only"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
  );
}
