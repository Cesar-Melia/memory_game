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
    console.log(event.target);
    console.log(cardsToCompare[0]);
    console.log(cardsToCompare[1]);

    validateAttempts(cardsToCompare);

    if (cardsToCompare.length === 2) {
        if (card1$$.name !== card2$$.name) {
            hideCard(card1$$);
            hideCard(card2$$);
            resetAttempts();
            // setTimeOut(hideCard(card1$$), 1000);
            // setTimeOut(hideCard(card2$$), 1000);
        } else {
            resetAttempts();
            card1$$.setAttribute("data-status", "validated"); //corregir atributo data-function
            card2$$.setAttribute("data-status", "validated"); //corregir atributo data-function
        }
        attemptsValue++;
        attempts$$.textContent = `${attemptsValue}`;
    }

    const universeImg$$ = document.querySelector("[src='images/universe.svg']");
    if (universeImg$$ === null) {
        score$$.textContent = `${scoreValue}`;
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
        const status$$ = document.body.querySelector("[data-status='validated']");
        console.log(status$$);
        // if (status$$ !== null) {
        //     alert("Esa carta ya esta validada, selecciona otra.");
        //     cardsToCompare.pop();
        // }

        if (attempts[1] === undefined) {
            card1$$ = document.body.querySelector(`[id='${event.target.id}']`); //// No me coge #
            card1$$.setAttribute("src", `images/${event.target.name}.svg`);
        } else {
            card2$$ = document.body.querySelector(`[id='${event.target.id}']`); //// No me coge #
            card2$$.setAttribute("src", `images/${event.target.name}.svg`);

            if (attempts[0].id === attempts[1].id) {
                alert("No puedes volver a pulsar la misma carta");
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

const delay = (cardToHide) => {};

const resetAttempts = () => {
    cardsToCompare.pop();
    cardsToCompare.pop();
};
