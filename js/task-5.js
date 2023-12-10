// const containerMainChangeColor = document.querySelector(".widget");
// const colorHyphen = document.querySelector(".color");
// const btmChangeColor = document.querySelector(".change-color");
// btmChangeColor.addEventListener("click", changeColor)
// function changeColor () {
//     btmChangeColor.style.background = getRandomHexColor();
//     function getRandomHexColor() {
//         return `#${Math.floor(Math.random() * 16777215)
//           .toString(16)
//           .padStart(6, 0)}`;
//       }
//       colorHyphen.style.color = getRandomHexColor(); 
// }
const containerMainChangeColor = document.querySelector(".widget");
const colorHyphen = document.querySelector(".color");
const btmChangeColor = document.querySelector(".change-color");
btmChangeColor.addEventListener("click", changeColor)
function changeColor () {
    containerMainChangeColor.style.background = getRandomHexColor();
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }
      colorHyphen.style.color = getRandomHexColor(); 
      colorHyphen.textContent = getRandomHexColor();
}
