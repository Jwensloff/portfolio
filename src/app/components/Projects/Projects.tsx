'use client';
import React, { Component } from 'react';
import styles from './Projects.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectData from './projectData.json';
import Image from 'next/image';

type ProjectsProps = {
  projectsRef: React.RefObject<HTMLElement | null>;
};

const Projects = ({ projectsRef }: ProjectsProps) => {
  

  const projects = projectData.map((proj) => {
    return (
      <div className={styles.individual} key={proj.name}>
        <p>{proj.name}</p>
        <div className={styles.imgContainer}>
          <Image
            src={proj.img}
            alt={`Preview of ${proj.name}`}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.anchorContainer}>
          <a href={proj.repo}>Explore Repo</a>

          {proj.live !== '' && <a href={proj.live}>Demo</a>}
        </div>
      </div>
    );
  });

  return (
    <section className={styles.mainContainer} ref={projectsRef as React.RefObject<HTMLElement>}>
      <div className={styles.innerContainer}>
        
      </div>
    </section>
  );
};

export default Projects;
