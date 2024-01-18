'use client';
import Image from 'next/image';
import styles from './ContactMe.module.css';
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function ContactMe() {
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_ubh16gg',
          'template_fon9mfs',
          formRef.current,
          '04iDXK8794P5na9Uq'
        )
        .then(
          (result) => {
            console.log(result.text);
            formRef.current && formRef.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.text}>Let's connect</h1>
          <div className={styles.anchorContainer}>
            <a href='https://www.linkedin.com/in/jocelynwensloff/'>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href='https://github.com/Jwensloff'>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a href='mailto:jewensloff@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
          </div>
          <p className={styles.or}>OR</p>
          <button
            onClick={() => setDisplayForm(!displayForm)}
            className={styles.message}
          >
            Send me a message
          </button>
        </div>
        <div
          className={`${styles.wrapper} ${
            displayForm ? styles['is-open'] : ''
          }`}
        >
          <div className={styles.formConainer}>
            <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.nameEmail}>
                <input
                  placeholder='Your name'
                  type='text'
                  name='user_name'
                  className={styles.input}
                  aria-label='Enter your name'
                />
                <input
                  placeholder='Your email'
                  type='email'
                  name='user_email'
                  className={styles.input}
                  aria-label='Enter your email'
                />
              </div>
              <input
                type='text'
                name='message_subject'
                className={styles.input}
                placeholder='Message subject'
                aria-label='Enter message subject'
              />
              <textarea
                name='message'
                className={styles.textarea}
                placeholder='Your message'
                aria-label='Enter message'
              />
              <input type='submit' value='Send' className={styles.sendButton} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
