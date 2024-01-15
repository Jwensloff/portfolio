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
              height={350}
              width={350}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <p>Software Engineer | </p>
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
        <div className={styles.anchorContainer}>
          <a href='https://www.linkedin.com/in/jocelynwensloff/'>
            <Image
              src='/linkedin.png'
              alt=''
              width={50}
              height={50}
              className={styles.linkedIn}
            />
          </a>
          <a href='https://github.com/Jwensloff'>
            <Image
              src='/gitHub.png'
              alt=''
              width={30}
              height={30}
              className={styles.linkedIn}
            />
          </a>
        </div>
      </div>
      {/* <div className={styles.badgeContainer}>
        <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' />
        <img src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
        <img src='https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' />
        <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' />
        <img src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' />
        <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' />
        <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' />
        <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' />
        <img src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white' />
        <img src='https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e' />
      </div> */}
    </section>
  );
}

export default AboutMe;
