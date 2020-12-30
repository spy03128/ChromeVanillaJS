const body = document.querySelector("body");

const IMG_NUMBER = 5;

// function handleImgLoad() {
//   console.log("finished loading");
// }

function paintImeage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  //   image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * 5);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImeage(randomNumber);
}

init();
