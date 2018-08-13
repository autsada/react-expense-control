import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <ul>
            <li>
                <Link to={`/edit/${id}`}>Description: {description}</Link>, 
                Amount: {amount}, 
                Created at: {createdAt}
            </li>
        </ul>
    </div>
);

// const ExpenseListItem = (props) => (
//     <div>
//         <ul>
//             <li>
//                 Description: {props.expense.description}, 
//                 Amount: {props.expense.amount}, 
//                 Created at: {props.expense.createdAt}
//                 <button onClick={() => {
//                     props.dispatch(removeExpense({ id: props.expense.id }))
//                 }}>Remove</button>
//             </li>
//         </ul>
//     </div>
// );

export default ExpenseListItem;
