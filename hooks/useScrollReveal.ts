"use client";

import { useLayoutEffect, useRef, useState, type RefObject } from "react";

export type RevealVariant = "fade-up" | "fade" | "rise" | "scale" | "mask";

type UseScrollRevealOptions = {
  once?: boolean;
  amount?: number;
  rootMargin?: string;
  /** Play on mount (hero entrance) instead of waiting for scroll. */
  immediate?: boolean;
};

type UseScrollRevealResult = {
  ref: RefObject<HTMLElement | null>;
  isInView: boolean;
  className: string;
};

export const useScrollReveal = (
  options: UseScrollRevealOptions = {},
): UseScrollRevealResult => {
  const {
    once = true,
    amount = 0.08,
    rootMargin = "0px 0px -6% 0px",
    immediate = false,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setIsReady(true);
      setIsInView(true);
      return;
    }

    let frameA = 0;
    let frameB = 0;

    const play = (): void => {
      frameA = window.requestAnimationFrame(() => {
        frameB = window.requestAnimationFrame(() => {
          setIsInView(true);
        });
      });
    };

    if (immediate) {
      setIsReady(true);
      play();
      return () => {
        window.cancelAnimationFrame(frameA);
        window.cancelAnimationFrame(frameB);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          if (!once) {
            setIsInView(false);
          }
          return;
        }

        play();

        if (once) {
          observer.unobserve(node);
        }
      },
      {
        threshold: amount,
        rootMargin,
      },
    );

    setIsReady(true);
    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameA);
      window.cancelAnimationFrame(frameB);
    };
  }, [amount, immediate, once, rootMargin]);

  const className = [
    "reveal",
    isReady ? "reveal--ready" : "",
    isInView ? "is-inview" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return { ref, isInView, className };
};
