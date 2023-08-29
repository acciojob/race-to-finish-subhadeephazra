window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime(min, max) {
	return Math.random() * (max - min) + min;
}

function createRandomPromise() {
	const randomTime = getRandomTime(1000, 5000);
    return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Promise resolved after ${randomTime}ms`);
		}, randomTime);
	});
}

    // Add your promises to the existing promises array
for (let i = 0; i < 5; i++) {
	promises.push(createRandomPromise());
}
Promise.any(promises)
	.then((result) => {
		const div = document.getElementById("output");
		div.textContent = result;
	})
	.catch((error) => {
		console.error("All promises rejected:", error);
	});