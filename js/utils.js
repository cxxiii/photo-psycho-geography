// Written by Nikolay Rademacher, github.com/cxxiii

// HELPER FUNCTIONS
function displayGallery() {
  ABT_PG_WRAPPER.classList.add('no-display');
  IMG_CONT_WRAPPER.classList.remove('no-display');
  displayNavArrows();
  setImgCaption();
}

function setPrevGallery() {
  prevGallery = activeGallery;
  if (prevGallery !== undefined) {
    GALLERY_MENU_LINKS[prevGallery].innerText = GALLERIES[prevGallery].dirName;
    GALLERY_MENU_LINKS[prevGallery].classList.remove('correct-offset');
  }
}

function displayGalleryImg() {
  DISPLAY_IMG.src = `/${GALLERIES.dirName}/${GALLERIES[activeGallery].dirName}/${GALLERIES[activeGallery].imgs[currentImgNum].file}`;
  setImgCaption();
}

function displayNavArrows() {
  NEXT_IMG_BTN.classList.remove('no-display');
  PREV_IMG_BTN.classList.remove('no-display');
  NEXT_IMG_BTN.classList.replace('nav-btn-inactive', 'nav-btn-active');
  PREV_IMG_BTN.classList.replace('nav-btn-active', 'nav-btn-inactive');
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
  }, 1000);
}

function setGalleryColor(dirStr) {
  SUB_HEADING.className = `${dirStr.toLowerCase().slice(0, 3)}`;
  NEXT_IMG_BTN.classList.remove('bot', 'fin', 'for', 'ire', 'psy');
  NEXT_IMG_BTN.classList.add(`${dirStr.toLowerCase().slice(0, 3)}`);
  PREV_IMG_BTN.classList.remove('bot', 'fin', 'for', 'ire', 'psy');
  PREV_IMG_BTN.classList.add(`${dirStr.toLowerCase().slice(0, 3)}`);
}
