import React from 'react';
import ImgSlideShow from '../../components/ImgSlideShow';
import NavHeader from '../../components/NavHeader';
import GALLERIES from '../../galleries';

export default () => (
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
