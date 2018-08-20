import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter,  { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import{ firebase } from './firebase/firebase';
//import './playground/promises';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        < AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    };
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// const authentication = () => {
//     return (dispatch) => {
//         return firebase.auth().onAuthStateChanged((user)).then(() => {
//             if (user) {
//                 dispatch(login(user.uid));
//                 dispatch(startSetExpenses()).then(() => {
//                     renderApp();
//                     if (history.location.pathname === '/') {
//                         history.push('/dashboard');
//                     }    
//                 });        
//                 console.log('log in');
//             } else {
//                 dispatch(logout());
//                 renderApp();
//                 history.push('/');
//                 console.log('logout');
//             }
//         });
//     }
// };
// authentication();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();

            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
        console.log('log in');
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
        console.log('logout');
    }
});
