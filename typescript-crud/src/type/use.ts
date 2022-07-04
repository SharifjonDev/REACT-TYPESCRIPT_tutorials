export interface InitialStates {
  loading: boolean;
  data: any[];
  error: string | null;
}

export enum TypedDefault {
  ACTION_LOADING = "ACTION_LOADING",
  ACTION_DATA = "ACTION_DATA",
  ACTION_ERROR = "ACTION_ERROR",
  ACTION_DELETE = "ACTION_DELETE",
  ACTION_ADD = "ACTION_ADD",
  ACTION_EDIT = "ACTION_EDIT",
}

interface LoadingFunc {
  type: TypedDefault.ACTION_LOADING;
}

interface DataFunc {
  type: TypedDefault.ACTION_DATA;
  payload: any;
}

interface ErrorFunc {
  type: TypedDefault.ACTION_ERROR;
  payload: string;
}

interface DeleteFunc {
  type: TypedDefault.ACTION_DELETE;
  payload: number;
}

interface AddFunc {
  type: TypedDefault.ACTION_ADD;
  payload: any[];
}

interface EditFunc {
  type: TypedDefault.ACTION_EDIT;
  payload: any[];
}
export type Actions =
  | LoadingFunc
  | DataFunc
  | ErrorFunc
  | DeleteFunc
  | AddFunc
  | EditFunc;
