import { useState, useEffect } from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

export const useWindowSize = ({ gameWidth, gameHeight }) => {
  // -------------------------- VAR --------------------------
  const screens = useBreakpoint();
  // -------------------------- STATE --------------------------
  const [size, setSize] = useState({
    width: gameWidth || 1920,
    height: gameHeight || 1080,
    rotate: "0deg",
    marginLeft: 0,
    ratio: 1,
  });
  // -------------------------- FUNCTION --------------------------
  // -------------------------- EFFECT --------------------------
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const windowHeight = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      let width = windowWidth;
      let rotate = "0deg";
      let marginLeft = 0;

      // Kiểm tra nếu là điện thoại ở chế độ đứng hoặc tablets ở chế độ đứng thì set rotate = "90deg"
      if (
        (screens?.xs && window.matchMedia("(orientation: portrait)").matches) ||
        (screens?.sm && window.matchMedia("(orientation: portrait)").matches)
      ) {
        width = windowHeight;
        rotate = "90deg";
        marginLeft = windowWidth;
      }

      const height = (width / gameWidth) * gameHeight;
      const ratio = width / gameWidth;
      const pveHeight = 800 * ratio;
      const pveTop = 92 * ratio;
      const newSize = {
        width,
        height,
        rotate,
        ratio,
        marginLeft,
        pveHeight,
        pveTop,
      };
      setSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gameWidth, gameHeight, screens?.xs, screens?.sm]);
  // -------------------------- RENDER --------------------------

  // -------------------------- MAIN --------------------------

  return { size };
};
