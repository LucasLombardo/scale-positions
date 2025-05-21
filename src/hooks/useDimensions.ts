import { useState, useEffect } from "react";

/**
 * useScreenDimensions
 * React hook that returns the current window width and height as an array.
 * Updates automatically on window resize.
 *
 * @returns {[number, number]} [width, height] - The current window width and height.
 */
export function useScreenDimensions(): [number, number] {
  const [dimensions, setDimensions] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  function handleWindowSizeChange(): void {
    console.log("orientation");
    setDimensions([window.innerWidth, window.innerHeight]);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    window.addEventListener("orientationchange", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.removeEventListener("orientationchange", handleWindowSizeChange);
    };
  }, []);

  return dimensions;
}
