import React from 'react';
import Image from 'next/image';
import styles from './AboutMe.module.css';
import Link from 'next/link';

function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        {/* <div className={styles.profileContainer}> */}
          <div className={styles.imgContainer}>
            {/* <div className={styles.header}> */}
              <h1>A bit about me...</h1>
            {/* </div> */}
            <Image
              src='/ProfileImg.jpg'
              alt='Jocelyn and her dog Dusty'
              height={325}
              width={325}
              className={styles.image}
            />
            <div className={styles.resumeButtonContainer}>
              <a
                className={styles.resumeButton}
                href='/resume/Wensloff_Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Resume
              </a>
            </div>
          </div>
          <div className={styles.textContainer}>
            <h2>Software Engineer | Biologist | Problem Solver</h2>
            <p>
              As a <span> software engineer </span>with roots in biology and
              ecology, I bring a unique perspective to coding. Drawing parallels
              between the biological and coding realms, I've honed a perspective
              that enables me to perceive how a line of code can influence the
              broader application, akin to the way an organism can impact its
              environment.
            </p>

            <p>
              My background has allowed me to quickly learn and adapt to new
              technologies, communicate effectively within a team, and apply an
              <span> agile approach </span>to the development process. Combining
              my cumulative skill set, I am eager to apply my abilities to forge
              innovative solutions in climate, education, financial, or
              customer-oriented technology. If you would like to chat more,
              please feel free to contact me!
            </p>
          </div>
        {/* </div> */}
        {/* <div className={styles.logoContainer}>
              <Image src='/react-blue.png' alt='' height={50} width={50} />
              <Image src='/nextjs.png' alt='' height={50} width={60} />
              <Image src='/TypeScript.png' alt='' height={50} width={50} />
              <Image src='/SASS_logo.png' alt='' height={50} width={50} />
              <Image src='/Redux.png' alt='' height={50} width={60} />
            </div> */}
      </div>
    </section>
  );
}

export default AboutMe;
