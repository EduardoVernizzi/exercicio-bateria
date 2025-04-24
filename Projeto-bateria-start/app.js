
let buttons = document.querySelectorAll('.drum')
const colorArray = ['#52BE80', '#F0B27A', '#F1C40F', '#707B7C', '#76448A', '#1A5276'];


for (let i = 0; i < buttons.length; i++) {

  document.querySelectorAll('button')[i].addEventListener('click', function () {

    let buttonInnerHtml = this.innerHTML
    
    makeSounds(buttonInnerHtml)

  })

}

document.addEventListener('keydown', function (event) {
  makeSounds(event.key)
})


function makeSounds(key) {
  let randomColor = Math.floor(Math.random() * colorArray.length);
  let button = document.querySelector("." + key); // Seleciona o botão pela tecla

  switch (key) {
    case "w":
      new Audio('./sounds/crash.mp3').play();
      break;
    case "a":
      new Audio('./sounds/kick-bass.mp3').play();
      break;
    case "s":
      new Audio('./sounds/snare.mp3').play();
      break;
    case "d":
      new Audio('./sounds/tom-1.mp3').play();
      break;
    case "j":
      new Audio('./sounds/tom-2.mp3').play();
      break;
    case "k":
      new Audio('./sounds/tom-3.mp3').play();
      break;
    case "l":
      new Audio('./sounds/tom-4.mp3').play();
      break;
    default:
      console.log("Tecla inválida: " + key);
      return;
  }

  // Aplica cor se o botão correspondente existir
  if (button) {
    button.style.color = colorArray[randomColor];
  }
}

