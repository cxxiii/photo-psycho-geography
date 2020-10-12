// UTILITY FUNCTIONS
function displayGallery() {
  ABOUT_PAGE.style.setProperty('display', 'none');
  IMG_CONTAINER.style.setProperty('display', 'flex');
  displayNavArrows();
  resetCaptionTimer();
  NEXT_IMG_BTN.style.opacity = 0.75;
  PREV_IMG_BTN.style.opacity = 0.25;
}

function setPrevGallery() {
  prevGallery = activeGallery;
  if (prevGallery !== undefined) {
    GALLERY_MENU_LINKS[prevGallery].innerText = GALLERY_NAMES[prevGallery];
    GALLERY_MENU_LINKS[prevGallery].style.marginLeft = '';
  }
}

function displayGalleryImg() {
  resetCaptionTimer();
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[activeGallery]}${currentImgNum}.jpg`;
}

function displayNavArrows() {
  for (i = 0; i < NAV_ARROWS.length; i++) {
    NAV_ARROWS[i].style.setProperty('display', 'initial');
  }
}

function hideNavArrows() {
  for (i = 0; i < NAV_ARROWS.length; i++) {
    NAV_ARROWS[i].style.setProperty('display', 'none');
  }
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

function setGalleryColor(dirStr) {
  SUB_HEADING.style.color = `var(--${dirStr.slice(0, 3)})`;
  PREV_IMG_BTN.style.color = `var(--${dirStr.slice(0, 3)})`;
  NEXT_IMG_BTN.style.color = `var(--${dirStr.slice(0, 3)})`;
}

function resetCaptionTimer() {
  IMG_CAPTION.hidden = true;
  setTimeout(function () {
    IMG_CAPTION.hidden = false;
  }, 2000);
}
