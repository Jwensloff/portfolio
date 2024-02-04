import styles from './Projects.module.css';
import projectData from './projectData.json';
import Image from 'next/image';
import { useState } from 'react';

const Projects = () => {
  const [displayBack, setDisplayBack] = useState<boolean[]>(
    new Array(projectData.length).fill(false)
  );

  const handleClick = (index: number) => {
    const newDisplayBack = [...displayBack];
    newDisplayBack[index] = !newDisplayBack[index];
    setDisplayBack(newDisplayBack);
  };

  let projects = projectData.map((proj, index) => {
    return (
      <div className={styles.card} key={index}>
        <div
          className={`${styles.innerCard} ${
            displayBack[index] ? styles.showBack : ''
          }`}
        >
          <div className={styles.frontCard}>
            <h2>{proj.name}</h2>
            <div className={styles.imgContainer}>
              <Image
                src={proj.img}
                alt={`screenshot of ${proj.name}`}
                fill
                className={styles.image}
              />
            </div>
            <button onClick={() => handleClick(index)}>Learn More</button>
          </div>
          <div className={styles.backCard}>
            <h2>{proj.name}</h2>
            <p>{proj.description}</p>
            <div className={styles.techContainer}>
              {proj.tech.map((tech, index) => (
                <div className={styles.logoContainer}>
                  <Image
                    key={index}
                    src={tech.logo}
                    alt={tech.logo_name}
                    fill
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
            <div className={styles.anchorContainer}>
              <a href={proj.repo} className={styles.anchor}>
                Explore Repo
              </a>
              {proj.live && (
                <a href={proj.live} className={styles.anchor}>
                  Visit Site
                </a>
              )}
            </div>

            <button onClick={() => handleClick(index)}>Exit</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.mainContainer}>
      <div className={styles.innerContainer}>{projects}</div>
    </section>
  );
};

export default Projects;
