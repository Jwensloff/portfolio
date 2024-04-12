import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./AboutMe.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.content}>
      <h2 data-aos="fade-right"> Hi, I'm Jocelyn!</h2>
      <div className={styles.imgContainer} data-aos="fade-left">
        <Image
          src="/ProfileImg.jpg"
          alt="Jocelyn and her dog Dusty"
          fill
          className={styles.image}
        />
      </div>
      <p className={styles.highlights} data-aos="fade-right">
        I'm a software engineer, an accessibility advocate, a problem solver,
        and a creative.
      </p>
      <p data-aos="fade-left">
        As an agile software engineer with a foundation in biology and ecology,
        I bring a demonstrated ability to quickly learn and adapt to new
        challenges, and offer unique solutions to complex problems. Drawing
        inspiration from the natural world and human connection, I offer a clean
        UX, a strong work ethic, and a wry sense of humor.
      </p>
      <p className = {styles.highlights} data-aos="fade-right">
        I specialize in React, Next.js, TypeScript, and other front end
        technologies.
      </p>
      <a
        data-aos="fade-left"
        className={styles.resumeButton}
        href="/resume/Wensloff_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </div>
  );
};

export default AboutMe;
