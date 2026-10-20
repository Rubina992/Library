import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/CounterSlice.js'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Counter: {count}</h2>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </>
  )
}