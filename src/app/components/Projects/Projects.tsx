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
      <div>
        <div className={styles.textContainer}>
          <p>
            Here are a few projects that I have had the pleasure of creating
            either collaboratively or as a solo project.
          </p>
        </div>
        <div className='container'>
          <Slider {...settings}>{projects}</Slider>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
