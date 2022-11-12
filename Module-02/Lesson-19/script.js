// const player = {
//     name: "Eric Cartman",
//     pause: function (param) {
//         this.name = param
//     }
// }


// player.pause("Murad")
// console.log(player.name);


// function hello() {
//     console.log(this.alert())
// }

// hello()


/*let obj = {
    id: 4,
    companyName: "Tokyo Traders",
    contactName: "Yoshi Nagase",
    contactTitle: "Marketing Manager",
    // myFunc: function () {
    //     console.log(this.contactTitle)
    // }
    // myFunc() {
    //     console.log(this.contactTitle)
    // }

    myFunc(param) {
        this.contactTitle = param
    }
}



console.log(obj.contactTitle)
obj.myFunc("Programming Department");
console.log(obj.contactTitle)*/


obj = {
    name: "murad",
    surename: "orujov",
    age: 23,
    myfunc() {
        simvols = ''
        Object.keys(obj).forEach((item) => {
            if (item !== "myfunc") {
                simvols += item;
            }
        })

        return simvols.length
    }
}


console.log(obj.myfunc());