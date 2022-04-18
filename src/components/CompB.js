import { compBIncrementAction, compBSelector, COMP_B_INCREMENT_COUNTER } from "../features/CompB/compBSlice"
import { useDispatch, useSelector } from 'react-redux';

export default function CompB() {
  console.log("comp B rendered");
  const dispatch = useDispatch()

  const counter = useSelector(compBSelector)

  return (
    <div className='box'>
      <h2>Component B</h2>
      <p>Counter is: {counter}</p>
      <button type='button' onClick={() => dispatch(compBIncrementAction(COMP_B_INCREMENT_COUNTER, 1))}>Click to Increment</button>
    </div>
  )
}
