import { useScreenDimensions } from "./useDimensions";
import { useSettings, OrientationType } from "../SettingsContext";

/**
 * useOrientation
 * Detects device orientation (landscape/portrait) and allows user override.
 *
 * @returns {'portrait' | 'landscape'}
 */
export function useOrientation(): OrientationType {
  const [width, height] = useScreenDimensions();
  const { orientation: orientationSetting, lockOrientation } = useSettings();

  if (lockOrientation) return orientationSetting;

  const orientation: OrientationType =
    width > height ? "landscape" : "portrait";
  return orientation;
}
