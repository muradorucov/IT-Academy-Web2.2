// import Amil from './data.json' assert {type: 'json'};

// console.log(Amil);
let time = 0

let timer = setInterval(() => {
    time += 1
}, 10)
console.log(time);


document.querySelector("button").addEventListener("click", () => {
    clearInterval(timer);
})