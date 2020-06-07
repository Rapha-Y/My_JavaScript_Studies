//EventEmitter - for Node
//EventTarget - for browser

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("User logged", data => {
    console.log(data);
});

emitter.emit("User logged", { user: "Emily Yuki" });

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit("User logged", data);
        }, 2000);
    }
}

const users = new Users();

users.once("User logged", data => {
    console.log(data);
});

users.userLogged({ user: "Emily Strauss" });
users.userLogged({ user: "Alice Yuki" });