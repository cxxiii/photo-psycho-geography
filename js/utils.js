// Written by Nikolay Rademacher, github.com/cxxiii

// HELPER FUNCTIONS
function displayGallery() {
  ABOUT_PAGE.style.setProperty('display', 'none');
  IMG_CONTAINER.style.setProperty('display', 'flex');
  displayNavArrows();
  setImgCaption();
}

function setPrevGallery() {
  prevGallery = activeGallery;
  if (prevGallery !== undefined) {
    GALLERY_MENU_LINKS[prevGallery].innerText = GALLERIES[prevGallery].dirName;
    GALLERY_MENU_LINKS[prevGallery].style.marginLeft = '';
  }
}

function displayGalleryImg() {
  DISPLAY_IMG.src = `/${GALLERIES.dirName}/${GALLERIES[activeGallery].dirName}/${GALLERIES[activeGallery].imgs[currentImgNum].file}`;
  setImgCaption();
}

function displayNavArrows() {
  for (navArrow of NAV_ARROWS) {
    navArrow.style.setProperty('display', 'initial');
  }
  NEXT_IMG_BTN.style.opacity = 0.75;
  PREV_IMG_BTN.style.opacity = 0.25;
}

function navByArrowKeys(e) {
  if (activeGallery !== undefined) {
    if (e.code === 'ArrowRight') {
      displayNextImg();
    } else if (e.code === 'ArrowLeft') {
      displayPrevImg();
    } else return;
  } else return;
}

function setImgCaption() {
  resetCaptionTimer();
  IMG_TITLE.innerText = GALLERIES[activeGallery].imgs[currentImgNum].title;
  if (GALLERIES[activeGallery].imgs[currentImgNum].location) {
    IMG_TITLE_LOC_SEP.hidden = false;
    IMG_LOCATION.innerText =
      GALLERIES[activeGallery].imgs[currentImgNum].location;
  } else {
    IMG_TITLE_LOC_SEP.hidden = true;
    IMG_LOCATION.innerText = '';
  }
}

function resetCaptionTimer() {
  IMG_CAPTION.hidden = true;
  setTimeout(() => {
    IMG_CAPTION.hidden = false;
  }, 1500);
}

function setGalleryColor(dirStr) {
  SUB_HEADING.style.color = `var(--${dirStr.toLowerCase().slice(0, 3)})`;
  PREV_IMG_BTN.style.color = `var(--${dirStr.toLowerCase().slice(0, 3)})`;
  NEXT_IMG_BTN.style.color = `var(--${dirStr.toLowerCase().slice(0, 3)})`;
}

function correctColorBrightness(num) {
  SUB_HEADING.style.setProperty('filter', `brightness(${num}%)`);
  NEXT_IMG_BTN.style.setProperty('filter', `brightness(${num}%)`);
  PREV_IMG_BTN.style.setProperty('filter', `brightness(${num}%)`);
}
