function Results({ results }) {
  const { total, averageDaily, topThree } = results;

  return (
    <div className="results">
      <h2>Calculation Results</h2>
      <div className="result-item">
        <h3>Total Expenses</h3>
        <p>${total.toLocaleString()}</p>
      </div>
      <div className="result-item">
        <h3>Average Daily Expense</h3>
        <p>${averageDaily.toLocaleString()}</p>
      </div>
      <div className="result-item">
        <h3>Top 3 Expenses</h3>
        <ul>
          {topThree.map((expense, index) => (
            <li key={expense.id}>
              {index + 1}. {expense.category} (${expense.amount.toLocaleString()})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Results; 