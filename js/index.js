const GALLERY_NAMES = ['Botanical', 'Finland', 'Forest', 'Ireland', 'Psycho'];

// GLOBAL VARIABLES
let activeGallery;
let prevGallery;
let currentImgNum;

// PAGE ELEMENTS
const HEADER = document.querySelector('header');
const HEADING = document.querySelector('header h1');
const SUB_HEADING = document.querySelector('#subheading');
const ABOUT = document.querySelector('#about');
const BOTANICAL = document.querySelector('.botanical');
const FINLAND = document.querySelector('.finland');
const FOREST = document.querySelector('.forest');
const IRELAND = document.querySelector('.ireland');
const PSYCHO = document.querySelector('.psycho');
const GALLERY_MENU_LINKS = [BOTANICAL, FINLAND, FOREST, IRELAND, PSYCHO];

const NAV_ARROWS = document.querySelectorAll('.nav-arrow');
const PREV_IMG_BTN = document.querySelector('#arrow-left');
const NEXT_IMG_BTN = document.querySelector('#arrow-right');

const IMG_CONTAINER = document.querySelector('#image-container');
const DISPLAY_IMG = document.querySelector('#image-container #display-img');
const IMG_CAPTION = document.querySelector('aside');

const ABOUT_PAGE = document.querySelector('#about-page');
const ABOUT_IMG = document.querySelector('#about-img');

IMG_CAPTION.hidden = true;

// EVENT LISTENERS
ABOUT.addEventListener('click', displayAboutPage);
BOTANICAL.addEventListener('click', function () {
  selectGallery(0);
  displayGallery();
  SUB_HEADING.style.setProperty('filter', 'brightness(100%)');
});
FINLAND.addEventListener('click', function () {
  selectGallery(1);
  displayGallery();
  SUB_HEADING.style.setProperty('filter', 'brightness(125%)');
});
FOREST.addEventListener('click', function () {
  selectGallery(2);
  displayGallery();
  SUB_HEADING.style.setProperty('filter', 'brightness(100%)');
});
IRELAND.addEventListener('click', function () {
  selectGallery(3);
  displayGallery();
  SUB_HEADING.style.setProperty('filter', 'brightness(100%)');
});
PSYCHO.addEventListener('click', function () {
  selectGallery(4);
  displayGallery();
  SUB_HEADING.style.setProperty('filter', 'brightness(100%)');
});
NEXT_IMG_BTN.addEventListener('click', displayNextImg);
PREV_IMG_BTN.addEventListener('click', displayPrevImg);
document.addEventListener('keydown', navByArrowKeys);

// MAIN FUNCTIONS
function displayRandomImg() {
  const randomGallery = Math.floor(Math.random() * 5);
  const imgVar =
    Math.floor(Math.random() * GALLERIES[randomGallery].length) + 1;
  DISPLAY_IMG.style.animation = 'none';
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[randomGallery]}${imgVar}.jpg`;
}

function displayAboutPage() {
  prevGallery = activeGallery;
  if (prevGallery !== undefined) {
    GALLERY_MENU_LINKS[prevGallery].innerText = GALLERY_NAMES[prevGallery];
    GALLERY_MENU_LINKS[prevGallery].style.marginLeft = '';
  }
  ABOUT.innerText = '';
  ABOUT.style.marginLeft = '-1em';
  SUB_HEADING.innerText = 'About';
  SUB_HEADING.style.color = 'var(--default)';
  IMG_CONTAINER.style.setProperty('display', 'none');
  hideNavArrows();
  ABOUT_PAGE.style.setProperty('display', 'block');
  activeGallery = undefined;
}

function selectGallery(key) {
  ABOUT.innerText = 'About';
  ABOUT.style.marginLeft = '';
  prevGallery = activeGallery;
  activeGallery = key;
  if (prevGallery !== undefined) {
    GALLERY_MENU_LINKS[prevGallery].innerText = GALLERY_NAMES[prevGallery];
    GALLERY_MENU_LINKS[prevGallery].style.marginLeft = '';
  }
  SUB_HEADING.innerText = GALLERY_MENU_LINKS[key].innerText;
  GALLERY_MENU_LINKS[key].innerText = '';
  GALLERY_MENU_LINKS[key].style.marginLeft = '-1em';
  SUB_HEADING.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  PREV_IMG_BTN.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  NEXT_IMG_BTN.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  currentImgNum = GALLERIES[key][0];
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[key]}${currentImgNum}.jpg`;
}

function displayGallery() {
  ABOUT_PAGE.style.setProperty('display', 'none');
  IMG_CONTAINER.style.setProperty('display', 'flex');
  displayNavArrows();
  resetCaptionTimer();
  NEXT_IMG_BTN.style.opacity = 0.75;
  PREV_IMG_BTN.style.opacity = 0.25;
}

function displayNextImg() {
  if (currentImgNum + 1 === GALLERIES[activeGallery].length) {
    NEXT_IMG_BTN.style.opacity = 0.25;
  }
  if (currentImgNum + 1 > GALLERIES[activeGallery].length) return;
  currentImgNum++;
  PREV_IMG_BTN.style.opacity = 0.75;
  resetAnimation(DISPLAY_IMG);
  resetCaptionTimer();
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[activeGallery]}${currentImgNum}.jpg`;
}

function displayPrevImg() {
  if (currentImgNum - 1 === 1) {
    PREV_IMG_BTN.style.opacity = 0.25;
  }
  if (currentImgNum - 1 === 0) return;
  currentImgNum--;
  NEXT_IMG_BTN.style.opacity = 0.75;
  resetAnimation(DISPLAY_IMG);
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

// HELPER FUNCTIONS
function navByArrowKeys(e) {
  if (activeGallery !== undefined) {
    if (e.code === 'ArrowRight') {
      displayNextImg();
    } else if (e.code === 'ArrowLeft') {
      displayPrevImg();
    } else return;
  } else return;
}

function resetAnimation(el) {
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}

function resetCaptionTimer() {
  IMG_CAPTION.hidden = true;
  setTimeout(function () {
    IMG_CAPTION.hidden = false;
  }, 2000);
}

// ON LOAD
displayRandomImg();
