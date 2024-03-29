import { IconProp } from '@fortawesome/fontawesome-svg-core';

import React, { LegacyRef } from 'react';
import styles from './SectionHeaders.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

interface SectionHeadersProps {
  text: string;
  forwardedRef: LegacyRef<HTMLElement> | undefined;
}

const SectionHeaders = ({
  text,
  forwardedRef,
}: SectionHeadersProps) => {


  const currentIcon = (): IconProp => {
    if (text.includes('About')) {
      return faUser;
    } else if (text.includes('Project')) {
      return faCode;
    } else if (text.includes('Contact')) {
      return faEnvelope;
    }
    return faUser;
  };

  const editedText = text.replace('-', ' ');

  return (
    <section ref={forwardedRef} className={`${styles.container}`}>
      <div className={styles.circle}></div>
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
