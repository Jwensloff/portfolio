'use client';
import React from 'react';
import styles from './Projects.module.css';
import '@mantine/carousel/styles.css';
import projectData from './projectData.json';
import Image from 'next/image';
type ProjectsProps = {
  projectsRef: React.RefObject<HTMLElement | null>;
};

const Projects = ({ projectsRef }: ProjectsProps) => {
  const projects = projectData.map((proj) => {
    return (
      <div className={styles.individual} key={proj.name}>
        <p className={styles.projName}>{proj.name}</p>
        <div className={styles.imgContainer}>
          <Image
            src={proj.img}
            alt={`Preview of ${proj.name}`}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.hiddentContent}>
          <p>{proj.description}</p>
          <a href={proj.repo} className={styles.anchor}>
            Repo
          </a>
          {proj.live !== '' && (
            <a href={proj.live} className={styles.anchor}>
              Demo
            </a>
          )}
        </div>
      </div>
    );
  });

  return (
    <section
      className={styles.mainContainer}
      ref={projectsRef as React.RefObject<HTMLElement>}
    >
      <div className={styles.innerContainer}>
        <div className={styles.projectsContainer}>{projects}</div>
      </div>
    </section>
  );
};

export default Projects;
