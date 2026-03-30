"use client";
import { useEffect } from "react";
import gsap, { Power2 } from "gsap";

export default function BindBtnMoveEffect() {
  useEffect(() => {
    const all_btn = gsap.utils.toArray<HTMLElement>(".btn-move");
    const all_btn_circle = gsap.utils.toArray<HTMLElement>(
      ".btn-move .btn-item"
    );

    all_btn.forEach((btn, i) => {
      const circle = all_btn_circle[i];
      if (!btn || !circle) return;

      const parallaxIt = (
        e: MouseEvent,
        target: HTMLElement,
        movement: number
      ) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        gsap.to(target, {
          x: ((relX - rect.width / 2) / rect.width) * movement,
          y: ((relY - rect.height / 2) / rect.height) * movement,
          scale: 1.2,
          duration: 0.7,
          ease: "power2.out",
        });
      };

      const callParallax = (e: MouseEvent) => parallaxIt(e, circle, 80);
      const resetParallax = () => {
        gsap.to(circle, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
        });
      };

      btn.addEventListener("mousemove", callParallax);
      btn.addEventListener("mouseleave", resetParallax);

      // Remove listeners on unmount
      return () => {
        btn.removeEventListener("mousemove", callParallax);
        btn.removeEventListener("mouseleave", resetParallax);
      };
    });
  }, []);

  return null;
}
