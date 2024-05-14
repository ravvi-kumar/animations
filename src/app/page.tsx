"use client";
import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <RevealFlickerText text={["Beautiful", "Moving Imagery", "With Edge"]} />
    </main>
  );
}

function RevealFlickerText({ text }: { text: string | string[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  useGSAP(
    () => {
      gsap.to(".char", {
        opacity: 1,
        duration: 0.5,
        ease: "steps(3)",
        stagger: {
          amount: 0.75,
          from: "random",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} className="min-h-screen p-24">
      {textArray.map((text, i) => (
        <div key={i}>
          {text
            .split("")
            .map((letter, i) =>
              letter == " " ? (
                <span>&nbsp;</span>
              ) : (
                <span className="char opacity-0">{letter} </span>
              )
            )}
          &nbsp;
        </div>
      ))}
    </div>
  );
}
