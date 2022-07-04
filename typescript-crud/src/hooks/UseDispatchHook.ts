import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionReducer from "../store/action-reducer";

export const UseDispatchHook = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionReducer, dispatch);
};
