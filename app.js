const cardsArray = [
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
];

cardsArray.sort(() => 0.5 - Math.random());

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

const grid = document.querySelector(".grid");
const result = document.querySelector("#result");

function initBoard() {
  cardsArray.forEach((item, i) => {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
    console.log(card);
  });
}

console.log(cardsArray);

function checkMatch() {
  const cards = document.querySelectorAll(".grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (cardsChosen[0] === cardsChosen[1]) {
    console.log("match");
    cards[optionOneId].setAttribute("src", "img/white.png");
    cards[optionTwoId].setAttribute("src", "img/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("sorry try again");
  }
  cardsChosen = [];
  cardsChosenIds = [];
  result.innerHTML = cardsWon.length;

  if (cardsWon.length === cardsArray.length / 2) {
    result.innerHTML = "congrats you won";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  if (cardsChosenIds.includes(cardId)) {
    return; // card has already been selected, ignore
  }

  if (cardsChosenIds.length > 1 && cardsChosen.length > 1) {
    return; // if person clicks on more than 2 cards, ignore
  }

  cardsChosen.push(cardsArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen, cardsChosenIds);

  this.setAttribute("src", cardsArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
initBoard();
