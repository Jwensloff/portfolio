import { IconProp } from "@fortawesome/fontawesome-svg-core";

import React, { LegacyRef, useEffect } from "react";
import styles from "./SectionHeaders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../SectionContainer/SectionContainer";
import Aos from "aos";
import "aos/dist/aos.css";

interface SectionHeadersProps {
  text: string;
  forwardedRef: LegacyRef<HTMLDivElement> | null;
  children: JSX.Element;
}

const SectionHeaders = ({
  text,
  forwardedRef,
  children,
}: SectionHeadersProps) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const currentIcon = (): IconProp => {
    if (text.includes("About")) {
      return faUser;
    } else if (text.includes("Project")) {
      return faCode;
    } else if (text.includes("Contact")) {
      return faEnvelope;
    }
    return faUser;
  };

  const editedText = text.replace("-", " ");

  return (
    <div data-aos="fade-up">
      <section ref={forwardedRef} className={`${styles.container}`}>
        <div className={styles.circle}></div>
        <div className={styles.textContainer}>
          <h2>
            <FontAwesomeIcon className={styles.fa} icon={currentIcon()} />
            {` ${editedText}`}
          </h2>
        </div>
      </section>
      <SectionContainer children={children} />
    </div>
  );
};

export default SectionHeaders;
