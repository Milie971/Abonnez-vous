console.log("connecté");
const icone = document.querySelector("i");
console.log(icone);

icone.addEventListener("click", function () {
  console.log("icone cliqué");
  icone.classList.toggle("fa-face-smile-wink");
  icone.classList.toggle("happy");
});

const btnButton = document.querySelector(".btn");
console.log(btnButton);
btnButton.addEventListener("click", function () {
  console.log("bouton cliqué");
  // btnButton.innerText = "Abonné";
  btnButton.classList.toggle("abonne");
  if (btnButton.innerText === "Abonné") {
    btnButton.innerText = "Abonnez-vous";
  } else {
    console.log("else");
    btnButton.innerText = "Abonné";
  }
});

// j'essai de faire en sorte que si on click sur abonné que le visage change de couleur aussi .

// if (icone.addEventListener("click", function () {
//   console.log("icone cliqué");
//   icone.classList.toggle("fa-face-smile-wink");
//   icone.classList.toggle("happy");
// )}  else {
//   console.log("else");
// }
