import React from 'react';
import Image from 'next/image';
import styles from './DynamicIntro.module.css';

function DynamicIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imgContainer}>
          <Image
            src='/jw-high-resolution-logo.jpg'
            alt='JW logo'
            height={175}
            width={175}
            className={styles.img}
          />
        </div>
        <div className={styles.textWrapper}>
          <h1>Jocelyn Wensloff</h1>
          <p>Software Engineer | Biologist | Creator</p>
        </div>
      </div>
    </section>
  );
}

export default DynamicIntro;
