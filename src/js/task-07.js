const font = document.querySelector("#font-size-control");
const fontText = document.querySelector("#text");

font.addEventListener('input', () =>{
    fontText.style.fontSize = `${font.value}px`
    });