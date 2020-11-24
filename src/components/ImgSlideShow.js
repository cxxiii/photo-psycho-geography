import React, { useState } from 'react'
import styled from '@emotion/styled'
import GALLERIES from '../galleries'
import Layout from './Layout'

const getRandomImg = () => {
  const imgs = []
  const randomGallery = Math.floor(Math.random() * 5)
  const currentImgNum = Math.floor(
    Math.random() * GALLERIES[randomGallery].imgs.length,
  )
  imgs.push(GALLERIES[randomGallery].imgs[currentImgNum])
  return imgs
}

const ImgSlideShow = ({
  imgs = getRandomImg(),
  color,
  showNavArrows,
  showCaptions,
}) => {
  const [image, setImage] = useState(imgs[0])
  let currentImgNum = imgs.indexOf(image)

  const displayNextImg = () => {
    if (currentImgNum + 2 === imgs.length) {
      document
        .querySelector('#arrow-right')
        .classList.replace('nav-btn-active', 'nav-btn-inactive')
    }
    if (currentImgNum + 1 === imgs.length) return
    document
      .querySelector('#arrow-left')
      .classList.replace('nav-btn-inactive', 'nav-btn-active')
    setImage(imgs[++currentImgNum])
    resetCaptionTimer()
  }

  const displayPrevImg = () => {
    if (currentImgNum - 1 === 0) {
      document
        .querySelector('#arrow-left')
        .classList.replace('nav-btn-active', 'nav-btn-inactive')
    }
    if (currentImgNum - 1 === -1) return
    document
      .querySelector('#arrow-right')
      .classList.replace('nav-btn-inactive', 'nav-btn-active')
    setImage(imgs[--currentImgNum])
  }

  document.addEventListener('keydown', navByArrowKeys)
  function navByArrowKeys(e) {
    if (e.code === 'ArrowRight') {
      displayNextImg()
    } else if (e.code === 'ArrowLeft') {
      displayPrevImg()
    } else return
  }

  const resetCaptionTimer = () => {
    document.querySelector('aside').hidden = true
    setTimeout(() => {
      document.querySelector('aside').hidden = false
    }, 1000)
  }

  return (
    <Layout>
      <div id="image-container">
        {showNavArrows && (
          <>
            <div
              id="arrow-left"
              className={`nav-arrow nav-btn-inactive`}
              title="View previous image"
              onClick={displayPrevImg}
              style={{ color: color }}
            >
              ‹
            </div>
            <div
              id="arrow-right"
              className="nav-arrow nav-btn-active"
              title="View next image"
              onClick={displayNextImg}
              style={{ color: color }}
            >
              ›
            </div>
          </>
        )}
        <img id="display-img" src={image.file} />
        {showCaptions && image.title && (
          <aside>
            <span id="img-title" className="one">
              {image.title}{' '}
            </span>
            {image.location && (
              <>
                <span id="img-title-loc-sep" className="two">
                  /
                </span>
                <span id="img-location" className="two">
                  {' '}
                  {image.location}
                </span>
              </>
            )}
          </aside>
        )}
      </div>
    </Layout>
  )
}

export default ImgSlideShow
