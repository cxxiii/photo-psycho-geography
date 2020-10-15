// Written by Nikolay Rademacher, github.com/cxxiii

// GLOBAL VARIABLES
let activeGallery;
let prevGallery;
let currentImgNum;

// PAGE ELEMENTS
const SUB_HEADING = document.querySelector('#subheading');

const ABOUT = document.querySelector('#about');
const BOTANICAL = document.querySelector('.botanical');
const FINLAND = document.querySelector('.finland');
const FOREST = document.querySelector('.forest');
const IRELAND = document.querySelector('.ireland');
const PSYCHO = document.querySelector('.psycho');
const GALLERY_MENU_LINKS = [BOTANICAL, FINLAND, FOREST, IRELAND, PSYCHO];

const PREV_IMG_BTN = document.querySelector('#arrow-left');
const NEXT_IMG_BTN = document.querySelector('#arrow-right');

const IMG_CONT_WRAPPER = document.querySelector('#img-cont-wrapper');
const IMG_CONTAINER = document.querySelector('#image-container');
const DISPLAY_IMG = document.querySelector('#image-container #display-img');
const IMG_CAPTION = document.querySelector('aside');

const IMG_TITLE = document.querySelector('#img-title');
const IMG_LOCATION = document.querySelector('#img-location');
const IMG_TITLE_LOC_SEP = document.querySelector('#img-title-loc-sep');

const ABT_PG_WRAPPER = document.querySelector('#abt-pg-wrapper');
const ABOUT_PAGE = document.querySelector('#about-page');

IMG_CAPTION.hidden = true;
IMG_TITLE_LOC_SEP.hidden = true;

// EVENT LISTENERS
ABOUT.addEventListener('click', displayAboutPage);
BOTANICAL.addEventListener('click', () => {
  selectGallery(0);
});
FINLAND.addEventListener('click', () => {
  selectGallery(1);
});
FOREST.addEventListener('click', () => {
  selectGallery(2);
});
IRELAND.addEventListener('click', () => {
  selectGallery(3);
});
PSYCHO.addEventListener('click', () => {
  selectGallery(4);
});
NEXT_IMG_BTN.addEventListener('click', displayNextImg);
PREV_IMG_BTN.addEventListener('click', displayPrevImg);
document.addEventListener('keydown', navByArrowKeys);

// MAIN FUNCTIONS
function displayRandomImg() {
  const randomGallery = Math.floor(Math.random() * 5);
  currentImgNum = Math.floor(
    Math.random() * GALLERIES[randomGallery].imgs.length
  );
  DISPLAY_IMG.src = `/${GALLERIES.dirName}/${GALLERIES[randomGallery].dirName}/${GALLERIES[randomGallery].imgs[currentImgNum].file}`;
}

function displayAboutPage() {
  setPrevGallery();
  activeGallery = undefined;

  ABOUT.innerText = '';
  ABOUT.classList.add('correct-offset');
  SUB_HEADING.innerText = 'About';
  SUB_HEADING.className = 'default';

  IMG_CONT_WRAPPER.classList.add('no-display');
  ABT_PG_WRAPPER.classList.remove('no-display');
}

function selectGallery(key) {
  setPrevGallery();
  activeGallery = key;

  ABOUT.innerText = 'About';
  ABOUT.classList.remove('correct-offset');
  SUB_HEADING.innerText = GALLERY_MENU_LINKS[key].innerText;
  GALLERY_MENU_LINKS[key].innerText = '';
  GALLERY_MENU_LINKS[key].classList.add('correct-offset');
  setGalleryColor(GALLERIES[key].dirName);

  currentImgNum = GALLERIES[key].imgs.indexOf(GALLERIES[key].imgs[0]);
  DISPLAY_IMG.src = `/${GALLERIES.dirName}/${GALLERIES[key].dirName}/${GALLERIES[key].imgs[currentImgNum].file}`;
  displayGallery();
}

function displayNextImg() {
  if (currentImgNum + 2 === GALLERIES[activeGallery].imgs.length) {
    NEXT_IMG_BTN.classList.replace('nav-btn-active', 'nav-btn-inactive');
  }
  if (currentImgNum + 1 === GALLERIES[activeGallery].imgs.length) return;
  currentImgNum++;
  PREV_IMG_BTN.classList.replace('nav-btn-inactive', 'nav-btn-active');
  displayGalleryImg();
}

function displayPrevImg() {
  if (currentImgNum - 1 === 0) {
    PREV_IMG_BTN.classList.replace('nav-btn-active', 'nav-btn-inactive');
  }
  if (currentImgNum - 1 === -1) return;
  currentImgNum--;
  NEXT_IMG_BTN.classList.replace('nav-btn-inactive', 'nav-btn-active');
  displayGalleryImg();
}

// ON LOAD
displayRandomImg();
