import React, { useState } from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faEnvelope,
  faCode,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

interface NavBarProps {
  introRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

function Navbar({ introRef, aboutRef, projectsRef, contactRef }: NavBarProps) {
  const handleClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [hideMenu, setHideMenu] = useState<boolean>(true);
  return (
    <div className={styles.container}>
      <button
        className={styles.menuButton}
        onClick={() => setHideMenu(!hideMenu)}
      >
        {hideMenu ? (
          <FontAwesomeIcon
            className={styles.fa}
            icon={faBars}
            aria-label="menu"
          />
        ) : (
          "X"
        )}
      </button>
      <span className={styles.span} onClick={() => handleClick(introRef)}>
        <button
          className={`${styles.homeBtn} ${hideMenu ? styles.hidden : ""}`}
          aria-label="home"
        >
          <FontAwesomeIcon className={styles.fa} icon={faHouse} />
        </button>
        <p className={styles.text}>Home</p>
      </span>
      <span className={styles.span} onClick={() => handleClick(aboutRef)}>
        <button
          className={`${styles.aboutBtn} ${hideMenu ? styles.hidden : ""}`}
          aria-label="About me"
        >
          <FontAwesomeIcon className={styles.fa} icon={faUser} />
        </button>
        <p className={styles.text}>About</p>
      </span>
      <span className={styles.span} onClick={() => handleClick(projectsRef)}>
        <button
          className={`${styles.projectsBtn} ${hideMenu ? styles.hidden : ""}`}
          aria-label="Projects"
        >
          <FontAwesomeIcon className={styles.fa} icon={faCode} />
        </button>
        <p className={styles.text}>Projects</p>
      </span>
      <span className={styles.span} onClick={() => handleClick(contactRef)}>
        <button
          className={`${styles.contactBtn} ${hideMenu ? styles.hidden : ""}`}
          aria-label="Contact me"
        >
          <FontAwesomeIcon className={styles.fa} icon={faEnvelope} />
        </button>
        <p className={styles.text}>Contact</p>
      </span>
    </div>
  );
}

export default Navbar;
