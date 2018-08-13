import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set up sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { 
        type: 'SORT_BY_DATE' 
    };
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('Should set up sort by amount', () => {
    const action = { 
        type: 'SORT_BY_AMOUNT' 
    };
    const state = filtersReducer(undefined, action);

    expect(state.sortBy).toBe('amount');
});

test('Should set text filter', () => {
    const text = 'some text';
    const action = { 
        type: 'SET_TEXT_FILTER', 
        text 
    };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
});

test('Should set start date filter', () => {
    const startDate = moment();
    const action = { 
        type: 'SET_START_DATE', 
        startDate 
    };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
});

test('Should set end date filter', () => {
    const endDate = moment();
    const action = { 
        type: 'SET_END_DATE', 
        endDate 
    };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
});