import { useScreenDimensions } from './useDimensions';
import { useSettings } from '../SettingsContext';

/**
 * useOrientation
 * Detects device orientation (landscape/portrait) and allows user override.
 *
 * @returns {[orientation: 'portrait' | 'landscape', setOverride: (override: 'portrait' | 'landscape' | null) => void, override: 'portrait' | 'landscape' | null]}
 */
export function useOrientation() {
  const [width, height] = useScreenDimensions();
  const { orientation: orientationSetting, lockOrientation } = useSettings();

  if(lockOrientation) return orientationSetting;

  const orientation = width > height ? 'landscape' : 'portrait';
  return orientation;
} 