import Image from 'next/image';
import styles from './ContactMe.module.css';

function ContactMe() {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <p>jewensloff@gmail.com</p>
      <div className={styles.anchorContainer}>
        <a href='https://www.linkedin.com/in/jocelynwensloff/'>
          <Image
            src='/LinkedIn-Logo.svg'
            alt=''
            width={100}
            height={50}
            className={styles.linkedIn}
          />
        </a>
        <a href='https://github.com/Jwensloff'>
          <Image
            src='/gitHub.jpg'
            alt=''
            width={100}
            height={50}
            className={styles.linkedIn}
          />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
