function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-list empty">
        <p>No expenses added yet. Add your first expense above!</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.category}</td>
              <td>{expense.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList; 