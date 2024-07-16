export default function Select({ options, selected, setSelected }) {
  return (
    <label
      className={`border border-gray-200 inline-block text-sm text-center cursor-pointer`}
      onChange={(e) => setSelected(e.target.value)}
      value={selected}
    >
      <select id="countries" className="p-1 font-bold">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
