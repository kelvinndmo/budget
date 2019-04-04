import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import SelectedExpense from '../selectors/expenses'

const ExpenseList = props => {
  console.log(props, '_________, ---=')

  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  }
}
export default connect(mapStateToProps)(ExpenseList)
