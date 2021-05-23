import React, {useState} from "react";

import dummyData from "./dummyData";
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {
    const [expenses, setExpenses] = useState(dummyData);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => [expense, ...prevExpenses]);
    };

    return (
        <div>
            <NewExpense onAddNewExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
};

export default App;
