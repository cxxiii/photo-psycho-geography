import React from 'react'
import ImgSlideShow from '../../components/ImgSlideShow'
import NavHeader from '../../components/NavHeader'
import GALLERIES from '../../galleries'

export default () => (
  <>
    <NavHeader subHeading="Ireland" subColor="var(--ire)" />
    <ImgSlideShow
      imgs={GALLERIES[3].imgs}
      color="var(--ire)"
      showNavArrows={true}
      showCaptions={true}
    />
  </>
)
