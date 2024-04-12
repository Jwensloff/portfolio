"use client";
import React from "react";
import styles from "./page.module.css";
import AboutMe from "./components/AboutMe/AboutMe";
import DynamicIntro from "./components/DynamicIntro/DynamicIntro";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/navbar";
import { useRef } from "react";
import SectionHeaders from "./components/SectionHeaders/SectionHeaders";

export default function Home() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className={styles.main}>
      <Navbar
        introRef={introRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <DynamicIntro introRef={introRef} />
      <SectionHeaders
        text={"About-Me"}
        forwardedRef={aboutRef}
        children={<AboutMe />}
      />
      <SectionHeaders
        text={"Coding-Projects"}
        forwardedRef={projectsRef}
        children={<Projects />}
      />
      <SectionHeaders
        text={"Contact-Me"}
        forwardedRef={contactRef}
        children={<ContactMe />}
      />
    </main>
  );
}
