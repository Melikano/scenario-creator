//@flow
import Actions from '../../constants/Actions';
const ScenarioReducer = (state: Object = {}, action: Object) => {
  console.log(action);
  switch (action.type) {
    case Actions.ADD_SCENARIO_NAME:
      return {...state, name: action.name};
    case Actions.ADD_THING:
      return {...state, thing: action.thing};
    case Actions.REMOVE_THING:
      return state.filter(thing => thing.id !== action.thingId);
    default:
      return state;
  }
};
export default ScenarioReducer;
