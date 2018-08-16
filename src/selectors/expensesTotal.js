//import numeral from 'numeral';

//const expensesTotal = (amount) => numeral(amount / 100).format('$0,0.00');

const expensesTotal = (expenses) => expenses.reduce((sum, cur) => sum + cur.amount, 0);

export default expensesTotal;
