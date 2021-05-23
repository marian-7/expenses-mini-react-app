import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.86,
      date: new Date(2021, 2, 28),
    },
    { id: 'e2', title: 'Food', amount: 800.23, date: new Date(2021, 2, 23) },
    {
      id: 'e3',
      title: 'Education',
      amount: 543.66,
      date: new Date(2021, 0, 13),
    },
    { id: 'e4', title: 'Transit', amount: 793.11, date: new Date(2021, 1, 4) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
