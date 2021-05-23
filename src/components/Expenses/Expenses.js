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
            <div>
                {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount}
                                                            date={expense.date}/>)}

            </div>
        </Card>
    );
};

export default Expenses;
