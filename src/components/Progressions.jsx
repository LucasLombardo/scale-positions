export default function Progressions({ progressions }) {
  return (
    <div>
      <h1>Popular Progressions</h1>
      <div className="grid grid-cols-5 gap-1">
        {progressions.map(({ chords, description }) => (
          <div>
            <p>
              <strong>{description}</strong>: {chords.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
