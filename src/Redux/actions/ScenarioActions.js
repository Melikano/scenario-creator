//@flow
import Actions from '../../constants/Actions';
export const addScenarioName = (name: string) => ({
  type: Actions.ADD_SCENARIO_NAME,
  name,
});

export const addThing = (thing: {
  id: string,
  name: string,
  description: string,
}) => ({
  type: Actions.ADD_THING,
  thing,
});

export const removeThing = (thingId: string) => ({
  type: Actions.REMOVE_THING,
  thingId,
});
