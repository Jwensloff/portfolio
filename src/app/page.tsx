import Image from 'next/image';
import styles from './page.module.css';
import AboutMe from './AboutMe/AboutMe';
import DynamicIntro from './components/DynamicIntro/DynamicIntro';
import ContactMe from './components/ContactMe/ContactMe';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src='/jw-high-resolution-logo.jpg'
        height={100}
        width={100}
        alt='JW logo'
      />
      <DynamicIntro />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
