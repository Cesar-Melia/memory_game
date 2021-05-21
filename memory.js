const cardArray = [
  {
    id: 1,
    name: "earth",
    img: "images/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "images/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "images/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "images/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "images/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "images/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "images/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "images/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "images/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "images/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "images/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "images/uranus.svg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const div$$ = document.querySelector("[data-function='grid']");
let attempts$$ = [];
let card1$$ = "";
let card2$$ = "";

const check = (event) => {
  const click$$ = { name: event.target.name, id: event.target.id };
  attempts$$.push(click$$);

  console.log(attempts$$[0]);
  console.log(attempts$$[1]);

  if (attempts$$[1] != undefined) {
    card1$$ = document.body.querySelector(`[id='${event.target.id}']`); //// No me coge #
    card1$$.setAttribute("src", `images/${event.target.name}.svg`);

    if (attempts$$[0].id === attempts$$[1].id) {
      alert("No puedes volver a pulsar la misma carta");
    }
  } else {
    card2$$ = document.body.querySelector(`[id='${event.target.id}']`); //// No me coge #
    card2$$.setAttribute("src", `images/${event.target.name}.svg`);
  }

  if (attempts$$.length === 2) {
    // let delay$$ = setTimeOut(hideCard(card$$), 3000);
    hideCard(card1$$);
    hideCard(card2$$);
    attempts$$.pop();
    attempts$$.pop();
  }
};
for (let i = 0; i < cardArray.length; i++) {
  const img$$ = document.createElement("img");
  img$$.setAttribute("src", "images/universe.svg");
  img$$.setAttribute("id", cardArray[i].id);
  img$$.setAttribute("name", cardArray[i].name);
  div$$.appendChild(img$$);
  div$$.addEventListener("click", check);

  console.log(img$$);
}

const hideCard = (cardToHide) => {
  cardToHide.setAttribute("src", "images/universe.svg");
};
