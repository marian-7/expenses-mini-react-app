import NewExpenseForm from './NewExpenseForm';

import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const [showAddExpense, setShowAddExpense] = useState(false);

    const toggleShowNewExpense = () => setShowAddExpense(prevVal => !prevVal);

    const saveNewExpenseHandler = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddNewExpense(expense);
    };

    return (
        <div className="new-expense">
            {!showAddExpense && <button onClick={toggleShowNewExpense}>Add New Expense</button>}
            {showAddExpense &&
            <NewExpenseForm onSaveExpense={saveNewExpenseHandler} cancelAddingExpense={toggleShowNewExpense}/>}
        </div>
    );
};

export default NewExpense;
