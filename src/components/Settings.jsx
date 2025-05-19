import { useSettings } from "../SettingsContext";

export default function Settings({ open, onClose }) {
  const {
    rootNote, setRootNote,
    type, setType,
    accidental, setAccidental,
    sortPositions, setSortPositions,
    lockOrientation, setLockOrientation,
    orientation, setOrientation,
  } = useSettings();

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${open ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={open ? onClose : undefined}
        />
      </div>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-40 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-semibold text-lg text-purple-700">Settings</span>
          <button
            className="p-1 rounded hover:bg-purple-100 focus:outline-none"
            onClick={onClose}
            aria-label="Close settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-purple-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 text-gray-700 space-y-5 overflow-y-auto max-h-[calc(100vh-64px)]">
          {/* Root Note */}
          <div>
            <label htmlFor="root-note" className="block text-sm font-medium mb-1">Root Note</label>
            <select
              id="root-note"
              className="w-full border rounded px-2 py-1"
              value={rootNote}
              onChange={e => setRootNote(e.target.value)}
            >
              {["A","B","C","D","E","F","G"].map(note => (
                <option key={note} value={note}>{note}</option>
              ))}
            </select>
          </div>
          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">Type</label>
            <select
              id="type"
              className="w-full border rounded px-2 py-1"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="major pentatonic">Major Pentatonic</option>
              <option value="minor pentatonic">Minor Pentatonic</option>
            </select>
          </div>
          {/* Accidental */}
          <div>
            <label htmlFor="accidental" className="block text-sm font-medium mb-1">Accidental</label>
            <select
              id="accidental"
              className="w-full border rounded px-2 py-1"
              value={accidental}
              onChange={e => setAccidental(e.target.value)}
            >
              <option value="flat">Flat</option>
              <option value="natural">Natural</option>
              <option value="sharp">Sharp</option>
            </select>
          </div>
          {/* Sort Positions */}
          <div>
            <span className="block text-sm font-medium mb-1">Sort Positions</span>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sort-positions"
                  value="location"
                  checked={sortPositions === "location"}
                  onChange={() => setSortPositions("location")}
                  className="accent-purple-700"
                />
                Location
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sort-positions"
                  value="number"
                  checked={sortPositions === "number"}
                  onChange={() => setSortPositions("number")}
                  className="accent-purple-700"
                />
                Number
              </label>
            </div>
          </div>
          {/* Lock Orientation */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={lockOrientation}
                onChange={e => setLockOrientation(e.target.checked)}
                className="accent-purple-700"
              />
              Lock Orientation
            </label>
          </div>
          {/* Orientation (conditional) */}
          {lockOrientation && (
            <div>
              <label htmlFor="orientation" className="block text-sm font-medium mb-1">Orientation</label>
              <select
                id="orientation"
                className="w-full border rounded px-2 py-1"
                value={orientation}
                onChange={e => setOrientation(e.target.value)}
              >
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
