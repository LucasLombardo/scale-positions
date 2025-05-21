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
} from "@constants/settings";

// Define types for the context value
export type SettingsContextType = {
  rootNote: RootNote;
  setRootNote: Dispatch<SetStateAction<RootNote>>;
  safeSetRootNote: (note: RootNote) => void;
  type: ScaleType;
  setType: Dispatch<SetStateAction<ScaleType>>;
  accidental: AccidentalType;
  setAccidental: Dispatch<SetStateAction<AccidentalType>>;
  safeSetAccidental: (accidental: AccidentalType) => void;
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

  const safeSetRootNote = (note: RootNote) => {
    const isSharp = accidental === AccidentalType.SHARP;
    // If the note only has a theoretical sharp, set the accidental to natural
    if (isSharp && [RootNote.E, RootNote.B].includes(note)) {
      setAccidental(AccidentalType.NATURAL);
    }
    setRootNote(note);
  };

  const safeSetAccidental = (accidental: AccidentalType) => {
    const isSharp = accidental === AccidentalType.SHARP;
    // If user selects a theoretical sharp, switch to the enharmonic equivalent
    if (isSharp && rootNote === RootNote.E) {
      setRootNote(RootNote.F);
      setAccidental(AccidentalType.NATURAL);
    } else if (isSharp && rootNote === RootNote.B) {
      setRootNote(RootNote.C);
      setAccidental(AccidentalType.NATURAL);
    } else {
      setAccidental(accidental);
    }
  };

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
    safeSetRootNote,
    safeSetAccidental,
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
