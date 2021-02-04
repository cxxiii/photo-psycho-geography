import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';
import NavHeader from '../../components/NavHeader/NavHeader';
import GALLERIES from '../../galleries';

export default function Psycho() {
  return (
    <>
      <NavHeader subHeading="Psycho" subColor="var(--psy)" />
      <ImgSlideShow
        imgs={GALLERIES[4].imgs}
        color="var(--psy)"
        showNavArrows
        showCaptions
      />
    </>
  );
}
