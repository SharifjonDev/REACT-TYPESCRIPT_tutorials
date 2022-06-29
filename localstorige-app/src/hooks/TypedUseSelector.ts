import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export const TypedSelector: TypedUseSelectorHook<RootState> = useSelector;
