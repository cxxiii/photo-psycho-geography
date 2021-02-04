import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';
import NavHeader from '../../components/NavHeader/NavHeader';
import GALLERIES from '../../galleries';

export default function Forest() {
  return (
    <>
      <NavHeader subHeading="Forest" subColor="var(--for)" />
      <ImgSlideShow
        imgs={GALLERIES[2].imgs}
        color="var(--for)"
        showNavArrows
        showCaptions
      />
    </>
  );
}
