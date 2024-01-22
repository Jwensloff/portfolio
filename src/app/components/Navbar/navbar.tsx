import React, { useState } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHouse,
  faUser,
  faEnvelope,
  faCode,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
  introRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

function Navbar({ introRef, aboutRef, projectsRef, contactRef }: NavBarProps) {
  const handleClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    console.log(ref.current);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.menuButton}
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon className={styles.fa} icon={faBars} />
      </button>
      <span>
        <button
          className={`${styles.homeBtn} ${showMenu ? styles.hidden : ''}`}
          onClick={() => handleClick(introRef)}
        >
          <FontAwesomeIcon className={styles.fa} icon={faHouse} />
        </button>
        <p className={styles.text}>Home</p>
      </span>
      <span>
        <button
          className={`${styles.aboutBtn} ${showMenu ? styles.hidden : ''}`}
          onClick={() => handleClick(aboutRef)}
        >
          <FontAwesomeIcon className={styles.fa} icon={faUser} />
        </button>
        <p className={styles.text}>About</p>
      </span>
      <span>
        <button
          className={`${styles.projectsBtn} ${showMenu ? styles.hidden : ''}`}
          onClick={() => handleClick(projectsRef)}
        >
          <FontAwesomeIcon className={styles.fa} icon={faCode} />
        </button>
        <p className={styles.text}>Projects</p>
      </span>
      <span>
        <button
          className={`${styles.contactBtn} ${showMenu ? styles.hidden : ''}`}
          onClick={() => handleClick(contactRef)}
        >
          <FontAwesomeIcon className={styles.fa} icon={faEnvelope} />
        </button>
        <p className={styles.text}>Contact</p>
      </span>
    </div>
  );
}

export default Navbar;
