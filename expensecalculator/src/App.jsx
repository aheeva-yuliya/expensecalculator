import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Results from './components/Results'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [results, setResults] = useState(null)

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const calculateResults = () => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    const averageDaily = total / 30
    
    const sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount)
    const topThree = sortedExpenses.slice(0, 3)

    setResults({
      total,
      averageDaily,
      topThree
    })
  }

  return (
    <div className="app">
      <header>
        <h1>Expense Calculator</h1>
      </header>
      <main>
        <div className="container">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseList expenses={expenses} />
          <button 
            className="calculate-btn"
            onClick={calculateResults}
            disabled={expenses.length === 0}
          >
            Calculate
          </button>
          {results && <Results results={results} />}
        </div>
      </main>
    </div>
  )
}

export default App
