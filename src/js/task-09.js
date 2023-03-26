const changeColor = document.querySelector(".color");
const clickButton = document.querySelector(".change-color")
const body = document.querySelector("body");

function changeBackgroundColor() {
  const color = getRandomHexColor();
  changeColor.textContent = color;
  body.style.backgroundColor = color

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

clickButton.addEventListener("click", changeBackgroundColor);
