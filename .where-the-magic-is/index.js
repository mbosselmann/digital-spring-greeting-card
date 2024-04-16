const card = document.querySelector(".card");
const flower = document.querySelector(".flower");

card.addEventListener("click", () => {
  card.classList.toggle("flipcard");

  if (flower) {
    flower.classList.toggle("rotate");
  }
});
