import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';
import NavHeader from '../../components/NavHeader/NavHeader';
import GALLERIES from '../../galleries';

export default function Botanical() {
  return (
    <>
      <NavHeader subHeading="Botanical" subColor="var(--bot)" />
      <ImgSlideShow
        imgs={GALLERIES[0].imgs}
        color="var(--bot)"
        showNavArrows
        showCaptions
      />
    </>
  );
}
