const totalIncome = require('../functions/totalIncome');
const totalExpenses = require('../functions/totalExpenses');

var people = [];
var expenseList = [];

beforeEach(() => {
    people = [
        { name: "Mark", income: 12000 },
        { name: "Marry", income: 8550 },
        { name: "Joe", income: 24000 }
    ]
    expenseList = [
        { item: "Netflix", amount: 200 },
        { item: "Snacks", amount: 1250 },
        { item: "Toiletries", amount: 900 }
    ]
})

afterEach(() => {
    people = []; // resets the people list
    expenseList = []; // resets the expense list
})

describe("Tests for people income total", () => {
    test("test for total income should be = 44550", () => {
        expect(totalIncome(people)).toBe(44550) // checks that the total amount is correct
    })
})

describe("Tests for expenses total", () => {
    test("test for total expenses should be = 2350", () => {
        expect(totalExpenses(expenseList)).toBe(2350) // chekcs that the total amout is correct
    })
})

describe("tests for adding person to people list", () => {
    test("adding of new person", () => {
        var newPerson = { name: "John", income: 30000 };

        expect(people.length).toBe(3); //checks that the length is correct
        people.push(newPerson);
        expect(people.length).toEqual(4); // checks that the updated length is correct after push
    })

    test("adding of a new person is the correct values", () => {
        var newPerson = { name: "John", income: 30000 };

        people.push(newPerson);

        expect(people[3].name).toMatch(/John/) // checks taht the name is correct
        expect(people[3]).toEqual(newPerson) // checks that the index has the correct new person
        expect(people.length).toEqual(4) // checks that the length is correct

        expect(people).toBeDefined() // checks that the list is defined
        expect(people).not.toBeUndefined() // checks that the list is not undefined
    })

    test("adding of a new person gives the correct new total income", () => {
        var newPerson = { name: "John", income: 30000 };

        people.push(newPerson);

        expect(totalIncome(people)).toBe(74550) // checks that the total amount is correct
    })
})