import { compCIncrementAction, compCSelector, COMP_C_INCREMENT_COUNTER } from "../features/CompC/compCSlice"
import { useDispatch, useSelector } from 'react-redux';

export default function CompC() {
  console.log("comp C rendered");
  const dispatch = useDispatch()

  const counter = useSelector(compCSelector)

  return (
    <div className='box'>
      <h2>Component C</h2>
      <p>Counter is: {counter}</p>
      <button type='button' onClick={() => dispatch(compCIncrementAction(COMP_C_INCREMENT_COUNTER, 1))}>Click to Increment</button>
    </div>
  )
}
