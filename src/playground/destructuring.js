// Object destructuring

// const person = {
//     name: "Autsada",
//     age: 43,
//     location: {
//         city: 'Bangkok',
//         temp: 30
//     }
// };

// const { name = 'Anonymous', age: myAge = 'unknown' } = person;
// console.log(`${name} is ${myAge}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It is ${temperature} degree in my city ${city}`);
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;
// console.log(publisherName);


// Array destructuring

const address = ['S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];

const [, city, state] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , cost] = item;
console.log(`A Medium ${coffee} costs ${cost}`);