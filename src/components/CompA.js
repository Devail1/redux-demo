import { compAIncrementAction, compASelector, COMP_A_INCREMENT_COUNTER } from "../features/CompA/compASlice"
import { useDispatch, useSelector } from 'react-redux';

export default function CompA() {
  console.log("comp A rendered");
  const dispatch = useDispatch()

  const counter = useSelector(compASelector)

  return (
    <div className='box'>
      <h2>Component A</h2>
      <p>Counter is: {counter}</p>
      <button type='button' onClick={() => dispatch(compAIncrementAction(COMP_A_INCREMENT_COUNTER, 1))}>Click to Increment</button>
    </div>
  )
}
