import React from 'react';
import styles from '../styles/Home.module.css';
import ImgSlideShow from '../components/ImgSlideShow/ImgSlideShow';
import NavHeader from '../components/NavHeader/NavHeader';

export default function Index() {
  return (
    <>
      <NavHeader
        subHeading={
          <>
            <span className="one">Photo·</span>
            <span className="two">psycho·</span>
            <span className="three">geography</span>
          </>
        }
      />
      <ImgSlideShow />
    </>
  );
}
