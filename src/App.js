import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get Started</h2>
      <ExpenseItem
        title="Insurance"
        date={new Date(2023, 7, 15)}
        price="100"
      ></ExpenseItem>
      <ExpenseItem
        title="Book"
        date={new Date(2023, 8, 25)}
        price="10"
      ></ExpenseItem>
      <ExpenseItem
        title="Pen"
        date={new Date(2023, 2, 10)}
        price="1"
      ></ExpenseItem>
      <ExpenseItem
        title="Laptop"
        date={new Date(2023, 9, 17)}
        price="200"
      ></ExpenseItem>
    </div>
  );
}

export default App;
