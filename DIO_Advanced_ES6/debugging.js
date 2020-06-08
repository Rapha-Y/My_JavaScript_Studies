console.log("Black text");
console.warn("Yellow text w/alert");
console.error("Red error text");

console.trace();

console.group("My group");
console.log("Info inside group");
console.log("Moar info inside group");
console.groupEnd("My group");

console.time("Log time");
setTimeout(() => {
    console.timeEnd("Log time");
}, 2000);

console.table(["Emily Strauss", "Wiosna"]);

console.assert(true, "Oopsie");
console.assert(false, "Doopsie");

console.log("%c Blue log ", "color: cyan; background-color: black");
console.log("%c Pink log ", "color: pink; background-color: black");
console.log("%c THICC LOG ", "font-size: 40px");