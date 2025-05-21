import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import {
  RootNote,
  KeyType,
  ScaleType,
  AccidentalType,
  SortPosition,
  Orientation,
} from "./constants";

// Define types for the context value
export type SettingsContextType = {
  rootNote: RootNote;
  setRootNote: Dispatch<SetStateAction<RootNote>>;
  type: ScaleType;
  setType: Dispatch<SetStateAction<ScaleType>>;
  accidental: AccidentalType;
  setAccidental: Dispatch<SetStateAction<AccidentalType>>;
  sortPositions: SortPosition;
  setSortPositions: Dispatch<SetStateAction<SortPosition>>;
  lockOrientation: boolean;
  setLockOrientation: Dispatch<SetStateAction<boolean>>;
  orientation: Orientation;
  setOrientation: Dispatch<SetStateAction<Orientation>>;
  settingsOpen: boolean;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  key: string;
  keyType: KeyType;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [rootNote, setRootNote] = useState<RootNote>(RootNote.C);
  const [type, setType] = useState<ScaleType>(ScaleType.MAJOR_PENTATONIC);
  const [accidental, setAccidental] = useState<AccidentalType>(
    AccidentalType.NATURAL,
  );
  const [sortPositions, setSortPositions] = useState<SortPosition>(
    SortPosition.LOCATION,
  );
  const [lockOrientation, setLockOrientation] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<Orientation>(
    Orientation.PORTRAIT,
  );
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const typeMap: Record<ScaleType, string> = {
    [ScaleType.MAJOR_PENTATONIC]: "",
    [ScaleType.MINOR_PENTATONIC]: "m",
    [ScaleType.MAJOR]: "",
    [ScaleType.MINOR]: "m",
  };

  const accidentalMap: Record<AccidentalType, string> = {
    [AccidentalType.SHARP]: "#",
    [AccidentalType.NATURAL]: "",
  };

  const keyTypeMap: Record<ScaleType, KeyType> = {
    [ScaleType.MAJOR_PENTATONIC]: KeyType.MAJOR,
    [ScaleType.MINOR_PENTATONIC]: KeyType.MINOR,
    [ScaleType.MAJOR]: KeyType.MAJOR,
    [ScaleType.MINOR]: KeyType.MINOR,
  };

  const key = rootNote + accidentalMap[accidental] + typeMap[type];

  const value: SettingsContextType = {
    rootNote,
    setRootNote,
    type,
    setType,
    accidental,
    setAccidental,
    sortPositions,
    setSortPositions,
    lockOrientation,
    setLockOrientation,
    orientation,
    setOrientation,
    settingsOpen,
    setSettingsOpen,
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
