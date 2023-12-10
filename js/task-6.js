const controlsContainer = document.querySelector("#controls");
const input = document.querySelector("#controls > input")
const btmCreate = document.querySelector('[data-create]');
const btmDestroy = document.querySelector('[data-destroy]');
const boxesForAdd = document.querySelector("#boxes");
btmCreate.addEventListener("click", addDiv);
btmDestroy.addEventListener("click", deleteDiv);
function addDiv(){
    boxesForAdd.innerHTML = "";
    const inputData = input.value;
    let widthBoxChild = 20;
for (let i=0; i< inputData; i++){
    widthBoxChild += 10;
    const divAdd = `<div width = "${widthBoxChild.toString()}" hight = "${widthBoxChild.toString()}">1</div>`;
boxesForAdd.insertAdjacentHTML("beforeend", divAdd)
const divBackgroundColor = document.querySelectorAll("#boxes > div")
divBackgroundColor.forEach(element => {
    element.style.background = getRandomHexColor();
});
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function deleteDiv(){
    boxesForAdd.innerHTML = "";
}

