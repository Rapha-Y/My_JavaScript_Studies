function Person(customProperties) {
    return {
        name: 'default_name',
        surname: 'default_surname',
        ...customProperties
    }
}

const p = Person({name: 'Alice', age: 23});
console.log(p);