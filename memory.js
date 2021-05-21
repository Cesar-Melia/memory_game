const cardArray = [
    {
        id: 1,
        name: 'earth',
        img: 'public/exercise-1/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'public/exercise-1/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'public/exercise-1/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: 'public/exercise-1/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: 'public/exercise-1/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: 'public/exercise-1/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'public/exercise-1/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'public/exercise-1/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'public/exercise-1/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: 'public/exercise-1/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: 'public/exercise-1/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: 'public/exercise-1/uranus.svg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const div$$ = document.querySelector("[data-function='grid']");

for (let i = 0; i < cardArray.length; i++){
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", "public/exercise-1/universe.svg");
    img$$.setAttribute("id", cardArray[i].id);
    img$$.setAttribute("name", cardArray[i].name);
    div$$.appendChild(img$$);
    div$$.addEventListener("click", comprobar);
     
    console.log(img$$);
        
    
}