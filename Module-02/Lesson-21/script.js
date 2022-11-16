// class User {
//     constructor(name, surename, age) {
//         this.name = name;
//         this.surename = surename;
//         this.age = age;
//         this.gender = "Male";
//     }
//     getChangeAge() {
//         this.age += 1
//     }
// }
// // const murad = new User("Murad", "Orucov", 56)





// class Esger extends User {
//     constructor(surename, age, silah, gunler, gender) {
//         super(surename, age, gender)
//         this.silah = silah;
//         this.gunler = gunler
//     }
// }


// let murad = new User("Orucov", 34, "Kolasnikov", 365)
// murad.getChangeAge()
// console.log(murad);




// class Person {
//     constructor(name, surename, age, gender) {
//         this.name = name;
//         this.surename = surename;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// class Admin extends Person {
//     constructor(name, surename, age, gender, id, role) {
//         super(name, surename, age, gender)
//         this.id = id;
//         this.role = role
//     }
// }

// const admin = new Admin("Changir", "Qemberov", 45, "Male", 1, "Author")

// console.log(admin);

// class Player extends Person {
//     constructor(name, surename, age, gender, level) {
//         super(name, surename, age, gender,)
//         this.level = level;
//     }
// }



// const murad = new Player("Murad", "Orucov", 23, "F", 29)

// console.log(murad);












// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");






















// class Animal {
//     speak() {
//         console.log("Animals have different sounds");
//     }
// }


// class Cat extends Animal {
//     speak() {
//         console.log("Cat says Meow Meow");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog say Woof Woof");
//     }
// }
// const param = new Cat()
// console.log(param.speak());




// // var x = [new Cat(), new Dog()]
// // console.log(x);


// // x.forEach(function (info) {
// //     info.speak();
// // });

// class Person {
//     constructor(name, surename, age) {
//         this.ad = name;
//         this.soyad = surename;
//         this.yash = age;

//     }
//     getChangeAge() {
//         this.yash += 1
//     }
// }


// class Admin extends Person {
//     constructor(name, surename, age, role) {
//         super(name, surename, age)
//         this.role = role;
//     }
// }

// const admin1 = new Admin("Muard", "Orucov", 23, "Author")
// console.log(admin1);
// admin1.getChangeAge()
// console.log(admin1);

// class User extends Person {
//     constructor(name, surename, age, level) {
//         super(name, surename, age)
//         this.level = level
//     }
// }
// const user1 = new User("Ramin", "Mecildi", 27, "Senior")

// console.log(user1);

// const user1 = new Person("Jon", "Obama", 45)
// user1.getChangeAge()
// console.log(user1);






