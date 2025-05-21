import { useSettings } from "../SettingsContext";
import {
  RootNote,
  ScaleType,
  AccidentalType,
  SortPosition,
  Orientation,
} from "@constants/settings";

export default function Settings() {
  const {
    rootNote,
    safeSetRootNote,
    type,
    setType,
    accidental,
    safeSetAccidental,
    sortPositions,
    setSortPositions,
    lockOrientation,
    setLockOrientation,
    orientation,
    setOrientation,
    setSettingsOpen,
    settingsOpen,
  } = useSettings();

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${settingsOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setSettingsOpen(false)}
        />
      </div>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-40 transform transition-transform duration-300 ease-in-out ${settingsOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-semibold text-lg text-purple-700">
            Settings
          </span>
          <button
            className="p-1 rounded hover:bg-purple-100 focus:outline-none"
            onClick={() => setSettingsOpen(false)}
            aria-label="Close settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-purple-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 text-gray-700 space-y-5 overflow-y-auto max-h-[calc(100vh-64px)]">
          {/* Root Note */}
          <div>
            <label
              htmlFor="root-note"
              className="block text-sm font-medium mb-1"
            >
              Root Note
            </label>
            <select
              id="root-note"
              className="w-full border rounded px-2 py-1"
              value={rootNote}
              onChange={(e) => safeSetRootNote(e.target.value as RootNote)}
            >
              {(Object.keys(RootNote) as Array<keyof typeof RootNote>).map(
                (key) => {
                  const note = RootNote[key];
                  return (
                    <option key={note} value={note}>
                      {note}
                    </option>
                  );
                },
              )}
            </select>
          </div>
          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">
              Type
            </label>
            <select
              id="type"
              className="w-full border rounded px-2 py-1"
              value={type}
              onChange={(e) => setType(e.target.value as ScaleType)}
            >
              <option value={ScaleType.MAJOR_PENTATONIC}>
                Major Pentatonic
              </option>
              <option value={ScaleType.MINOR_PENTATONIC}>
                Minor Pentatonic
              </option>
            </select>
          </div>
          {/* Accidental */}
          <div>
            <label
              htmlFor="accidental"
              className="block text-sm font-medium mb-1"
            >
              Accidental
            </label>
            <select
              id="accidental"
              className="w-full border rounded px-2 py-1"
              value={accidental}
              onChange={(e) =>
                safeSetAccidental(e.target.value as AccidentalType)
              }
            >
              <option value={AccidentalType.NATURAL}>Natural</option>
              <option value={AccidentalType.SHARP}>Sharp</option>
            </select>
          </div>
          {/* Sort Positions */}
          <div>
            <span className="block text-sm font-medium mb-1">
              Sort Positions
            </span>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sort-positions"
                  value={SortPosition.LOCATION}
                  checked={sortPositions === SortPosition.LOCATION}
                  onChange={() => setSortPositions(SortPosition.LOCATION)}
                  className="accent-purple-700"
                />
                Location
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sort-positions"
                  value={SortPosition.NUMBER}
                  checked={sortPositions === SortPosition.NUMBER}
                  onChange={() => setSortPositions(SortPosition.NUMBER)}
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
                onChange={(e) => setLockOrientation(e.target.checked)}
                className="accent-purple-700"
              />
              Lock Orientation
            </label>
          </div>
          {/* Orientation (conditional) */}
          {lockOrientation && (
            <div>
              <label
                htmlFor="orientation"
                className="block text-sm font-medium mb-1"
              >
                Orientation
              </label>
              <select
                id="orientation"
                className="w-full border rounded px-2 py-1"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value as Orientation)}
              >
                <option value={Orientation.LANDSCAPE}>Landscape</option>
                <option value={Orientation.PORTRAIT}>Portrait</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
