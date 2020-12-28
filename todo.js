const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function paintToDo(text) {
  const makeLi = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  makeLi.appendChild(delBtn);
  makeLi.appendChild(span);
  toDoList.appendChild(makeLi);
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };
  toDos = push(toDoObj);
}

function handleSubmit(event) {
  event.preventDefault(); //기본 동작 막기
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadToDos = localStorage.getItem(TODOS_LS);
  if (loadToDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
