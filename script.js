// DATA CONSTANTS
const GALLERIES = [
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
  ],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
];
const DIRECTORIES = {
  0: 'botanical/b',
  1: 'finland/f',
  2: 'forest/fo',
  3: 'ireland/irl',
  4: 'psycho/p',
};

// GLOBAL VARIABLES
let activeGallery;
let currentImg;

// PAGE ELEMENTS
const HEADER = document.querySelector('header');
const HEADING = document.querySelector('header h1');
const SUB_HEADING = document.querySelector('#pp');
const SUB_HEADING_PSY = document.querySelector('#psycho');
const ABOUT = document.querySelector('#about');
const BOTANICAL = document.querySelector('.botanical');
const FINLAND = document.querySelector('.finland');
const FOREST = document.querySelector('.forest');
const IRELAND = document.querySelector('.ireland');
const PSYCHO = document.querySelector('.psycho');

const DISPLAY_IMG = document.querySelector('#image-container #display-img');
const NAV_ARROWS = document.querySelectorAll('.nav-arrow');
const PREV_IMG_BTN = document.querySelector('#arrow-left');
const NEXT_IMG_BTN = document.querySelector('#arrow-right');
const RETURN_BTN = document.querySelector('#return-arrow');

const IMG_CONTAINER = document.querySelector('#image-container');
const IMG_CAPTION = document.querySelector('aside');
const ABOUT_PAGE = document.querySelector('#about-page');

const GALLERY_COLOR = document.getElementsByClassName('gal-col');

IMG_CAPTION.hidden = true;

HEADER.hidden = false;

// EVENT LISTENERS
ABOUT.addEventListener('click', displayAboutPage);
BOTANICAL.addEventListener('click', function () {
  selectGallery(0);
  displayGallery();
});
FINLAND.addEventListener('click', function () {
  selectGallery(1);
  displayGallery();
});
FOREST.addEventListener('click', function () {
  selectGallery(2);
  displayGallery();
});
IRELAND.addEventListener('click', function () {
  selectGallery(3);
  displayGallery();
});
PSYCHO.addEventListener('click', function () {
  selectGallery(4);
  displayGallery();
});
NEXT_IMG_BTN.addEventListener('click', displayNextImg);
PREV_IMG_BTN.addEventListener('click', displayPrevImg);
document.addEventListener('keydown', navByArrowKeys);

// FUNCTIONS

function displayAboutPage() {
  SUB_HEADING.style.color = 'var(--default)';
  IMG_CONTAINER.style.setProperty('display', 'none');
  hideNavArrows();
  ABOUT_PAGE.style.setProperty('display', 'initial');
  activeGallery = undefined;
}

function resetAnimation() {
  DISPLAY_IMG.style.animation = 'none';
  DISPLAY_IMG.offsetHeight; /* trigger reflow */
  DISPLAY_IMG.style.animation = null;
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

function resetCaptionTimer() {
  IMG_CAPTION.hidden = true;
  setTimeout(function () {
    IMG_CAPTION.hidden = false;
  }, 3000);
}

function displayGallery() {
  ABOUT_PAGE.style.setProperty('display', 'none');
  IMG_CONTAINER.style.setProperty('display', 'flex');
  displayNavArrows();
  resetCaptionTimer();
  NEXT_IMG_BTN.style.opacity = 0.75;
  PREV_IMG_BTN.style.opacity = 0.25;
}

function selectGallery(key) {
  activeGallery = key;
  SUB_HEADING.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  PREV_IMG_BTN.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  NEXT_IMG_BTN.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  setGalleryColorTxt('var(--default)');
  // setTimeout(function () {
  //   setGalleryColorTxt(`var(--${DIRECTORIES[key].slice(0, 3)})`);
  // }, 4000);
  setGalleryColorTxt(`var(--${DIRECTORIES[key].slice(0, 3)})`);
  psychofy(DIRECTORIES[key]);
  currentImg = GALLERIES[key][0];
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[key]}${currentImg}.jpg`;
}

function setGalleryColorTxt(str) {
  // setTimeout(function () {
  for (i = 0; i < GALLERY_COLOR.length; i++) {
    GALLERY_COLOR[i].style.color = str;
  }
  // }, 4000);
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

function psychofy(str) {
  if (str.includes('psy')) {
    SUB_HEADING.classList.add('psy-text');
    SUB_HEADING_PSY.classList.add('offset');
    NEXT_IMG_BTN.classList.add('psy-text');
  } else {
    SUB_HEADING.classList.remove('psy-text');
    SUB_HEADING_PSY.classList.remove('offset');
    NEXT_IMG_BTN.classList.remove('psy-text');
    PREV_IMG_BTN.classList.remove('psy-text');
  }
}

function displayNextImg() {
  if (currentImg + 1 === GALLERIES[activeGallery].length) {
    NEXT_IMG_BTN.style.opacity = 0.25;
    NEXT_IMG_BTN.classList.remove('psy-text');
    PREV_IMG_BTN.classList.add('psy-text');
  }
  if (currentImg + 1 > GALLERIES[activeGallery].length) return;
  // setGalleryColorTxt('var(--default)');
  // setGalleryColorTxt(`var(--${DIRECTORIES[activeGallery].slice(0, 3)})`);
  currentImg++;
  PREV_IMG_BTN.style.opacity = 0.75;
  resetAnimation();
  resetCaptionTimer();
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[activeGallery]}${currentImg}.jpg`;
}

function displayPrevImg() {
  if (currentImg - 1 === 1) {
    PREV_IMG_BTN.style.opacity = 0.25;
    PREV_IMG_BTN.classList.remove('psy-text');
    NEXT_IMG_BTN.classList.add('psy-text');
  }
  if (currentImg - 1 === 0) return;
  currentImg--;
  NEXT_IMG_BTN.style.opacity = 0.75;
  resetAnimation();
  resetCaptionTimer();
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[activeGallery]}${currentImg}.jpg`;
}

function displayRandomImg() {
  let randomGallery = Math.floor(Math.random() * 4);
  let imgVar = Math.floor(Math.random() * GALLERIES[randomGallery].length) + 1;
  DISPLAY_IMG.style.animation = 'none';
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[randomGallery]}${imgVar}.jpg`;
}

displayRandomImg();
