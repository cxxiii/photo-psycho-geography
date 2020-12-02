import React from 'react';
import ImgSlideShow from '../components/ImgSlideShow';
import NavHeader from '../components/NavHeader';

export default function Index() {
  <>
    <NavHeader
      subHeading={
        <>
          {' '}
          <span className="one">Photo·</span>
          <span className="two">psycho·</span>
          <span className="three">geography</span>
        </>
      }
    />
    <ImgSlideShow />
  </>;
}
