import Image from 'next/image';
import styles from './AboutMe.module.css';
function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.imgContainer}>
          <Image
            src='/ProfileImg.jpg'
            alt='Jocelyn and her dog Dusty'
            height={400}
            width={400}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            I am a frontend software engineer bringing 5+ of experience in
            environmental science, stream ecology, and fisheries biology. In my
            previous career, I dedicated many hours to studying how a single
            molecule or organism can impact a larger compound, or environment.
            That lens was extremely beneficial when I was first exposed to
            coding through R to analyze my graduate research. During my time
            utilizing R, I quickly fell in love with the logic and problem
            solving necessary to code.
          </p>

          <p className={styles.secondP}>
            This new infatuation with coding inspired me to transition careers
            to software engineering. Now as a software engineer, I utilize my
            ecology lens to understand how a single line of code can impact the
            larger application. I am eager to leverage my cumulative skillset in
            frontend development to contribute meaningfully to areas such as
            climate, health, education, finance, or customer experience
            technology. Excited about the intersection of my diverse background
            and the dynamic field of software engineering, I am ready to tackle
            challenges where I can apply my growing skillset.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
