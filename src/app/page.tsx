import Image from 'next/image';
import styles from './page.module.css';
import AboutMe from './AboutMe/AboutMe';
import DynamicIntro from './components/DynamicIntro/DynamicIntro';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <DynamicIntro />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </main>
  );
}
