'use client';
import React from 'react';
import Image from 'next/image';
import styles from './DynamicIntro.module.css';

type DynamicIntroProps = {
  introRef: React.RefObject<HTMLElement | null>;
};

const DynamicIntro = ({ introRef }: DynamicIntroProps) => {
  return (
    <section
      className={styles.container}
      ref={introRef as React.RefObject<HTMLElement>}
    >
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
          <h1>JOCELYN WENSLOFF</h1>
          <p>SOFTWARE ENGINEER</p>
        </div>
      </div>
    </section>
  );
};

export default DynamicIntro;
