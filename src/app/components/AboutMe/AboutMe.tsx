import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './AboutMe.module.css';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const { ref: textRef, inView } = useInView();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer} ref={textRef}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h2> Hi, I'm Jocelyn!</h2>
            <div className={styles.imgContainer}>
              <Image
                src='/ProfileImg.jpg'
                alt='Jocelyn and her dog Dusty'
                fill
                className={styles.image}
              />
            </div>
            <a
              className={styles.resumeButton}
              href='/resume/Wensloff_Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Resume
            </a>
          </div>
          <div className={styles.textContainer}>
            <div
              className={`${styles.headers} ${
                animate ? styles.animatedHeaders : ''
              }`}
            >
              <h3>I'm an accessibility advocate.</h3>
              <h4>I'm a problem solver.</h4>
              <h5>I'm a creative.</h5>
            </div>
            <p>
              As a software engineer with a foundation in biology and ecology,
              my coding perspective is shaped by a unique blend of technical
              expertise and a passion for the natural world. Drawing inspiration
              from outdoor adventures, unraveling complex puzzles, and embracing
              new challenges, I bring creativity and adaptability to every
              project.
            </p>
            <p>
              Actively seeking opportunities in climate, education,
              customer-focused, and financial tech, I welcome conversations and
              connections. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
