import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/intex";

export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
