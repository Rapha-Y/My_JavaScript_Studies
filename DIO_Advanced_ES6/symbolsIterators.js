//Symbol
const uniqueId = Symbol('Hello');
//console.log(uniqueId);

const uniqueId2 = Symbol('Hello');
//console.log(uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello'
};
//console.log(obj);
//console.log(Object.keys(obj));
//console.log(Object.getOwnPropertySymbols(obj));

//Well-known symbols
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

while(true) {
    let { value, done } = it.next();
    if(done) {
        break;
    }
    //console.log(value);
}

for(let value of arr) {
    //console.log(value);
}

const obj1 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i-1],
                    done: i-1 > this.values.length
                }
            }
        }
    }
}

for(let value of obj1) {
    //console.log(value);
}

const arr2 = [...obj1];
console.log(arr2);