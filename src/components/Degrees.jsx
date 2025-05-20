export default function Degrees({ degrees, isAbbreviated, className = "" }) {
  const abbreviateChord = (chord) => {
    let result = chord.replace(" minor", "m");
    result = result.replace(" major", "");
    result = result.replace(" diminished", "dim");
    return result;
  };

  return (
    <table
      className={`${className} divide-y divide-slate-200 border text-center w-full`}
    >
      <thead className="w-full">
        <tr className="grid grid-cols-7 w-full auto-cols-max divide-x">
          {degrees.map(([label]) => (
            <th key={label} className="px-3 py-2 text-center align-middle">
              {isAbbreviated ? label.split(" ")[0] : label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="grid grid-cols-7 w-full divide-x">
          {degrees.map(([_, chord]) => (
            <td key={chord} className="px-3 py-2 text-center align-middle">
              {isAbbreviated ? abbreviateChord(chord) : chord}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
