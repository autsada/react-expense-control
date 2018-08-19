import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, startAddExpense, removeExpense, startRemoveExpense, editExpense,  startEditExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const mockStore = configureStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });

    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense('123abc');

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should remove expense data from firebase database', (done) => {
    const store = mockStore({});
    const id = expenses[1].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        // const remainingExpenses = [];
        //     snapshot.forEach((expense) => {
        //         remainingExpenses.push({
        //             id: expense.key,
        //             ...expense.val()
        //         });
        //     });
        //expect(remainingExpenses).toEqual([ expenses[0], expenses[2] ]);
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('Should set up edit expense action object', () => {
    const action = editExpense('123abc', { amount: 4500 });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 4500
        }
    });
});

test('Should edit expense data in firebase database', (done) => {
    const store = mockStore({});
    const id = expenses[1].id;
    const updates = {
        description: 'Rent (last month)'
    }

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description);
        done();
    });
});

test('Should set up add expense with provided value', () => {
    const expenseData = expenses[0];

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    });
});

test('Should add expense to database and store', (done) => {
    const store = mockStore({});
    const expenseData = {
        description: 'Notebook',
        amount: '50000',
        note: 'new hp 35000',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((expense) => {
        expect(expense.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with default to database and store', (done) => {
    const store = mockStore({});
    const expenseDefault = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((expense) => {
        expect(expense.val()).toEqual(expenseDefault);
        done();
    });
});

test('Should setup set expense action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('Should fetch the expenses data from database', (done) => {
    const store = mockStore({});
    const expensesData = expenses;

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: expensesData
        });
        done();
    });
});

// test('Should set up add expense with no value', () => {
//     const action = startAddExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });