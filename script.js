window.promises = [];
for (let i = 0; i < 5; i++) {
    const randomTime = getRandomTime(1000, 5000); // Time in milliseconds (1 to 5 seconds)
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promise ${i + 1} resolved after ${randomTime}ms`);
        }, randomTime);
    });
    promises.push(promise);
}

Promise.any(promises)
    .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error('All promises failed:', error);
    });

// Do not change the code above this
// add your promises to the array `promises`
