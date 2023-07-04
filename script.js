function randomRGB() {
  let num = Math.floor(Math.random() * 1000);
  num = num % 256;
  return num;
}

function setColor() {
  let red = randomRGB();
  let blue = randomRGB();
  let green = randomRGB();

  let h3 = document.querySelector("h3");
  h3.innerText = `RGB ( ${red}, ${green} ,${blue})`;

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

  let btn = document.querySelector(".generate");
  btn.style.color = `rgb(${red},${green},${blue})`;
}

let btn = document.querySelector(".generate");
btn.addEventListener("click", setColor);
