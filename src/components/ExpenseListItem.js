import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            - 
            {moment(createdAt).format('MMM Do, YYYY')}
        </p> 
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
