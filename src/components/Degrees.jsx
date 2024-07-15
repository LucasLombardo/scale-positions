export default function Degrees({ degrees }) {
  console.log(degrees);
  return (
    <table class="table-fixed mt-4">
      <thead>
        <tr>
          {degrees.map(([label]) => (
            <th className="border-2 p-2">{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {degrees.map(([_, chord]) => (
            <td className="border-2 p-2">{chord}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
