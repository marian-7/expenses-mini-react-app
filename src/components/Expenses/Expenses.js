import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2020');

    const changeYearHandler = (newYear) => {
        setYear(newYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter year={year} onChangeYear={changeYearHandler}/>
            {props.expenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </Card>
    );
};

export default Expenses;
