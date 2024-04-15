const card = document.querySelector(".card");
const flower = document.querySelector(".flower");

card.addEventListener("click", () => {
  card.classList.toggle("flipcard");
  flower.classList.toggle("rotate");
});
