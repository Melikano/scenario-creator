//@flow

export type nextButton = 'NEXT';
export type prevButton = 'PREV';

export type ButtonType = 'NEXT' | 'PREV';
export type thingType = {
  id: string,
  name: string,
  type: string,
  description: string,
};
export type stateType = {
  stateNumber: number,
  x: number,
  y: number,
  actuatorsValues?: ?Array<{...thingType, value: string}>,
};

export type transType = {
  preState: stateType,
  nextState: stateType,
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
