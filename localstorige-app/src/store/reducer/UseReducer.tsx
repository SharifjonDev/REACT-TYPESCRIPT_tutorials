import { Actions, ActionType, initialStates } from "../../types/use";

const initialState: initialStates = {
  counter: Number(localStorage.getItem("counter")),
};

export const UseReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.INCREASE:
      return { counter: state.counter + action.payload };
    case ActionType.DICREMENT:
      return { counter: state.counter - action.payload };
    case ActionType.DEFAUTLT_NUMBER:
      return { counter: (state.counter = action.payload) };
    default:
      return state;
  }
};
