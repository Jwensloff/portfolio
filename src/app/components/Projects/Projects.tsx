'use client';
import React, { Component } from 'react';
import styles from './Projects.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectData from './projectData.json';

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
  const projects = projectData.map(proj => {
    return (
      <div>
        <p>{proj.name}</p>
      </div>
    )
  })
  return (
    <section className={styles.container}>
      <div className='container'>
        <p>Here are a few projects</p>
        <Slider {...settings}>
          {projects}
        </Slider>
      </div>
    </section>
  );
};

export default SimpleSlider;
