import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [rootNote, setRootNote] = useState("C");
  const [type, setType] = useState("major pentatonic");
  const [accidental, setAccidental] = useState("natural");
  const [sortPositions, setSortPositions] = useState("location");
  const [lockOrientation, setLockOrientation] = useState(false);
  const [orientation, setOrientation] = useState("portrait");
  const [settingsOpen, setSettingsOpen] = useState(false);

  const typeMap = {
    "major pentatonic": "",
    "minor pentatonic": "m",
    "major": "",
    "minor": "m",
  }

  const accidentalMap = {
    sharp: "#",
    natural: "",
  }

  const keyTypeMap = {
    "major pentatonic": "major",
    "minor pentatonic": "minor",
    "major": "major",
    "minor": "minor",
  }

  const key = rootNote + accidentalMap[accidental] + typeMap[type];

  const value = {
    rootNote, setRootNote,
    type, setType,
    accidental, setAccidental,
    sortPositions, setSortPositions,
    lockOrientation, setLockOrientation,
    orientation, setOrientation,
    settingsOpen, setSettingsOpen,
    key,
    keyType: keyTypeMap[type],
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
} 