// const header = document.querySelector("h2");

// btns.forEach((btn) => {

// })

// btn.addEventListener("click", (e) => {
//     if (e.target.style.backgroundColor == "blue") {
//         e.target.style.backgroundColor = "red"
//     } else {
//         e.target.style.backgroundColor = "blue"
//     }

// })


// btn.addEventListener("click", () => {
//     if (btn.style.backgroundColor == "blue") {
//         btn.style.backgroundColor = "red"
//     } else {
//         btn.style.backgroundColor = "blue"
//     }

// }, {once : true})

// function changeText(event) {
// }

// function clearText(event) {
//     event.target.removeEventListener("click", clearText)
// }


// btns.forEach((btn) => {
//     btn.addEventListener("click", changeText)
//     btn.addEventListener('click', clearText)
// })




// const element = document.querySelector(".btn");

// function changeText(event) {
//     console.log("Elave edildi");
//     event.target.innerText = "Click edildi"

// }
// function changeColor(event) {
//     console.log("Silindi");
//     event.target.style.backgroundColor = "red";

//     event.target.removeEventListener('click', changeText);
// }

// element.addEventListener('click', changeText);
// changeColor()








// const myDiv = document.getElementById("myDIV");
// myDiv.addEventListener("mousemove", myFunction);

// function removeHandler() {
//   myDiv.removeEventListener("mousemove", myFunction);
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.random();
// }


const elem = document.querySelectorAll("li button")


// elem.forEach(item => {
//     item.addEventListener("click", () => {
//         if (item.style.textDecoration == "none") {
//             item.style.textDecoration = "line-through"
//         } else {
//             item.style.textDecoration = "none"
//         }
//     })
// })


// function changeText(event) {
//     console.log("yazdim");
//     event.target.innerText = "click etdim"
//     event.target.style.backgroundColor = "yellow"
// }

// elem.forEach((element) => {
//     element.addEventListener('click', changeText);

//     function removeHandler() {
//         element.removeEventListener('click', changeText);
//         console.log("Sildim");
//     }
// });



const btn = document.querySelector("button")
const result = document.querySelector("h2 span")

function addEvent(event){
    event.target.innerText = "number added";
    console.log("number added");
    result.innerText = Math.random()
}
btn.addEventListener("click",addEvent)


function removeEvent(event){
    event.target.removeEventListener('click', addEvent)
}


btn.addEventListener("click",removeEvent)