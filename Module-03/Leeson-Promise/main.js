fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => {
        return resp.json()
    })
    .then(data => console.log(data))
    .catch(() => {
        console.log("ERROR VAR");
    })
    .finally(() => {
        console.log("Isi Bitirdim");
    })

// class CustomPromise {
//     constructor(func) {
//         this.func = func(res,rej);
//     }
// }



const promis1 = new Promise((rejected, resolve) => {
    param("Hazirdi");
    rejected("Natamamdir")
    resolve("Ugurlu")
})

// console.log(promis1);


const box = document.querySelector(".box")

setTimeout(() => {
    box.classList.add("daire")

}, 1000)
setTimeout(() => {
    box.classList.add("kub")
}, 2000)
setTimeout(() => {
    box.classList.add("none")

}, 3000)
setTimeout(() => {
    box.classList.remove("none")

}, 4000)
setTimeout(() => {
    box.classList.remove("kub")

}, 5000)

setTimeout(() => {
    box.classList.remove("daire")
}, 6000)



const func = (time) => {
    return new Promise((res, rejected) => {
        return setTimeout(res, time)
    })
}