//Fetch
fetch("./data.json")
    .then(responseStream => {
        if(responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error("Request error");
        }
    })
    .then(data => {
        //console.log(data);
    })
    .catch(err => { //network error only by default, needs other errors to be thrown
        //console.log("Error:", err);
    });

//ES7 - Async/Await
const asyncTimer = () => new Promise((res, rej) => {
    setTimeout(() => {
        res(12345);
    }, 1000);
});

const simpleFunc = async () => {
    //throw new Error("Nope!");
    const data = await Promise.all([asyncTimer(), fetch("./data.json").then(resStream => 
        resStream.json()
    )]);
    return data;
};

simpleFunc().then(data => console.log(data)).catch(err => console.log(err));