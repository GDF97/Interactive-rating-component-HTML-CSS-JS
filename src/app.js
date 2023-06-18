const ratingStars = document.querySelectorAll(".btn");
const btnSubmit = document.getElementById("submitButton");
const results = document.getElementById("starsRating");
const mainCard = document.querySelector(".mainCard");
const thanksCard = document.querySelector(".thanksCard");
let rating;

const handleClick = (e) => {
  const buttonTarget = e.target;
  rating = buttonTarget.value;
};

const showValues = () => {
  if (rating > 0) {
    thanksCard.style.display = "flex";
    mainCard.style.display = "none";
    results.innerHTML = `You selected ${rating} out of 5`;
  } else {
    console.log("error");
  }
};

ratingStars.forEach((button) => {
  button.addEventListener("click", handleClick);
});

btnSubmit.addEventListener("click", showValues);
