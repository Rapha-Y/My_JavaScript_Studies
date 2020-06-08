class Math {
    add(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 2500);
    }

    sum(a, b) {
        return a + b;
    }
}

module.exports = Math;