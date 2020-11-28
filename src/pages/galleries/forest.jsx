import React from 'react'
import ImgSlideShow from '../../components/ImgSlideShow'
import NavHeader from '../../components/NavHeader'
import GALLERIES from '../../galleries'

export default () => (
  <>
    <NavHeader subHeading="Forest" subColor="var(--for)" />
    <ImgSlideShow
      imgs={GALLERIES[2].imgs}
      color="var(--for)"
      showNavArrows={true}
      showCaptions={true}
    />
  </>
)
