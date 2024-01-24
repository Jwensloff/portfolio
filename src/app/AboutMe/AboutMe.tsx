import React from 'react';
import Image from 'next/image';
import styles from './AboutMe.module.css';

type AboutMeProps = {
  aboutRef: React.RefObject<HTMLElement | null>;
};

const AboutMe = ({ aboutRef }: AboutMeProps) => {
  return (
    <section
      ref={aboutRef as React.RefObject<HTMLElement>}
      className={styles.container}
    >
      <div className={styles.innerContainer}>
        <h1>Hi, I'm Jocelyn.</h1>
        <div className={styles.content}>
          <div className={styles.leftContent}>
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
            <h2>I'm an accessibility advocate.</h2>
            <h3>I'm a problem solver.</h3>
            <h4>I'm a creative.</h4>

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
