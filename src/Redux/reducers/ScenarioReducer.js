//@flow
import Actions from '../../constants/Actions';
const ScenarioReducer = (
  state: Object = {name: '', things: []},
  action: Object,
) => {
  switch (action.type) {
    case Actions.ADD_SCENARIO_NAME:
      return {...state, name: action.name};
    case Actions.ADD_THING:
      return {...state, things: [...state.things, action.thing]};
    case Actions.REMOVE_THING:
      return {
        ...state,
        things: state.things.filter(thing => thing.id !== action.thingId),
      };
    default:
      return state;
  }
};
export default ScenarioReducer;
