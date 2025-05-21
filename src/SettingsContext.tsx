import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define types for the context value
export type SettingsContextType = {
  rootNote: string;
  setRootNote: Dispatch<SetStateAction<string>>;
  type: SettingsType;
  setType: Dispatch<SetStateAction<SettingsType>>;
  accidental: AccidentalType;
  setAccidental: Dispatch<SetStateAction<AccidentalType>>;
  sortPositions: SortPositionsType;
  setSortPositions: Dispatch<SetStateAction<SortPositionsType>>;
  lockOrientation: boolean;
  setLockOrientation: Dispatch<SetStateAction<boolean>>;
  orientation: OrientationType;
  setOrientation: Dispatch<SetStateAction<OrientationType>>;
  settingsOpen: boolean;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  key: string;
  keyType: KeyType;
};

export type SettingsType =
  | "major pentatonic"
  | "minor pentatonic"
  | "major"
  | "minor";
export type AccidentalType = "sharp" | "natural";
export type SortPositionsType = "location" | "number";
export type OrientationType = "portrait" | "landscape";
export type KeyType = "major" | "minor";

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [rootNote, setRootNote] = useState<string>("C");
  const [type, setType] = useState<SettingsType>("major pentatonic");
  const [accidental, setAccidental] = useState<AccidentalType>("natural");
  const [sortPositions, setSortPositions] =
    useState<SortPositionsType>("location");
  const [lockOrientation, setLockOrientation] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<OrientationType>("portrait");
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const typeMap: Record<SettingsType, string> = {
    "major pentatonic": "",
    "minor pentatonic": "m",
    major: "",
    minor: "m",
  };

  const accidentalMap: Record<AccidentalType, string> = {
    sharp: "#",
    natural: "",
  };

  const keyTypeMap: Record<SettingsType, KeyType> = {
    "major pentatonic": "major",
    "minor pentatonic": "minor",
    major: "major",
    minor: "minor",
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
