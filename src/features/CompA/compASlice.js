import { COMP_A_INCREMENT_COUNTER } from "../../redux/constants/constants";

const initialState = {
  counter: 0,
};


export function compAReducer(state = initialState, action) {
  switch (action.type) {
    case COMP_A_INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.payload }
    default:
      return state;
  }
}

export function compAIncrementAction(type, payload) {
  return { type: type, payload: payload }
}

export const compASelector = ({ compA }) => { return compA.counter }
