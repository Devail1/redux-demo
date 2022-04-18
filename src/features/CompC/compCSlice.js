import { COMP_C_INCREMENT_COUNTER } from "../../redux/constants/constants";

const initialState = {
  counter: 0,
};

export function compCReducer(state = initialState, action) {
  switch (action.type) {
    case COMP_C_INCREMENT_COUNTER: {
      return { ...state, counter: state.counter + action.payload }
    }
    default:
      return state;
  }
}

export function compCIncrementAction(type, payload) {
  return { type: type, payload: payload }
}

export const compCSelector = ({ compC }) => { return compC.counter }
