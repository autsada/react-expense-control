import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpensesListSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />);

    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesListSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);

    expect(wrapper).toMatchSnapshot();
});
