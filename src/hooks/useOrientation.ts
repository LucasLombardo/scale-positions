import { useScreenDimensions } from "./useDimensions";
import { useSettings } from "../SettingsContext";
import { Orientation } from "../constants";

/**
 * useOrientation
 * Detects device orientation (landscape/portrait) and allows user override.
 *
 * @returns {Orientation}
 */
export function useOrientation(): Orientation {
  const [width, height] = useScreenDimensions();
  const { orientation: orientationSetting, lockOrientation } = useSettings();

  if (lockOrientation) return orientationSetting;

  const orientation: Orientation =
    width > height ? Orientation.LANDSCAPE : Orientation.PORTRAIT;
  return orientation;
}
