import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';
import NavHeader from '../../components/NavHeader/NavHeader';
import GALLERIES from '../../galleries';

export default function Ireland() {
  return (
    <>
      <NavHeader subHeading="Ireland" subColor="var(--ire)" />
      <ImgSlideShow
        imgs={GALLERIES[3].imgs}
        color="var(--ire)"
        showNavArrows
        showCaptions
      />
    </>
  );
}
