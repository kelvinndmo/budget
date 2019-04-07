import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [
  {
    description: 'kelvin',
    id: '1 ',
    note: 'back 95',
    createdAt: 0,
    amount: 50
  },
  {
    description: 'kelvin onkundi',
    id: '2',
    note: 'back 95',
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
    amount: 50000
  },
  {
    description: 'kelvin ndemo',
    id: '3',
    note: 'back 95',
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
    amount: 5000
  }
]

test('should filter by text value', () => {
  const filters = {
    text: 'd',
    sortBy: 'date',
    startDate: undefined,
    EndDate: undefined
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    EndDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0]])
})

// test('should filter by enddate', () => {
//   const filters = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     EndDate: moment(0)
//       .add(2, 'days')
//       .valueOf()
//   }

//   const action = selectExpenses(expenses, filters)

//   expect(action).toEqual([expenses[0], expenses[1]])
// })

test('should set by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    EndDate: undefined
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})

test('should set by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    EndDate: undefined
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})
