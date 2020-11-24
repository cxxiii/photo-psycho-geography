import React from 'react'
import ImgSlideShow from '../components/ImgSlideShow'
import Layout from '../components/Layout'
import NavHeader from '../components/NavHeader'

export default () => (
  <Layout>
    <NavHeader
      subheading={
        <>
          {' '}
          <span className="one">Photo·</span>
          <span className="two">psycho·</span>
          <span className="three">geography</span>
        </>
      }
    />
    <ImgSlideShow />
  </Layout>
)
