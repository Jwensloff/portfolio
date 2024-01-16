import React from 'react';
import Image from 'next/image';
import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h1>A bit about me...</h1>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.imgContainer}>
            <Image
              src='/ProfileImg.jpg'
              alt='Jocelyn and her dog Dusty'
              height={325}
              width={325}
              className={styles.image}
            />
            <p>View Resume</p>
          </div>
          <div className={styles.textContainer}>
            <p>Software Engineer | Biologist | </p>
            <p>
              As a software engineer with roots in biology and ecology, I bring
              a uique perspective to coding. Drawing parallels between the
              biological and coding realms, I've honed a unique perspective that
              enables me to perceive how a line of code can exert influence on
              the broader application, akin to the way an organism shapes its
              environment.
            </p>

            <p className={styles.secondP}>
              This lens has been instrumental in my ability to navigate the
              complexities of software engineering. It has empowered me to not
              only identify potential issues at the code level but also
              anticipate their broader implications on the overall application.
              By leveraging this holistic approach, I have achieved a heightened
              awareness of the interconnected nature of software components,
              allowing me to craft solutions that consider the entire ecosystem
              of an application.
            </p>
          </div>
        </div>
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
