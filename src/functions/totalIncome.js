
const totalIncome = (people) => {
    return people.reduce((income, person) => income + person.income, 0)
}

module.exports = totalIncome;