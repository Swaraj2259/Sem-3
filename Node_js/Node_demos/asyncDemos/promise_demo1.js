const mypromise = new Promise((resolve, reject) => {
    const success = true; // change to false to test rejection
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

mypromise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});