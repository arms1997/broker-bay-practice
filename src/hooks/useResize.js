import { useState, useEffect } from "react";

export default function useResize() {
  const [isMobile, setMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timerID = null;
    const resizeListener = () => {
      clearTimeout(timerID);

      timerID = setTimeout(() => {
        console.log("hello");
        setWidth(window.innerWidth);
        setMobile(window.innerWidth < 480);
      }, 1000);
    };

    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return { isMobile, width };
}
