import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import GALLERIES from '../galleries';

const getRandomImg = () => {
  const imgs = [];
  const randomGallery = Math.floor(Math.random() * 5);
  const randomImgNum = Math.floor(
    Math.random() * GALLERIES[randomGallery].imgs.length,
  );
  imgs.push(GALLERIES[randomGallery].imgs[randomImgNum]);
  return imgs;
};

const resetCaptionTimer = () => {
  document.querySelector('aside').hidden = true;
  setTimeout(() => {
    document.querySelector('aside').hidden = false;
  }, 1000);
};

const ImageSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #display-img {
    height: 80vh;
    max-width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    pointer-events: none;
  }

  .nav-arrow {
    position: absolute;
    font-family: 'Cinzel', serif;
    font-size: 4rem;
    cursor: pointer;
    line-height: 0;
    margin: 8rem;
    transition: color ease 0.2s;
  }

  #arrow-right {
    right: 0;
    left: auto;
  }

  #arrow-left {
    left: 0;
    right: auto;
  }

  .nav-btn-active {
    opacity: 1;
  }

  .nav-btn-inactive {
    opacity: 0.33;
    cursor: default;
  }

  aside {
    font-size: 1.3rem;
    font-weight: lighter;
  }

  aside #img-location {
    font-style: italic;
  }
`;

const ImgSlideShow = ({
  imgs = getRandomImg(),
  color,
  showNavArrows,
  showCaptions,
}) => {
  const [image, setImage] = useState(imgs[0]);

  const currentImgNum = imgs.indexOf(image);

  const displayNextImg = useCallback(() => {
    if (currentImgNum + 1 === imgs.length) return;
    setImage(imgs[currentImgNum + 1]);
    resetCaptionTimer();
  }, [currentImgNum, imgs]);

  const displayPrevImg = useCallback(() => {
    if (currentImgNum - 1 === -1) return;
    setImage(imgs[currentImgNum - 1]);
  }, [currentImgNum, imgs]);

  useEffect(() => {
    const navByArrowKeys = e => {
      if (e.code === 'ArrowRight') {
        displayNextImg();
      } else if (e.code === 'ArrowLeft') {
        displayPrevImg();
      }
    };
    window.addEventListener('keydown', navByArrowKeys);

    return () => {
      window.removeEventListener('keydown', navByArrowKeys);
    };
  }, [displayNextImg, displayPrevImg]);

  return (
    <ImageSlider>
      {showNavArrows && (
        <>
          <div
            id="arrow-left"
            role="button"
            tabIndex={0}
            className={`nav-arrow ${
              currentImgNum === 0 ? 'nav-btn-inactive' : 'nav-btn-active'
            }`}
            title="View previous image"
            onClick={displayPrevImg}
            onKeyDown={displayPrevImg}
            style={{ color }}
          >
            ‹
          </div>
          <div
            id="arrow-right"
            role="button"
            tabIndex={0}
            className={`nav-arrow ${
              currentImgNum + 1 === imgs.length
                ? 'nav-btn-inactive'
                : 'nav-btn-active'
            }`}
            title="View next image"
            onClick={displayNextImg}
            onKeyDown={displayNextImg}
            style={{ color }}
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
    </ImageSlider>
  );
};

export default ImgSlideShow;
