"use client";

import type { ReactElement } from "react";
import { Nav } from "@/components/layout/Nav/Nav";
import { Footer } from "@/components/layout/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Heritage } from "@/components/sections/Heritage/Heritage";
import { Grooming } from "@/components/sections/Grooming/Grooming";
import { Experience } from "@/components/sections/Experience/Experience";
import { Team } from "@/components/sections/Team/Team";
import { Testimonial } from "@/components/sections/Testimonial/Testimonial";
import { Closing } from "@/components/sections/Closing/Closing";
import { LocaleProvider } from "@/context/LocaleProvider";

export const HomePage = (): ReactElement => {
  return (
    <LocaleProvider>
      <Nav />
      <main>
        <Hero />
        <Heritage />
        <Grooming />
        <Team />
        <Experience />
        <Testimonial />
        <Closing />
      </main>
      <Footer />
    </LocaleProvider>
  );
};
