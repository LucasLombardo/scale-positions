export default function Progressions({ progressions }) {
  return (
    <div className="mt-4 w-fit">
      <h1 className="font-bold">Popular Progressions:</h1>
      <div className="grid grid-cols-5 gap-1 w-fit">
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
