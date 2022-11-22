const btn = document.querySelector(".goods thead tr th:first-child")
const list = document.querySelectorAll(".goods tbody tr td:first-child")
console.log(btn);
let copyList = []

list.forEach(item=>{
    copyList.push(item.textContent)
})

let sorted = true;

btn.addEventListener("click",()=>{
    if(sorted){
        copyList.sort()
        sorted = false;
        list.forEach((elem,i) =>{
            elem.textContent = copyList[i]
        })

    }else{
        copyList.reverse()
        sorted = true;
        list.forEach((elem,i) =>{
            elem.textContent = copyList[i]
        })

    }
    
})


