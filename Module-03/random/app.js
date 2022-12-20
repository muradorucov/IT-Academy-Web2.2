// arr = [];
// sum = 0;
// while (true) {
//     a = Math.floor(Math.random() * 100)
//     if (a < 51) {
//         if (arr.includes(a) == false) {
//             if (sum <= 1000) {
//                 arr.push(a)
//                 sum += a
//             } else {
//                 if (sum > 1000) {
//                     console.log(a);
//                     // sum = 1000
//                 }
//                 break;
//             }
//         }
//     }
// }
// console.table(arr);
// console.log(sum);



const arr = new Array(100)

for (let index = 0; index < 100; index++) {

    a = Math.floor(Math.random() * 100)
    if (a < 51) {
        arr[index] = a
        if (arr[100] != null) {
            break;
        }
    } else {
        // console.log(a);
    }
}

// console.table(arr);

arr.forEach(item => console.log(item))