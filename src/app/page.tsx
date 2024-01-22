'use client';
import Image from 'next/image';
import styles from './page.module.css';
import AboutMe from './AboutMe/AboutMe';
import DynamicIntro from './components/DynamicIntro/DynamicIntro';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/navbar';
import { useRef } from 'react';

export default function Home() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // const handleClick = () => {
  //   if (!viewRef === null) {
  //     viewRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <main className={styles.main}>
      <Navbar
        introRef={introRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <DynamicIntro introRef={introRef} />
      <AboutMe aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <ContactMe contactRef={contactRef} />
    </main>
  );
}
