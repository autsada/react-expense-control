import uuid from 'uuid';
import database from '../firebase/firebase';

//Actions
// 1. ADD_EXPENSE
export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense
});

export const startAddExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => {
    return (dispatch) => {
        // const {
        //     description = '',
        //     note = '',
        //     amount = 0,
        //     createdAt = 0
        // } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// export const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createdAt = 0
//     } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

// 2. REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// 3. EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((expense) => {
                expenses.push({
                    id: expense.key,
                    ...expense.val()
                });
            });
            
            dispatch(setExpenses(expenses));
        });
    };
};

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