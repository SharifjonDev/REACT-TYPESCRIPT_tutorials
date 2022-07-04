import { InitialStates, Actions, TypedDefault } from "../../type/use";

const InitialState: InitialStates = {
  loading: false,
  data: [],
  error: "",
};

export const UseReducers = (state = InitialState, action: Actions) => {
  switch (action.type) {
    case TypedDefault.ACTION_LOADING:
      return { ...state, loading: true };
    case TypedDefault.ACTION_DATA:
      return { ...state, loading: false, data: action.payload };
    case TypedDefault.ACTION_ERROR:
      return { ...state, error: action.payload };
    case TypedDefault.ACTION_DELETE:
      return {
        ...state,
        data: state.data.filter((i) => i.id !== action.payload),
      };
    case TypedDefault.ACTION_ADD:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case TypedDefault.ACTION_EDIT:
      const idx = state.data.findIndex((item) => item.id === action.payload);
      state.data[idx] = action.payload;
      return { ...state };
    default:
      return state;
  }
};
