const ratingStars = document.querySelectorAll(".btn");
const btnSubmit = document.getElementById("submitButton");
const results = document.getElementById("starsRating");
const mainCard = document.querySelector(".mainCard");
const thanksCard = document.querySelector(".thanksCard");
const activeButton = document.querySelectorAll(".btn", ".active");
let rating;

const handleClick = (e) => {
  activeButton.forEach((btn) => {
    btn.classList.remove("active");
  });
  const buttonTarget = e.target;
  rating = buttonTarget.value;
  buttonTarget.classList.add("active");
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
