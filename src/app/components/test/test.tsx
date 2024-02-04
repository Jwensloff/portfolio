import React from 'react';
import styles from './test.module.css';
import Image from 'next/image';

export default function TestComp() {
  return (
    <div className={styles.imgContainer}>
      <Image src={'/cacti.jpg'} alt='' fill className={styles.img} />
    </div>
  );
}
