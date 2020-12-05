import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow';
import NavHeader from '../../components/NavHeader';
import GALLERIES from '../../galleries';

export default () => (
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
