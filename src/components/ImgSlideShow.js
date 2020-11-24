import React, { useState, useEffect, useCallback } from 'react'
// import styled from '@emotion/styled'
import GALLERIES from '../galleries'
import Layout from './Layout'

const getRandomImg = () => {
  const imgs = []
  const randomGallery = Math.floor(Math.random() * 5)
  const randomImgNum = Math.floor(
    Math.random() * GALLERIES[randomGallery].imgs.length,
  )
  imgs.push(GALLERIES[randomGallery].imgs[randomImgNum])
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

  const displayNextImg = useCallback(() => {
    if (currentImgNum + 1 === imgs.length) return
    setImage(imgs[++currentImgNum])
    resetCaptionTimer()
  }, [currentImgNum, imgs])

  const displayPrevImg = useCallback(() => {
    if (currentImgNum - 1 === -1) return
    setImage(imgs[--currentImgNum])
  }, [currentImgNum, imgs])

  useEffect(() => {
    const navByArrowKeys = e => {
      if (e.code === 'ArrowRight') {
        displayNextImg()
      } else if (e.code === 'ArrowLeft') {
        displayPrevImg()
      } else return
    }
    window.addEventListener('keydown', navByArrowKeys)

    return () => {
      window.removeEventListener('keydown', navByArrowKeys)
    }
  }, [displayNextImg, displayPrevImg])

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
              role="button"
              tabIndex="0"
              className={`nav-arrow ${
                currentImgNum === 0 ? 'nav-btn-inactive' : 'nav-btn-active'
              }`}
              title="View previous image"
              onClick={displayPrevImg}
              onKeyDown={displayPrevImg}
              style={{ color: color }}
            >
              ‹
            </div>
            <div
              id="arrow-right"
              role="button"
              tabIndex="0"
              className={`nav-arrow ${
                currentImgNum + 1 === imgs.length
                  ? 'nav-btn-inactive'
                  : 'nav-btn-active'
              }`}
              title="View next image"
              onClick={displayNextImg}
              onKeyDown={displayNextImg}
              style={{ color: color }}
            >
              ›
            </div>
          </>
        )}
        <img id="display-img" src={image.file} alt="" />
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
