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

const NAV_ARROWS = document.querySelectorAll('.nav-arrow');
const PREV_IMG_BTN = document.querySelector('#arrow-left');
const NEXT_IMG_BTN = document.querySelector('#arrow-right');

const IMG_CONTAINER = document.querySelector('#image-container');
const DISPLAY_IMG = document.querySelector('#image-container #display-img');
const IMG_CAPTION = document.querySelector('aside');

const ABOUT_PAGE = document.querySelector('#about-page');

IMG_CAPTION.hidden = true;

// EVENT LISTENERS
ABOUT.addEventListener('click', displayAboutPage);
BOTANICAL.addEventListener('click', function () {
  selectGallery(0);
  SUB_HEADING.style.setProperty('filter', 'brightness(125%)');
});
FINLAND.addEventListener('click', function () {
  selectGallery(1);
  SUB_HEADING.style.setProperty('filter', 'brightness(175%)');
});
FOREST.addEventListener('click', function () {
  selectGallery(2);
  SUB_HEADING.style.setProperty('filter', 'brightness(125%)');
});
IRELAND.addEventListener('click', function () {
  selectGallery(3);
  SUB_HEADING.style.setProperty('filter', 'brightness(100%)');
});
PSYCHO.addEventListener('click', function () {
  selectGallery(4);
  SUB_HEADING.style.setProperty('filter', 'brightness(100%)');
});
NEXT_IMG_BTN.addEventListener('click', displayNextImg);
PREV_IMG_BTN.addEventListener('click', displayPrevImg);
document.addEventListener('keydown', navByArrowKeys);

// MAIN FUNCTIONS
function displayRandomImg() {
  const randomGallery = Math.floor(Math.random() * 5);
  currentImgNum =
    Math.floor(Math.random() * GALLERIES[randomGallery].length) + 1;
  DISPLAY_IMG.style.animation = 'none';
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[randomGallery]}${currentImgNum}.jpg`;
}

function displayAboutPage() {
  setPrevGallery();
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
  setPrevGallery();
  activeGallery = key;
  SUB_HEADING.innerText = GALLERY_MENU_LINKS[key].innerText;
  GALLERY_MENU_LINKS[key].innerText = '';
  GALLERY_MENU_LINKS[key].style.marginLeft = '-1em';
  setGalleryColor(DIRECTORIES[key]);
  currentImgNum = GALLERIES[key][0];
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[key]}${currentImgNum}.jpg`;
  displayGallery();
}

function displayNextImg() {
  if (currentImgNum + 1 === GALLERIES[activeGallery].length) {
    NEXT_IMG_BTN.style.opacity = 0.25;
  }
  if (currentImgNum + 1 > GALLERIES[activeGallery].length) return;
  currentImgNum++;
  PREV_IMG_BTN.style.opacity = 0.75;
  displayGalleryImg();
}

function displayPrevImg() {
  if (currentImgNum - 1 === 1) {
    PREV_IMG_BTN.style.opacity = 0.25;
  }
  if (currentImgNum - 1 === 0) return;
  currentImgNum--;
  NEXT_IMG_BTN.style.opacity = 0.75;
  displayGalleryImg();
}

// ON LOAD
displayRandomImg();
