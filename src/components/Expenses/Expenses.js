import {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2021');

    const changeYearHandler = (newYear) => {
        setYear(newYear);
    };

    const filteredExpenses = props.expenses.filter(expense => year === expense.date.getFullYear().toString());

    return (
        <Card className="expenses">
            <ExpensesFilter year={year} onChangeYear={changeYearHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
};
/*
ternary exp
filteredExpenses.length === 0 ? <p>No expenses for this year.</p> :
                filteredExpenses.map(expense => <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)*/
export default Expenses;
