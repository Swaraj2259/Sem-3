//async generator that simulates delayed values
async function* delayedNumbers() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(resolve => setTimeout(() => resolve(2), 1000));
    yield await Promise.resolve(resolve => setTimeout(() => resolve(3), 1000));
}

(async () => {
    for await (const num of delayedNumbers()) {
        console.log( 'receiver:', num);
    }
})();