export interface initialStates {
  counter: number;
}

export enum ActionType {
  DEFAUTLT_NUMBER = "DEFAUTLT_NUMBER",
  INCREASE = "INCREASE",
  DICREMENT = "DICREMENT",
}

interface DEFAUTLTNUMBER {
  type: ActionType.DEFAUTLT_NUMBER;
  payload: number;
}

interface INCREASENUMBER {
  type: ActionType.INCREASE;
  payload: number;
}

interface DICREMENTNumber {
  type: ActionType.DICREMENT;
  payload: number;
}

export type Actions = DEFAUTLTNUMBER | INCREASENUMBER | DICREMENTNumber;
