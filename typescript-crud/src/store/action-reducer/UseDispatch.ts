import { TypedDefault, Actions } from "../../type/use";
import { Dispatch } from "redux";
import axios from "axios";

export const UseDispatch = () => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      dispatch({ type: TypedDefault.ACTION_LOADING });

      const res = await axios.get("https://reqres.in/api/users?page=2");
      dispatch({ type: TypedDefault.ACTION_DATA, payload: res.data.data });
      dispatch({ type: TypedDefault.ACTION_DELETE, payload: res.data.data.id });
    } catch (error) {
      dispatch({
        type: TypedDefault.ACTION_ERROR,
        payload: "Something went wrong!!!",
      });
    }
  };
};
