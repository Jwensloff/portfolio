import React from 'react';
import styles from './navbar.module.css';

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

  return (
    <div className={styles.container}>
      <button onClick={() => handleClick(introRef)}>home</button>
      <button onClick={() => handleClick(aboutRef)}>About</button>
      <button onClick={() => handleClick(projectsRef)}>projects</button>
      <button onClick={() => handleClick(contactRef)}>Contact</button>
    </div>
  );
}

export default Navbar;
