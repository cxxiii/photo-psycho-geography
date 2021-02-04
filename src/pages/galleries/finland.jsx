import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';
import NavHeader from '../../components/NavHeader/NavHeader';
import GALLERIES from '../../galleries';

export default function Finland() {
  return (
    <>
      <NavHeader subHeading="Finland" subColor="var(--fin)" />
      <ImgSlideShow
        imgs={GALLERIES[1].imgs}
        color="var(--fin)"
        showNavArrows
        showCaptions
      />
    </>
  );
}
