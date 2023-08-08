import React, { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'increment_count'
const DECREMENT_COUNT = 'decrement_count'
const VALUE_TO_ADD = 'value_to_add'
const ADD_VALUE_TO_COUNT = 'add_value_to_add'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1 // we can go for immer to avoid creating new object each time
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)

  const increment = () => {
    //setCount(count + 1)
    dispatch({
      type: INCREMENT_COUNT
    })
  }

  const decrement = () => {
    //setCount(count - 1)
    dispatch({
      type: DECREMENT_COUNT
    })
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0
    dispatch({
      type: VALUE_TO_ADD,
      payload: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //setCount(count + valueToAdd)
    //setValueToAdd(0)
    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="valueto">Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
          className='p-1 m-3 bg-gray-50 border border-gray-300' />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage 