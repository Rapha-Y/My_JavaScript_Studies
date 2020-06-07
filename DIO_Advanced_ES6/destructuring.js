//Destructuring Assignment

var [stra, cran, blue, [phone]] = ["Strawberry", "Cranberry", "Blueberry", ["Blackberry"]];
//console.log(stra, cran, blue, phone);

var obj = {
    name: "Hilda"
};

var { name: name2 } = obj;
name2 = "Annette";

//console.log(obj.name);
//console.log(name2);

var object = {
    name: "Ignatz",
    props: {
        weapon: "Bow"
    },
    hobbies: ["Painting", "Reading"]
};

var weapon = object.props.weapon;
//console.log(weapon);

var { props: { weapon: wpn }, hobbies: [a, b] } = object;
//console.log(wpn, a, b);

var genArr = [{name: "Sofa", type: "Furniture"}];

var furni = genArr[0].name;
//console.log(furni);

var [{ name: furniture }] = genArr;
//console.log(furniture);

function sum(numbers) {
    return numbers[0] + numbers[1];
}

//console.log(sum([5, 5]));

function add([a, b] = [0, 0]) {
    return a + b;
}

//console.log(add());
//console.log(add([5, 5]));

function sub({ a, b }) {
    return a - b;
}

//console.log(sub({a: 4, b: 2}));