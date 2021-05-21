const cardArray = [
    {
        id: 1,
        name: "earth",
        img: "images/earth.svg"
    },
    {
        id: 2,
        name: "jupiter",
        img: "images/jupiter.svg"
    },
    {
        id: 3,
        name: "mars",
        img: "images/mars.svg"
    },
    {
        id: 4,
        name: "mercury",
        img: "images/mercury.svg"
    },
    {
        id: 5,
        name: "saturn",
        img: "images/saturn.svg"
    },
    {
        id: 6,
        name: "uranus",
        img: "images/uranus.svg"
    },
    {
        id: 7,
        name: "earth",
        img: "images/earth.svg"
    },
    {
        id: 8,
        name: "jupiter",
        img: "images/jupiter.svg"
    },
    {
        id: 9,
        name: "mars",
        img: "images/mars.svg"
    },
    {
        id: 10,
        name: "mercury",
        img: "images/mercury.svg"
    },
    {
        id: 11,
        name: "saturn",
        img: "images/saturn.svg"
    },
    {
        id: 12,
        name: "uranus",
        img: "images/uranus.svg"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const div$$ = document.querySelector("[data-function='grid']");

for (let i = 0; i < cardArray.length; i++){
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", "images/universe.svg");
    img$$.setAttribute("id", cardArray[i].id);
    img$$.setAttribute("name", cardArray[i].name);
    div$$.appendChild(img$$);
    div$$.addEventListener("click", comprobar);
     
    console.log(img$$);
        
    
}