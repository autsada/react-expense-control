
const expensesTotal = (expenses) => expenses.reduce((sum, cur) => sum + cur.amount, 0);

export default expensesTotal;
