import moment from 'moment';
import getVisibleExpenses from '../../selectors/getVisibleExpenses';
import expenses from '../fixtures/expenses';

test('Should filter by text value', () => {
    const filters = {
        text: 'e', // Gum (expenses[0]) should be filtered out
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[1] ]); // expenses[2] comes first because sortBy = 'date', and expenses[0] is filtered out
});

test('Should filter by startDate', () => {
    const filters = {
        text: '', 
        sortBy: 'date',
        startDate: moment(0), // expenses[1] should be filtered out
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('Should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days') // expenses[2] should be filtered out
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});