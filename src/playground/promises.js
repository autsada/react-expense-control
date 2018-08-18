// Normally promise is provided by firebase library
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolve data'); //-> can pass only one argument in resolve and reject. If we need more data we have to pass in as an object
        // resolve('this is my another resolve data') -> the second will be ignore -> resolve and reject can only run once.

        //reject('Something went wrong');
    }, 5000);
});

// What we do is to use promise

console.log('before');
promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my NEW resolve data');
        }, 5000);
    });
}).then((str) => {
    console.log('It runs', str);
}).catch((error) => {
    console.log('error: ', error);
});
console.log('after');