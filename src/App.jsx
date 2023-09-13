
import { useDispatch, useSelector } from 'react-redux';

import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices';

function App() {

  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>count is {value}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
