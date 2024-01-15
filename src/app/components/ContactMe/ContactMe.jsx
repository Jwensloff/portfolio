'use client';
import Image from 'next/image';
import styles from './ContactMe.module.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ubh16gg',
        'template_fon9mfs',
        form.current,
        '04iDXK8794P5na9Uq'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className={styles.container}>
      <h1>Contact me</h1>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Your Name</label>
        <input type='text' name='user_name' />
        <label>Your Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form>
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
    </section>
  );
}

export default ContactMe;
