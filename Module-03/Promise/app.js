let box = document.querySelector(".box")

// setTimeout(() => {
//     box.classList.add('daire')
//     setTimeout(() => {
//         box.classList.add("bg")
//         setTimeout(() => {
//             box.classList.add("son")
//             setTimeout(() => {
//                 box.classList.remove("son")
//                 setTimeout(() => {
//                     box.classList.remove("bg")
//                     setTimeout(() => {
//                         box.classList.remove("daire")
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// new Promise((reslove, rejected) => {
//     reslove({
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     });
//     rejected("Hell ede bilmedim");
// }).then(data => {
//     console.log(data)
// }).catch((data) => {
//     console.log(data);
// }).finally((data) => {
//     //loader
//     console.log('Bitdi');
// })
// function func(param){
//     return new Promise((reslove)=>{
//         return setTimeout(reslove,param)
//     })
// }


// const func = (param) => new Promise((reslove, rejected) => {
//     setTimeout(reslove, param)
// })

// func(1000)
//     .then(() => {
//         box.classList.add('daire')
//         return func(1000)
//     })
//     .then(() => {
//         box.classList.add('bg')
//         return func(1000)
//     })
//     .then(() => {
//         box.classList.add('son')
//         return func(1000)
//     })
//     .then(() => {
//         box.classList.remove("son")
//         return func(1000)
//     })
//     .then(() => {
//         box.classList.remove("bg")
//         return func(1000)
//     })
//     .then(() => {
//         box.classList.remove("daire")
//         return func(1000)
//     })
//     .catch(() => {
//         console.log("Error");
//     })
//     .finally(() => {
//         alert("Animasiya Bitdi")
//     })

// const promise1 = new Promise((res, rej) => {
//     res("1-ci promise success")
//     rej("1-ci promise error")
// })
// const promise2 = new Promise((res, rej) => {
//     res("2-ci promise success")
//     rej("2-ci promise error")
// })
// const promise3 = new Promise((res, rej) => {
//     res("3-ci promise success")
//     rej("3-ci promise error")
// })

// Promise.all([promise1, promise2, promise3])
//     .then(data => console.log(data))
//     .catch(data => console.log(data))



// let id = Number(prompt())

// function name(id) {
//     if (id === 0) {
//         return Promise.reject("Error verdi uydaaa")

//     }

//     return fetch(`https://rickandmortyapi.com/api/character/${id}`)
// }

// console.log(name(id));

// console.log("Hello ");



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resp) => {
//         return resp.json()
//     })
//     .then(data => console.log(data))

// let a = function async() {
//     console.log("async");
// }

// a()

// console.log("Hello ");




const getData = async () => {
    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json()
    return data
}


getData().then((data) => {
    console.log(data);
}).catch(console.log("ERROR"))



const obj ={

}