'use client';
import '@mantine/carousel/styles.css';
import styles from './Projects.module.css';
import { Carousel } from '@mantine/carousel';
import projectData from './projectData.json';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

type ProjectsProps = {
  // projectsRef: React.RefObject<HTMLElement | null>;
};

const Projects = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  let projects = projectData.map((proj) => {
    return (
      <Carousel.Slide className={styles.slide}>
        <div className={styles.slideContent}>
          <div className={styles.imgContainer}>
            <Image src={proj.img} alt='' fill className={styles.img} />
          </div>
          <div className={styles.slideInfo}>
            <h2>{proj.name}</h2>
            <p>{proj.description}</p>
            <div className={styles.anchorContainer}>
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
        </div>
      </Carousel.Slide>
    );
  });

  return (
    <section
      className={styles.mainContainer}
      // ref={projectsRef as React.RefObject<HTMLElement>}
    >
      <div className={styles.innerContainer}>
        <Carousel
          classNames={{ indicator: styles.CarouselIndicators }}
          previousControlProps={{
            'aria-label': 'Previous',
          }}
          nextControlProps={{
            'aria-label': 'Next',
          }}
          nextControlIcon={<IconArrowRight className={styles.rightIcon} />}
          previousControlIcon={<IconArrowLeft className={styles.leftIcon} />}
          align='start'
          slideSize={{ base: '100%', sm: '98%' }}
          slideGap={{ base: 5, xs: 2 }}
          withIndicators
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          className={styles.carousel}
          loop
        >
          {projects}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
