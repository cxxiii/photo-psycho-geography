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

const ABOUT = document.querySelector('#about');
const BOTANICAL = document.querySelector('.botanical');
const FINLAND = document.querySelector('.finland');
const FOREST = document.querySelector('.forest');
const IRELAND = document.querySelector('.ireland');
const PSYCHO = document.querySelector('.psycho');

const DISPLAY_IMG = document.querySelector('#display-img');
const NAV_ARROWS = document.querySelectorAll('.nav-arrow');
const PREV_IMG_BTN = document.querySelector('#arrow-left');
const NEXT_IMG_BTN = document.querySelector('#arrow-right');

const IMG_CONTAINER = document.querySelector('#image-container');
const ABOUT_PAGE = document.querySelector('#about-page');

let activeGallery;
let currentImg;

document.addEventListener('keydown', navByArrowKeys);

function navByArrowKeys(e) {
  if (e.code === 'ArrowRight') {
    displayNextImg();
  } else if (e.code === 'ArrowLeft') {
    displayPrevImg();
  } else {
    return;
  }
}

NAV_ARROWS.hidden = true;
PREV_IMG_BTN.hidden = true;
NEXT_IMG_BTN.hidden = true;
ABOUT_PAGE.hidden = true;

ABOUT.addEventListener('click', function () {
  IMG_CONTAINER.style.setProperty('display', 'none');
  ABOUT_PAGE.hidden = false;
});
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

function navByArrowKeys(e) {
  if (e.code === 'ArrowRight') {
    displayNextImg();
  } else if (e.code === 'ArrowLeft') {
    displayPrevImg();
  } else {
    return;
  }
}

function displayGallery() {
  ABOUT_PAGE.hidden = true;
  IMG_CONTAINER.style.setProperty('display', 'flex');
}

function selectGallery(key) {
  activeGallery = key;
  PREV_IMG_BTN.hidden = false;
  NEXT_IMG_BTN.hidden = false;
  PREV_IMG_BTN.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  NEXT_IMG_BTN.style.color = `var(--${DIRECTORIES[key].slice(0, 3)})`;
  psychofy(DIRECTORIES[key]);
  currentImg = GALLERIES[key][0];
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[key]}${currentImg}.jpg`;
}

function psychofy(str) {
  if (str.includes('psy')) {
    NEXT_IMG_BTN.classList.add('offset');
    PREV_IMG_BTN.classList.add('psy-arrow');
  } else {
    NEXT_IMG_BTN.classList.remove('offset');
    PREV_IMG_BTN.classList.remove('psy-arrow');
  }
}

function displayNextImg() {
  if (currentImg + 1 === GALLERIES[activeGallery].length) {
    NEXT_IMG_BTN.style.opacity = 0.25;
    NEXT_IMG_BTN.classList.remove('offset');
  }
  if (currentImg + 1 > GALLERIES[activeGallery].length) return;
  currentImg++;
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[activeGallery]}${currentImg}.jpg`;
  PREV_IMG_BTN.style.opacity = 0.75;
  console.log(DISPLAY_IMG.src);
}

function displayPrevImg() {
  if (currentImg - 1 === 1) {
    PREV_IMG_BTN.style.opacity = 0.25;
    PREV_IMG_BTN.classList.remove('psy-arrow');
  }
  if (currentImg - 1 === 0) return;
  currentImg--;
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[activeGallery]}${currentImg}.jpg`;
  NEXT_IMG_BTN.style.opacity = 0.75;
  console.log(DISPLAY_IMG.src);
}

function displayRandomImg() {
  let randomGallery = Math.floor(Math.random() * 4);
  let imgVar = Math.floor(Math.random() * GALLERIES[randomGallery].length) + 1;
  DISPLAY_IMG.src = `/Galleries/${DIRECTORIES[randomGallery]}${imgVar}.jpg`;
}

displayRandomImg();
