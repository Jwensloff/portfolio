import { useState } from "react";
import styles from "./Projects.module.css";
import projectData from "./projectData.json";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

export function CarouselProj() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === projectData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? projectData.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={styles.arrowLeft}
        onClick={prevSlide}
        tabIndex={0}
        aria-label="Previous Slide"
      >
        <BsArrowLeftCircleFill />
      </button>
      {projectData.map((project, index) => (
        <div
          key={index}
          className={slide === index ? styles.slide : styles.slideHidden}
        >
          <h2>{project.name}</h2>
          <img className={styles.image} src={project.img} alt={project.name} />
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techContainer}>
              <h3>Tech stack:</h3>
              {project.tech.map((tech, index) => (
                <div className={styles.logoContainer} key={index}>
                  <p>{tech.tech_name}</p>
                </div>
              ))}
            </div>
            <div className={styles.anchorContainer}>
              <a
                href={project.repo}
                className={styles.anchor}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Repo
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className={styles.anchor}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              )}
            </div>
        </div>
      ))}
      <button
        className={styles.arrowRight}
        onClick={nextSlide}
        tabIndex={0}
        aria-label="Next Slide"
      >
        <BsArrowRightCircleFill />
      </button>
      <span className={styles.indicators}>
        {projectData.map((project, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? styles.indicator : styles.inactive}
            aria-label={`view ${project.name} slide`}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default CarouselProj;
