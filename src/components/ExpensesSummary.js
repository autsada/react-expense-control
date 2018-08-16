import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/getVisibleExpenses';

// export const ExpensesListSummary = (props) => (
//     <div>
//         {
//             props.expenses.length > 0 && 
//             <p>
//                 Total view: {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'}
//                 -
//                 Total amount: {expensesTotal(props.expenses.reduce((sum, prev) => sum + prev.amount, 0))}
//             </p>
//         }
//     </div>
// );
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