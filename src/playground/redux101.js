import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy // same as incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const set = ({ count }) => ({
    type: 'SET',
    count
});

const reset = () => ({
    type: "RESET",
});

// Reducers
// 1. Reducers are pure function
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1
    //     }
    // } else {
    //     return state;
    // }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - is an object that gets sent to the store -> increment, decrement, reset

// Increment
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Reset
store.dispatch(reset());

// Decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

// Set
store.dispatch(set({ count: 101 }));

