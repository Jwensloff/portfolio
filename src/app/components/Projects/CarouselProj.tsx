import { useState } from "react";
import styles from "./Projects.module.css";
import projectData from "./projectData.json";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

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
      <BsArrowLeftCircleFill className={styles.arrowLeft} onClick={prevSlide} />
      {projectData.map((project, index) => (
        <div
          key={index}
          className={slide === index ? styles.slide : styles.slideHidden}
        >
          <h2>{project.name}</h2>
          <img
            className={styles.image}
            src={project.img}
            alt={project.name}
          />
          <div>
            <p>{project.description}</p>
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
      <BsArrowRightCircleFill
        className={styles.arrowRight}
        onClick={nextSlide}
      />
      <span className={styles.indicators}>
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? styles.indicator : styles.inactive}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default CarouselProj;