export const COMP_B_INCREMENT_COUNTER = 'counterB/INCREMENT'

const initialState = {
  counter: 0,
};

export function compBReducer(state = initialState, action) {
  switch (action.type) {
    case COMP_B_INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.payload }
    default:
      return state;
  }
}

export function compBIncrementAction(type, payload) {
  return { type: type, payload: payload }
}

export const compBSelector = ({ compB }) => { return compB.counter }
