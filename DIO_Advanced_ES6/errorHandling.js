class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = "Emily Strauss";
    const myError = new CustomError({
        message: "I'm not actually real",
        data: {
            type: "Made-up error"
        } 
    });
    throw myError;
} catch(err) {
    console.log("Error:", err);
    console.log(err.data);
} finally {
    console.log("Keep going");
}