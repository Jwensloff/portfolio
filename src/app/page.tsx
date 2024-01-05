import Image from 'next/image';
import styles from './page.module.css';
import img from '../../public/images/jw-high-resolution-logo.jpg'
import AboutMe from './AboutMe/AboutMe';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image 
        src={img}
        height={100}
        width={100}
        alt='JW logo'
      />
      <div className={styles.description}>
        <p>Hey there, welcome to my portfolio!</p>
      </div>
      <AboutMe />
    </main>
  );
}
