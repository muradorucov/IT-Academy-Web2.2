// const btn = document.querySelector(".goods thead tr th:first-child")
// const list = document.querySelectorAll(".goods tbody tr td:first-child")
// console.log(btn);
// let copyList = []

// list.forEach(item=>{
//     copyList.push(item.textContent)
// })

// let sorted = true;

// btn.addEventListener("click",()=>{
//     if(sorted){
//         copyList.sort()
//         sorted = false;
//         list.forEach((elem,i) =>{
//             elem.textContent = copyList[i]
//         })

//     }else{
//         copyList.reverse()
//         sorted = true;
//         list.forEach((elem,i) =>{
//             elem.textContent = copyList[i]
//         })

//     }

// })





let thBtn = document.querySelector(".goods thead tr th:first-child");
let tbody = document.querySelector("tbody")
let listRow = document.querySelectorAll(".goods tbody tr");

let arr = [];
let sorted = true;

listRow.forEach(item => arr.push(item));

thBtn.addEventListener("click", () => {
    if (sorted) {
        arr.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent)
        })
        listRow.forEach((element, i) => {
            element = arr[i];
            tbody.append(element)
        })
        sorted = false;
    }
    else {
        arr.sort((a, b) => {
            return b.textContent.localeCompare(a.textContent)
        })
        listRow.forEach((element, i) => {
            element = arr[i];
            tbody.append(element)
        })
        sorted = true;
    }
})

