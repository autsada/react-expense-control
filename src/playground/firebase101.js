import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBY1rp9XtnPt9oJGCt-xX_xi7ikZSl7zdg",
    authDomain: "expensify-bori1550.firebaseapp.com",
    databaseURL: "https://expensify-bori1550.firebaseio.com",
    projectId: "expensify-bori1550",
    storageBucket: "expensify-bori1550.appspot.com",
    messagingSenderId: "1056862639271"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (expense) => {
    console.log(expense.key, expense.val());
});

// child_changed
database.ref('expenses').on('child_changed', (expense) => {
    console.log(expense.key, expense.val());
});

// child_added -> also get called with the existing data
database.ref('expenses').on('child_added', (expense) => {
    console.log(expense.key, expense.val());
});

// database.ref('expenses')
//     .once('value') 
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((expense) => {
//             expenses.push({
//                 id: expense.key,
//                 ...expense.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((expense) => {
//             expenses.push({
//                 id: expense.key,
//                 ...expense.val()
//             });
//         });
//         console.log(expenses);
//     });

//SAVE ARRAY DATA IN DATABASE
// database.ref('expenses').push({
//     description: 'Gas',
//     note: '',
//     amount: 400.50,
//     createdAt: 3000
// });

// database.ref().set({
//     name: 'Autsada T',
//     age: 44,
//     stressLevel: 5,
//     job: {
//         title: 'General Manager',
//         company: 'Thaiyara'
//     },
//     location: {
//         city: 'Bangkok',
//         country: 'Thailand'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// // UPDATE DATA -> note: just update for root data, nested data will not, if we need to update nested data we need to use '/' for example we use 'location/city' to udate city nested under location
// // database.ref().update({
// //     name: 'Sakda B',
// //     age: 40,
// //     job: 'Software Engineer',
// //     isSingle: null,
// //     'location/city': 'Phuket'
// // });

// database.ref().update({
//     stressLevel: 8,
//     'job/company': 'Google',
//     'location/city': 'Chiangmai'
// })

//FETCHING DATA
// 1. 'once' -> fetching only once
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

// 2. 'on' -> fetching upon change (but not using promises, use callback fundtion instead)
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(50);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(55);
// }, 10500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: 'Mike',
//         'job/company': 'Amazon'
//     })
// }, 3000);

// database.ref().on('value', onValueChange);

// REMOVE DATA USING 'set' -> by passing 'null'
//database.ref('isSingle').set(null);

// REMOVE ALL FROM ROOT
// database.ref()
//    .remove()
//    .then(() => {
//     console.log('Remove succeeded.');
//    }).catch((e) => {
//     console.log('Something went wrong');
//    });

// REMOVE SPECIFIC DATA
// database.ref('isSingle')
//    .remove()
//    .then(() => {
//     console.log('Remove succeeded.');
//    }).catch((e) => {
//     console.log('Something went wrong');
//    });

// database.ref('age')
//     .remove()
//     .then(() => {
//         console.log('Remove succeeded.');
//     }).catch((e) => {
//         console.log('Something went wrong');
//     });


//database.ref().set('This is my data');

// database.ref('age').set(45);
// database.ref('location/city').set('Phuket');

// USE 'SET' TO ADD NEW DATA
// database.ref('attributes').set({
//     height: 160,
//     weight: 60
// }).then(() => {
//     console.log('Data saved!');
// }).catch((e) => {
//     console.log('Something went wrong', e);
// });