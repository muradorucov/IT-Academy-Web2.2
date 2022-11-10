//Sort Method

//Normal string type
let namesStr = ['Amil', 'Kerim', 'Elkhan', 'Rovshen', 'Yusif', 'Sahile', 'Ayten'];


//numbers data type
let numbers = [4, 100, 5, 1004, -4, -3];


//az character
let azSimvol = ['ə', 'ş', 'ç', 'ı', 'ü', 'ö', 'ğ'];


//Upper and lower str
let upperToLower = ['c', 'A', 'G', 'a'];


//obj data type
let obj = [
    {
        id: 4,
        companyName: "Tokyo Traders"
    },
    {
        id: 5,
        companyName: "Cooperativa de Quesos 'Las Cabras'"
    },
    {
        id: 6,
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
numbers.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    return 0;
});

numbers.sort((a, b) => {
    return a - b;
});



//azSimvol sort
azSimvol.sort((a, b) => {
    return a.localeCompare(b)
})

// upperToLower sort
upperToLower.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
})


//obj sort
// obj.sort((a, b) => {
//     return a.id - b.id
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