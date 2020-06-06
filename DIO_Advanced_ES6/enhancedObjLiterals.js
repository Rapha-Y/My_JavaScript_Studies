//ECMA 6 - Shorthand
var prop1 = 'A B C';

var obj1 = {
    prop1
};

console.log(obj1);

function method1() {
    console.log('method called');
}

var obj2 = {
    method1
};

obj2.method1();

var obj3 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj3.sum(2, 2));

var propName = 'test';

var obj4 = {
    [propName + 'Concat']: 'prop value'
};

console.log(obj4);