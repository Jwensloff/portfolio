import Image from 'next/image';
import styles from './page.module.css';
import img from '../../public/jw-high-resolution-logo.jpg';
import AboutMe from './AboutMe/AboutMe';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={img} height={100} width={100} alt='JW logo' />
      <div className={styles.description}>
        <h1>Jocelyn Wensloff</h1>
        <p>Software Engineer | Biologist | Dog Mom</p>
      </div>
      <AboutMe />
    </main>
  );
}
