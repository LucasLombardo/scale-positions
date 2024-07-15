export default function Degrees({ degrees }) {
  return (
    <table className="mt-2 text-sm w-full divide-y divide-slate-200 border text-left">
      <thead className="w-full">
        <tr className="grid grid-cols-7 w-full auto-cols-max divide-x">
          {degrees.map(([label]) => (
            <th key={label} className="p-1">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="grid grid-cols-7 w-full divide-x">
          {degrees.map(([_, chord]) => (
            <td key={chord} className="p-1">
              {chord}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
