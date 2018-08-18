import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expenses';

test('Should set up default state expense array', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'water',
        note: 'Office water',
        amount: 5000,
        createdAt: 1000 
    };

    const action = { 
        type: 'ADD_EXPENSE', 
        expense 
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([ 
        ...expenses,
        expense 
    ]);
});

test('Should remove expense by id', () => {
    const idToRemove = expenses[1].id;

    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: idToRemove  
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should not remove expense if id not found', () => {
    const idToRemove = '5';

    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: idToRemove  
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('Should edit an expense matched by id', () => {
    const expenseToEdit = { 
        id: expenses[1].id,
        updates: {
            amount: 300000
        } 
    };

    const action = { 
        type: 'EDIT_EXPENSE', 
        ...expenseToEdit  
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(expenseToEdit.updates.amount);
});

test('Should not edit expense if id not found', () => {
    const expenseToEdit = { 
        id: '1000',
        updates: {
            amount: 300000
        } 
    };

    const action = { 
        type: 'EDIT_EXPENSE', 
        ...expenseToEdit  
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
    const expensesToSet = [expenses[0], expenses[2]];
    const action = {
        type: 'SET_EXPENSES',
        expenses: expensesToSet 
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expensesToSet);
});