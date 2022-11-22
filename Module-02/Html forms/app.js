let username = document.querySelector("#username")
let password = document.querySelector("#paswword")
let mail = document.querySelector("#mail")
let btn = document.querySelector("#btn")
let tbody = document.querySelector("tbody");

let userList = [];
let currentId = 1

function Users(id, name, password, mail) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.mail = mail
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    newUser = new Users(currentId++, username.value, password.value, mail.value)
    userList.push(newUser)
    console.log(userList);

    tr = document.createElement("tr")

    tbody.append(tr)

    tdId = document.createElement("td");
    tdName = document.createElement("td");
    tdPassword = document.createElement("td");
    tdMail = document.createElement("td");

    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdPassword);
    tr.append(tdMail);

    tdBtns = document.createElement("td")
    tr.append(tdBtns);

    btnDelete = document.createElement("button");
    btnEdit = document.createElement("button");

    tdBtns.append(btnDelete)
    tdBtns.append(btnEdit)

    btnDelete.textContent = "Delete"
    btnEdit.textContent = "Edit"

    btnDelete.className = "btn btn-danger";
    btnEdit.className = "btn btn-secondary";

    userList.forEach(item=>{
        tdId.textContent = item.id
        tdName.textContent = item.name
        tdPassword.textContent = item.password
        tdMail.textContent = item.mail
    });

    btnDelete.addEventListener('click', (e)=>{
        customID = e.target.parentElement.parentElement.firstChild.textContent
        trDeleted = e.target.parentElement.parentElement
        userList = userList.filter(item => item.id != customID)
        console.log(userList);

        trDeleted.remove()
    })

})

