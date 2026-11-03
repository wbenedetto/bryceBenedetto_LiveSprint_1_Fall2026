(function () {
  "use strict";

  const btnRevealCat = document.getElementById("btn-reveal-cat");
  const btnRevealDog = document.getElementById("btn-reveal-dog");
  const btnRevealCow = document.getElementById("btn-reveal-cow");

  const btnHideCat = document.getElementById("btn-hide-cat");
  const btnHideDog = document.getElementById("btn-hide-dog");
  const btnHideCow = document.getElementById("btn-hide-cow");

  const animalCardCat = document.getElementById("animal-card-cat");
  const animalCardDog = document.getElementById("animal-card-dog");
  const animalCardCow = document.getElementById("animal-card-cow");

  btnRevealCat.addEventListener("click", (event) => {
    animalCardCat.classList.remove("hidden");
  });

  btnRevealDog.addEventListener("click", (event) => {
    animalCardDog.classList.remove("hidden");
  });

  btnRevealCow.addEventListener("click", (event) => {
    animalCardCow.classList.remove("hidden");
  });

  btnHideCat.addEventListener("click", () => {
    animalCardCat.classList.add("hidden");
  });

  btnHideDog.addEventListener("click", () => {
    animalCardDog.classList.add("hidden");
  });

  btnHideCow.addEventListener("click", () => {
    animalCardCow.classList.add("hidden");
  });
})();
