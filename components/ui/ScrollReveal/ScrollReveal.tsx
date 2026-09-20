"use client";

import {
  createElement,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  useScrollReveal,
  type RevealVariant,
} from "@/hooks/useScrollReveal";
import "@/components/ui/ScrollReveal/scroll-reveal.css";

type ScrollRevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  immediate?: boolean;
  once?: boolean;
  amount?: number;
  rootMargin?: string;
  stagger?: boolean;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className" | "style">;

export const ScrollReveal = ({
  as = "div",
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  immediate = false,
  once = true,
  amount,
  rootMargin,
  stagger = false,
  style,
  ...rest
}: ScrollRevealProps): ReactElement => {
  const { ref, className: revealClass } = useScrollReveal({
    immediate,
    once,
    amount,
    rootMargin,
  });

  const classes = [
    revealClass,
    `reveal--${variant}`,
    stagger ? "reveal--stagger" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: classes,
      style: {
        ...style,
        ...(delay > 0
          ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
          : null),
      },
    },
    children,
  );
};
