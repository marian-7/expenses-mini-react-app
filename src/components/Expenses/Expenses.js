import {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [year, setYear] = useState('2020');

    const changeYearHandler = (newYear) => {
        setYear(newYear);
    };

    const filteredExpenses = props.expenses.filter(expense => year === expense.date.getFullYear().toString());

    return (
        <Card className="expenses">
            <ExpensesFilter year={year} onChangeYear={changeYearHandler}/>
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
