import React from 'react';
import styles from './SectionHeaders.module.css';
import Image from 'next/image';

interface SectionHeadersProps {
  text: string;
  forwardedRef: React.RefObject<HTMLElement | null>;
  photoPosition: string;
}

const SectionHeaders = ({
  text,
  forwardedRef,
  photoPosition,
}: SectionHeadersProps) => {
  return (
    <section
      ref={forwardedRef}
      className={`${styles.container} ${styles.text}`}
    >
      <div className={styles.imgContainer}>
        <Image
          src={'/cactus.jpg'}
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition={photoPosition}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{text}</h2>
      </div>
    </section>
  );
};

export default SectionHeaders;
