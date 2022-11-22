let name = document.querySelector("#name")
let surename = document.querySelector("#surename")
let mail = document.querySelector("#name")
let btn = document.querySelector("#btn")
let tbody = document.querySelector("tbody")

function Users(id, name, surename, mail) {
    this.id = id
    this.name = name;
    this.surename = surename;
    this.mail = mail;
}

let currentId = 1

let userList = [];

btn.addEventListener('click', () => {
    if (name.value.trim() != "" && surename.value.trim() != "" && mail.value.trim() != "") {

        // userList.forEach(item => {
        //     if (item.name != name.value && item.surename != surename.value && item.mail != mail.value ) {
        newuser = new Users(currentId++, name.value, surename.value, mail.value)
        userList.push(newuser)
        tr = document.createElement("tr");
        tbody.append(tr)

        tdId = document.createElement("td");
        tdName = document.createElement("td");
        tdSureName = document.createElement("td");
        tdMail = document.createElement("td");

        tdBtns = document.createElement("td");

        deletBtn = document.createElement("button")
        deletBtn.className = "btn btn-danger"

        deletBtn.innerText = "delete";

        editBtn = document.createElement("button")
        editBtn.className = "btn btn-primary";

        editBtn.innerText = "edit";

        userList.forEach(item => {
            tdId.textContent = item.id
            tr.append(tdId)
            tdName.textContent = item.name
            tr.append(tdName)
            tdSureName.textContent = item.surename
            tr.append(tdSureName)
            tdMail.textContent = item.mail
            tr.append(tdMail)
            tr.append(tdBtns)
            tdBtns.append(deletBtn)
            tdBtns.append(editBtn)

        })

        deletBtn.addEventListener("click", (e) => {
            btnClickId = e.target.parentElement.parentElement.firstChild.textContent
            btnClicktr = e.target.parentElement.parentElement
            userList = userList.filter(value => value.id != btnClickId)

            btnClicktr.remove()

        })
    }
    else {
        alert("Boş data")
    }
})


