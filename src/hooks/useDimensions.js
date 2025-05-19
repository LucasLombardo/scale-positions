import { useState, useEffect } from "react";

/**
 * useScreenDimensions
 * React hook that returns the current window width and height as an array.
 * Updates automatically on window resize.
 *
 * @returns {[number, number]} [width, height] - The current window width and height.
 */
export function useScreenDimensions() {
  const [dimensions, setDimensions] = useState([window.innerWidth, window.innerHeight]);

  function handleWindowSizeChange() {
    setDimensions([window.innerWidth, window.innerHeight]);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return dimensions;
}
