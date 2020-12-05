import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow';
import NavHeader from '../../components/NavHeader';
import GALLERIES from '../../galleries';

export default () => (
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
