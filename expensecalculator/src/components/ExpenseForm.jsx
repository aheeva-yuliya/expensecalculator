import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!category || !amount) return;
    
    const expense = {
      id: Date.now(),
      category: category.trim(),
      amount: parseFloat(amount)
    };
    
    onAddExpense(expense);
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g., Groceries"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount ($):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 15000"
          min="0"
          step="0.01"
          required
        />
      </div>
      <button type="submit" className="add-btn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm; 