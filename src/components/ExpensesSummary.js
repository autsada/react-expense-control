import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import expensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/getVisibleExpenses';

export const ExpensesSummary = (props) => {
    const expensesCount = props.expenses.length;
    const word = expensesCount === 1 ? 'expense ' : 'expenses ';
    const totalExpense = numeral(expensesTotal(props.expenses) / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> {word} totalling <span>{totalExpense}</span>
                </h1>
                <div className="page-header__actions" >
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);