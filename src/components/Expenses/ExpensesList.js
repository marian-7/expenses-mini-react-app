import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = (props) => {
    return (
        <ul className="expenses-list">
            {props.filteredExpenses.length === 0 &&
            <p className="expenses-list__fallback">No expenses for this year.</p>}
            {props.filteredExpenses.length > 0 && props.filteredExpenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </ul>

    );
};

export default ExpensesList;