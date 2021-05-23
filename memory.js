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
const attempts$$ = document.querySelector("[data-function='attempts']");
const score$$ = document.querySelector("[data-function='score']");

let attemptsValue = 0;
let scoreValue = 0;
let cardsToCompare = [];
let card1$$ = "";
let card2$$ = "";

const manageClick = (event) => {
    const click$$ = { name: event.target.name, id: event.target.id };
    cardsToCompare.push(click$$);
    validateAttempts(cardsToCompare);

    if (cardsToCompare.length === 2) {
        if (card1$$.name !== card2$$.name) {
            delayHide(card1$$, card2$$);
        } else {
            card1$$.setAttribute("data-function__status", "validated");
            card2$$.setAttribute("data-function__status", "validated");
            updateScore();
            resetCardsToCompare();
        }
        updateAttempts();
    }
    const universeImg$$ = document.querySelector("[src='images/universe.svg']");
    if (universeImg$$ === null) {
        alert("¡Enhorabuena, has ganado!");
    }
};

for (let i = 0; i < cardArray.length; i++) {
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", "images/universe.svg");
    img$$.setAttribute("id", cardArray[i].id);
    img$$.setAttribute("name", cardArray[i].name);
    div$$.appendChild(img$$);
    div$$.addEventListener("click", manageClick);

    console.log(img$$);
}

const validateAttempts = (attempts) => {
    if (event.target.name !== undefined) {
        if (event.target.getAttribute("data-function__status") === "validated") {
            cardsToCompare.pop();
        }
        if (attempts[1] === undefined) {
            card1$$ = document.body.querySelector(`[id='${event.target.id}']`); //// No me coge #
            card1$$.setAttribute("src", `images/${event.target.name}.svg`);
        } else {
            card2$$ = document.body.querySelector(`[id='${event.target.id}']`); //// No me coge #
            card2$$.setAttribute("src", `images/${event.target.name}.svg`);

            if (attempts[0].id === attempts[1].id) {
                cardsToCompare.pop();
            }
        }
    } else {
        cardsToCompare.pop();
    }
};

const hideCard = (cardToHide) => {
    cardToHide.setAttribute("src", "images/universe.svg");
};

const delayHide = (card1, card2) => {
    setTimeout(() => {
        hideCard(card1);
    }, 500);
    setTimeout(() => {
        hideCard(card2);
    }, 500);
    resetCardsToCompare();
};

const resetCardsToCompare = () => {
    cardsToCompare.pop();
    cardsToCompare.pop();
};

const updateScore = () => {
    scoreValue++;
    score$$.textContent = `${scoreValue}`;
};

const updateAttempts = () => {
    attemptsValue++;
    attempts$$.textContent = `${attemptsValue}`;
};
