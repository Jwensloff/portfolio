'use client';
import React, { Component } from 'react';
import styles from './Projects.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectData from './projectData.json';
import Image from 'next/image';

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <Arrow
        className={''}
        style={undefined}
        onClick={function (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    ),
    prevArrow: (
      <Arrow
        className={''}
        style={undefined}
        onClick={function (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    ),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function Arrow(props: {
    className: string;
    style: React.CSSProperties | undefined;
    onClick: React.MouseEventHandler<HTMLDivElement>;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }
  const projects = projectData.map((proj) => {
    return (
      <div className={styles.individual} key={proj.name}>
        <p>{proj.name}</p>
        <div className={styles.imgContainer}>
          <Image
            src={proj.img}
            alt={`Preview of ${proj.name}`}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.anchorContainer}>
          <a href={proj.repo}>Explore Repo</a>

          {proj.live !== '' && <a href={proj.live}>Visit Website</a>}
        </div>
      </div>
    );
  });

  return (
    <section className={styles.mainContainer}>
      <div className={styles.topContent}>
        <div className={styles.textContainer}>
          <p>
            Here are a few projects that I have had the pleasure of creating
            either collaboratively or as a solo project. Each project represents
            a unique journey of creativity and problem-solving, reflecting my
            passion for building meaningful solutions with a clean, deliberate
            aesthetic.
          </p>
        </div>
        <div className='container'>
          <Slider {...settings}>{projects}</Slider>
        </div>
      </div>
      {/* <div className={styles.badgeContainer}>
        <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' />
        <img src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
        <img src='https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' />
        <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' />
        <img src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' />
        <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' />
        <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' />
        <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' />
        <img src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white' />
        <img src='https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e' />
      </div> */}
    </section>
  );
};

export default SimpleSlider;
