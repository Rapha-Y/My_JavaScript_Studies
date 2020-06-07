//Rest operator: ...
function sum(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/*console.log("sum:", sum(1, 2, 3, 4, 5));*/

const notAddition = (a, b, ...rest) => {
    /*console.log("notAddition:", a, b, rest);*/
};

notAddition(1, 2, 3, 4, 5);

const multiply = (...args) => {
    return args.reduce((acc, value) => acc * value, 1);
};

/*console.log("multiply:", multiply(1, 2, 3, 4));*/

//Spread operator: ...
const notSum = (...rest) => {
    return multiply(...rest);
};

/*console.log("notSum:", notSum(1, 2, 3, 4, 5));*/

const str = 'Goodbye World';

function logArgs(...args) {
    /*console.log("logArgs:", args);*/
}

logArgs(...str);

function logArgsAlt() {
    /*console.log("logArgsAlt:", arguments);*/
}

logArgsAlt(...str);

const arr = [1, 2, 3, 4];

function logThreeArgs(a, b, c) {
    /*console.log("logThreeArgs:", a, b, c);*/
}

logThreeArgs(...arr);

const arr2 = arr.concat([5, 6, 7]);
const arr3 = [...arr, 5, 6, 7];

/*console.log("arr2:", arr2);*/
/*console.log("arr3:", arr3);*/

const arr4 = [...arr2, ...arr, 0, 0, 0];

/*console.log("arr4:", arr4);*/

const arrClone = [...arr];

/*console.log("arrClone:", arrClone);*/

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'Hi!'
};

/*console.log("obj2:", obj2);*/

const obj3 = {
    test: 456
};

const objMerged = { //Problem
    ...obj,
    ...obj3,
};

/*console.log("objMerged:", objMerged);*/

const obj4 = { ...obj }; //clones first
obj4.test = 456; //then changes property

/*console.log("obj & obj4", obj, obj4);*/

const object = {
    test: 123,
    subObj: {
        test: 123
    }
};

const object2 = { ...object } //shallow clone
object2.subObj.test = 456; //affects original

/*console.log("object.subObj:", object.subObj);*/
/*console.log("object2.subObj:", object2.subObj);*/

const object3 = {...object, subObj: {...object.subObj}};
object3.subObj.test = 789;

/*console.log("object3.subObj:", object3.subObj);*/