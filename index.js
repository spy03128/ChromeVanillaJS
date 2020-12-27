// console.log('Im Working. Im JS. Im Beautiful. Im worth it')

// const a = 221; //수정불가능, 기본적으로 사용
// let b = a-5;
// a = 4;
// console.log(b, a);

// const what = "jihyeon";
// console.log(what);

// function sayhello(name, age){
//     // console.log('Hello!', name," You have ",age," years of age.");
//     console.log(`Hello ${name} you are ${age} years old.`);
// }

// sayhello("Nicolas",15);
// console.log()

// const title = document.getElementById("title")

// console.dir(title);
// console.error("Fuck");
// title.innerHTML = "Hi From JS";
// title.style.color = 'white';

// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#D6A2E8";

// function handleClick() {
//   // console.log("I have been resized");
//   // console.log(title.style.color);
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// // window.addEventListener("resize", handleResize); //handleResize() 이렇게하면 바로 적용되는것

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }

// init();

// const age = prompt("How old are you");

// console.log(age);

// if (age >= 18 && age <= 21) {
//   console.log("You can drink but you should not");
// } else if (age > 21) {
//   console.log("go ahed");
// } else {
//   console.log("too young");
// }

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //   const currentClass = title.className;

  //1번으로 사용하기
  //   const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if (hasClass) {
  //     title.classList.remove(CLICKED_CLASS);
  //   } else {
  //     title.classList.add(CLICKED_CLASS);
  //   }

  //2번으로 사용하기 toggle
  title.classList.toggle(CLICKED_CLASS);
}
//   if (currentClass !== CLICKED_CLASS) {
//     title.classList.add(CLICKED_CLASS);
//   } else {
//     title.classList.remove(CLICKED_CLASS);
//   }
// }

function init() {
  title.addEventListener("click", handleClick);
}

init();
