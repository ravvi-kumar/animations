"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null);

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
      }); // <-- automatically reverted
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="min-h-screen p-24">
      <div>
        {"Beautiful"
          .split("")
          .map((letter, i) =>
            letter == " " ? (
              <span>&nbsp;</span>
            ) : (
              <span className="char opacity-0">{letter} </span>
            )
          )}
      </div>
      &nbsp;
      <div>
        {"Moving Imagery"
          .split("")
          .map((letter, i) =>
            letter == " " ? (
              <span>&nbsp;</span>
            ) : (
              <span className="char opacity-0">{letter} </span>
            )
          )}
      </div>
      &nbsp;
      <div>
        {"With Edge"
          .split("")
          .map((letter, i) =>
            letter == " " ? (
              <span>&nbsp;</span>
            ) : (
              <span className="char opacity-0">{letter} </span>
            )
          )}
      </div>
    </main>
  );
}
