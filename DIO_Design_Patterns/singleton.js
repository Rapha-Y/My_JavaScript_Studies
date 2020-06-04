function Person() {
    if(!Person.instance) {
        return Person.instance = this
    } 
    return Person.instance;
}

const p1 = Person.call({name: 'Alice'});
const p2 = Person.call({name: 'Anni'});

console.log(p1);
console.log(p2);