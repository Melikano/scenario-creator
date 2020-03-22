//@flow
import Actions from '../../constants/Actions';
const ScenarioReducer = (
  state: Object = {name: '', things: [], fsm: {states: []}},
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
    case Actions.ADD_STATE:
      return {
        ...state,
        fsm: {states: [...state.fsm.states, action.state]},
      };
    default:
      return state;
  }
};
export default ScenarioReducer;
