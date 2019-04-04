import React from 'react';
import ExpenseList from './ExpensesList';
import { connect } from 'react-redux';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboard = () => (
    <div>
    <ExpenseListFilters />
    <ExpenseList />
    </div>
);

export default ExpenseDashboard;