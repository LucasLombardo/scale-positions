import { useSettings } from "../SettingsContext";
import degrees from "@data/degrees";

import type { DegreesType } from "@data/degrees";

export default function Header() {
  const { key, setSettingsOpen } = useSettings();
  const { numerals, chords } = degrees[key as keyof DegreesType];

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-30 bg-gradient-to-r from-purple-800 via-fuchsia-700 to-pink-700 shadow-lg">
      {/* Left: Table */}
      <table className="mx-auto text-white text-xs font-semibold rounded overflow-hidden border-separate border-spacing-0">
        <tbody>
          <tr>
            {numerals.map((num: string, idx: number) => (
              <td
                key={num}
                className={
                  `px-1 sm:px-3 py-1 sm:py-2 text-center align-middle min-w-9 border-[0.5px] border-white ` +
                  `${idx === 0 ? 'border-l-0' : ''} ` +
                  `${idx === numerals.length - 1 ? 'border-r-0' : ''} ` +
                  'border-t-0'
                }
              >
                {num}
              </td>
            ))}
          </tr>
          <tr>
            {chords.map((chord: string, idx: number) => (
              <td
                key={chord}
                className={
                  `px-1 sm:px-3 py-1 sm:py-2 text-center align-middle min-w-[1em] border-[0.5px] border-white ` +
                  `${idx === 0 ? 'border-l-0' : ''} ` +
                  `${idx === chords.length - 1 ? 'border-r-0' : ''} ` +
                  'border-b-0'
                }
              >
                {chord}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* Right: Settings Icon Button */}
      <button
        className="sm:absolute sm:right-4 p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setSettingsOpen(true)}
        aria-label="Open settings"
      >
        {/* Inline SVG for settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </div>
  );
}
