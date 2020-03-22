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
