//Sort Method

//Normal string type
let namesStr = ['Amil', 'Kerim', 'Elkhan', 'Rovshen', 'Yusif', 'Sahile', 'Ayten'];


//numbers data type
let numbers = [4, 100, 5, 1004, -4, -3];


//az character
let azSimvol = ['ə', 'e', 's', 'ş', 'ç', 'ı', "i", 'ü', 'ö', 'ğ'];


//Upper and lower str
let upperToLower = ['c', 'A', 'G', 'a'];


//obj data type
let obj = [
    {
        id: 6,
        companyName: "Tokyo Traders"
    },
    {
        id: 4,
        companyName: "Cooperativa de Quesos 'Las Cabras'"
    },
    {
        id: 5,
        companyName: "Mayumi's",
    }
]



console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log(namesStr);
console.log(numbers);
console.log(azSimvol);
console.log(upperToLower);
console.log(obj);
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log(namesStr.sort());
console.log(numbers.sort());
console.log(azSimvol.sort());
console.log(upperToLower.sort());
console.log(obj.sort());
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');



//numbers sort

// numbers.sort((a, b) => {
//     if (a > b) {
//         return 100;
//     }
//     else if (a < b) {
//         return -10000283;
//     }
//     return 0;
// });

numbers.sort((a, b) => {
    return b - a;
});



//azSimvol sort
let azSimvolf = ['ə', 'e', 's', 'ş', 'ç', 'ı', 'ü', 'ö', 'ğ'];

azSimvol.sort((a, b) => {
    return a.localeCompare(b)
})

// upperToLower sort
//let upperToLower = ['c', 'A', 'G', 'a'];

upperToLower.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
})


// obj sort
// obj.sort((a, b) => {
//     return b.id - a.id
// })


obj.sort((a, b) => {
    return a.companyName.localeCompare(b.companyName)
})



console.log(namesStr);
console.log(numbers);
console.log(azSimvol);
console.log(upperToLower);
console.log(obj);
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

// let ob = {
//     id: 4,
//     companyName: "Tokyo Traders"
// }
// console.log(Object.keys(ob))

let chiken = ['🥚', '🐔']

console.log(chiken.sort());