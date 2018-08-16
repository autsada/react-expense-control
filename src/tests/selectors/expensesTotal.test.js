import expensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const result = expensesTotal([]);

    expect(result).toBe(0);
});

test('Should add up a single expense', () => {
    const result = expensesTotal([expenses[0]]);

    expect(result).toBe(195);
});

test('Should add up multiple expenses', () => {
    const result = expensesTotal(expenses);

    expect(result).toBe(114195);
});
