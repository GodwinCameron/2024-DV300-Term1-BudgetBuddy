
const totalExpenses = (expenseList) => {
    return expenseList.reduce((total, expense) => total + expense.amount, 0)
}

module.exports = totalExpenses;