import { useEffect, useState } from "react";
import useStore from "../store";

export function BackToTop({ display }: { display: boolean }) {
  const theme = useStore((state: any) => state.theme);

  const [className, setClassName] = useState("back-top");

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (display) {
      setClassName(`back-top back-top__${theme}`);
    } else {
      setClassName("back-top back-top__${theme} back-top__hidden");
    }
  }, [display]);

  return (
    <div className={className} onClick={toTop}>
      <span>Top</span>
    </div>
  );
}
