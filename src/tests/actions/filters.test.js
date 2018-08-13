import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate }  from '../../actions/filters';
import moment from 'moment';

test('Should set up text filter action object', () => {
    const filterText = 'some text';

    const action = setTextFilter(filterText);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: filterText
    });
});

test('Should set up text filter action with no text filter', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should set up sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should set up sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should set up set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should set up set end date action object', () => {
    const action = setEndDate(moment(50000));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(50000)
    });
});