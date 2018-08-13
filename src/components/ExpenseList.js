import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/getVisibleExpenses';

// export ExpenseList for testing
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense}/>    
                ))
            )
        }
    </div>
);

// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
//         {
//             props.expenses.map((expense) => (
//                 <ExpenseListItem key={expense.id} expense={expense}/>    
//             ))
//         }
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
