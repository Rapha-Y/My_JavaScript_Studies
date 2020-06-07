//callbacks
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback("First data");
    }, 1000);
}

function doSomethingElse(callback) {
    setTimeout(function() {
        //did something else
        callback("Second data");
    }, 1000);
}

//callback hell
function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try{
                doSomethingElse(function(data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch {
                        //handle error
                    }
                });
            } catch(err) {
                //handle error
            }
        });
    } catch(err) {
        //handle error
    }
}

//doAll();

//promises
const doSomethingPromise = () => new Promise((res, rej) => { //resolved and reject
    //throw new Error("Something went wrong (not really)");
    setTimeout(function() {
        //did something
        res("First data");
    }, 1500); 
});

const doSomethingElsePromise = () => new Promise((res, rej) => {
    //throw new Error("Something went wrong (not really)");
    setTimeout(function() {
        //did something else
        res("Second data");
    }, 1000);
});

//doSomethingPromise().then(data => console.log(data)).catch(err => console.log(err));

/*
doSomethingPromise()
    .then(data => {
        console.log(data.split('')); 
        return doSomethingElsePromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log("Uh-oh!", error));
*/

Promise.all([doSomethingPromise(), doSomethingElsePromise()]).then((data) => {
    //console.log(data[0].split(''));
    //console.log(data[1].split(''));
}).catch(err => {
    //console.log(err);
});

Promise.race([doSomethingPromise(), doSomethingElsePromise()]).then(data => {
    //console.log(data);
});