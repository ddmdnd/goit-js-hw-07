const controlsContainer = document.querySelector("#controls");
const input = document.querySelector("#controls > input")
const btmCreate = document.querySelector('[data-create]');
const btmDestroy = document.querySelector('[data-destroy]');
const boxesForAdd = document.querySelector("#boxes");
btmCreate.addEventListener("click", addDiv);
btmDestroy.addEventListener("click", deleteDiv);
btmCreate.style.background = "#4E75FF";
btmDestroy.style.background = "#FF4E4E";
function addDiv(){
    boxesForAdd.innerHTML = "";
    const inputData = input.value;
    let widthBoxChild = 20;
for (let i=0; i< inputData; i++){
    // widthBoxChild += 10;
    const divAdd = `<div></div>`;
boxesForAdd.insertAdjacentHTML("beforeend", divAdd)
}
input.value ="";
const divBackgroundColor = document.querySelectorAll("#boxes > div");
for( const div of divBackgroundColor){
widthBoxChild += 10;
div.style.width = `${widthBoxChild}px`;
div.style.height = `${widthBoxChild}px`;
div.style.background = getRandomHexColor();
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

