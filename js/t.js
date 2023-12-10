const controlsContainer = document.querySelector("#controls");
const input = document.querySelector("#controls > input")
const btmCreate = document.querySelector('[data-create]');
const btmDestroy = document.querySelector('[data-destroy]');
const boxesForAdd = document.querySelector("#boxes");
btmCreate.addEventListener("click", addDiv);
function addDiv(){
    const inputData = input.value;
    let widthBoxChild = 20;
for (let i=0; i< inputData; i++){
    widthBoxChild += 10;
    const divAdd = `<div width = "${widthBoxChild.toString()}" hight = "${widthBoxChild.toString()}">1</div>`
boxesForAdd.insertAdjacentHTML("beforeend", divAdd)
}
// inputData.reset();
console.log(boxesForAdd)
}


