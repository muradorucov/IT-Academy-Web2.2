class User {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
    rename(name) {
        this.name = name
    }
}


class UserList {
    constructor() {
        this.users = [];
        this.currentId = 0;
    }
    addUser(name) {
        var new_user = new User(this.currentId++, name)
        this.users.push(new_user)
    }
    removeUser(id) {
        this.users = this.users.filter(item => item.id != id)
    }
    renameUser(id, name) {
        this.users.map(item => {
            if (item.id == id) {
                item.name = name
            }
        })
    }
    getAllUsersString() {
        return this.users.reduce((previousValue, currentValue) => previousValue + currentValue.name + "; ", "")
    }
}


class Application {
    constructor() {
        this.userList = new UserList()
    }
    init() {
        while (true) {
            let command = prompt("");
            if (command == null) {
                console.log(this.userList.getAllUsersString());
                break;
            }
            else {
                let commandArr = command.split(" ")
                if (commandArr[0] == "create") {
                    this.userList.addUser(commandArr[1])
                }
                else if (commandArr[0] == "rename") {
                    this.userList.renameUser(commandArr[1], commandArr[2])
                }
                else if (commandArr[0] == "remove") {
                    this.userList.removeUser(commandArr[1]);
                }
            }

        }

    }
}

const newApp = new Application()
newApp.init()
