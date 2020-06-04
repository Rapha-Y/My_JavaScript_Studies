let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function add(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => add(2, 2)));
loggedIn = true;
console.log(callIfAuthenticated(() => add(2, 2)));
loggedIn = false;
console.log(callIfAuthenticated(() => add(2, 2)));