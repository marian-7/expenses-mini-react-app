import NewExpenseForm from './NewExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpense={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
