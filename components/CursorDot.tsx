"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || !window.matchMedia("(pointer: fine)").matches) return;

    dot.style.display = "block";

    const setExpanded = (expanded: boolean) => {
      dot.style.width = expanded ? "44px" : "10px";
      dot.style.height = expanded ? "44px" : "10px";
      dot.style.background = expanded ? "transparent" : "#4F89A8";
      dot.style.border = expanded ? "1px solid #2F6F91" : "none";
    };

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setExpanded(!!target.closest("[data-cursor-expand]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" style={{ display: "none" }} />;
}
