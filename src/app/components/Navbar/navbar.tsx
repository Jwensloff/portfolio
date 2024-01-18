import React from 'react';
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <p>home</p>
      <p>About</p>
      <p>Projects</p>
      <p>Contact</p>
    </div>
  );
}

export default Navbar;
