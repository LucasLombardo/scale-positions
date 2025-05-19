import { useState, useCallback } from 'react';
import { useScreenDimensions } from './useDimensions';

/**
 * useOrientation
 * Detects device orientation (landscape/portrait) and allows user override.
 *
 * @returns {[orientation: 'portrait' | 'landscape', setOverride: (override: 'portrait' | 'landscape' | null) => void, override: 'portrait' | 'landscape' | null]}
 */
export default function useOrientation() {
  const [width, height] = useScreenDimensions();
  const [override, setOverride] = useState(null);
  const orientation = width > height ? 'landscape' : 'portrait';

  // If override is set, use it as the orientation
  const effectiveOrientation = override || orientation;

  // Function to set the override
  const setUserOverride = useCallback((value) => {
    if (value === 'portrait' || value === 'landscape' || value === null) {
      setOverride(value);
    }
  }, []);

  return [effectiveOrientation, setUserOverride, override];
} 