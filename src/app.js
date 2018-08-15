import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { addExpense, removeExpense, editExpense } from './actions/expenses';
// import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
//import getVisibleExpenses from './selectors/getVisibleExpenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
//console.log(store.getState());

//store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: -1000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 10300, createdAt: 500 }));
// console.log(store.getState());

// // store.dispatch(setTextFilter('water'));

// // setTimeout(() => {
// //     store.dispatch(setTextFilter('bill'));
// // }, 3000); 

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);
//console.log('test')
const jsx = (
    <Provider store={store}>
        < AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
