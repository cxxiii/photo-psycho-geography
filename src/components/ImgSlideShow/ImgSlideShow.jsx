import React, { useState, useEffect, useCallback } from 'react';
import styles from './ImgSlideShow.module.css';
import GALLERIES from '../../galleries';

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
    <div className={styles.ImgSlideShow_container}>
      {showNavArrows && (
        <>
          {currentImgNum !== 0 && (
            <div
              className={styles.ImgSlideShow_arrowLeft}
              role="button"
              tabIndex={0}
              title="View previous image"
              onClick={displayPrevImg}
              onKeyDown={displayPrevImg}
              style={{ color }}
            >
              ‹
            </div>
          )}
          {currentImgNum + 1 !== imgs.length && (
            <div
              className={styles.ImgSlideShow_arrowRight}
              role="button"
              tabIndex={0}
              title="View next image"
              onClick={displayNextImg}
              onKeyDown={displayNextImg}
              style={{ color }}
            >
              ›
            </div>
          )}
        </>
      )}
      <img className={styles.ImgSlideShow_image} src={image.file} alt="" />
      {showCaptions && image.title && (
        <aside className={styles.ImgSlideShow_caption}>
          <span id="img-title">{image.title} </span>
          {image.location && (
            <>
              <span id="img-title-loc-sep">/ </span>
              <span id="img-location">{image.location}</span>
            </>
          )}
        </aside>
      )}
    </div>
  );
};

export default ImgSlideShow;
