import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/getVisibleExpenses';

export const ExpensesSummary = (props) => {
    const expensesCount = props.expenses.length;
    const word = expensesCount === 1 ? 'expense ' : 'expenses ';
    const totalExpense = numeral(expensesTotal(props.expenses) / 100).format('$0,0.00');

    return (
        <div>
            <h1>
                Viewing {expensesCount} {word} totalling {totalExpense}
            </h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);