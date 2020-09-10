//@flow
export type ButtonType = 'NEXT' | 'PREV' | 'SIM' | 'EDIT' | 'START';
export type distFuncType = {
  funcName: string,
  min?: ?number,
  max?: ?number,
  param1?: ?number,
  param2?: ?number,
  func?: Function,
};
export type thingType = {
  id: string,
  name: string,
  type: string,
  description: string,
  distributionFuntion?: distFuncType,
  initialValue?: number,
};
export type stateType = {
  stateNumber: number,
  stateName: string,
  x: number,
  y: number,
  actuatorsValues?: ?Array<{...thingType, value: string}>,
};

export type transType = {
  preState: stateType,
  nextState: stateType,
  hasReverse: boolean,
  sensorsConditions: ?Array<{
    ...thingType,
    upperBound: string,
    lowerBound: string,
  }>,
};

export type fsmType = {
  states: Array<stateType>,
  transitions: Array<transType>,
};

export type scenarioType = {
  name: String,
  description: string,
  dateCreated: String,
  things: Array<thingType>,
  fsm: fsmType,
};
