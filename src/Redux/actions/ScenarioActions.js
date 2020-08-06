//@flow
import Actions from '../../constants/Actions';
import type {stateType, thingType, transType} from '../../constants/Types';
export const addScenarioName = (name: string) => ({
  type: Actions.ADD_SCENARIO_NAME,
  name,
});
export const addDescription = (description: string) => ({
  type: Actions.ADD_SCENARIO_DESC,
  description,
});
export const addThing = (thing: thingType) => ({
  type: Actions.ADD_THING,
  thing,
});

export const removeThing = (thingId: string) => ({
  type: Actions.REMOVE_THING,
  thingId,
});

export const addState = (state: stateType) => ({
  type: Actions.ADD_STATE,
  state,
});
export const addTransition = (transition: transType) => ({
  type: Actions.ADD_TRANSITION,
  transition,
});
export const addDate = (date: string) => ({
  type: Actions.ADD_DATE,
  date,
});
