import React, { useEffect } from 'react';
import styles from './SectionHeaders.module.css';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

interface SectionHeadersProps {
  text: string;
  forwardedRef: React.RefObject<HTMLElement | null>;
  photoPosition: string;
}

const SectionHeaders = ({
  text,
  forwardedRef,
  photoPosition,
}: SectionHeadersProps) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const currentIcon = () => {
    if (text.includes('About')) {
      return faUser;
    } else if (text.includes('Project')) {
      return faCode;
    } else if (text.includes('Contact')) {
      return faEnvelope;
    }
  };

  const editedText = text.replace('-', ' ');

  return (
    <section
      ref={forwardedRef}
      className={`${styles.container}`}
    >
      <div className={styles.textContainer}>
        <h2>
          <FontAwesomeIcon className={styles.fa} icon={currentIcon()} />
          {` ${editedText}`}
        </h2>
      </div>
    </section>
  );
};

export default SectionHeaders;