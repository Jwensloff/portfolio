import Image from 'next/image';
import styles from './DynamicIntro.module.css';

function DynamicIntro() {
  return (
    <section className={styles.container}>
      <Image
        src='/jw-high-resolution-logo.jpg'
        height={100}
        width={100}
        alt='JW logo'
      />

      <h1>Jocelyn Wensloff</h1>
      <p>Software Engineer | Biologist | Dog Mom</p>
    </section>
  );
}

export default DynamicIntro;
