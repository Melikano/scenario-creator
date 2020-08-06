//@flow
import Actions from '../../constants/Actions';
const ScenarioReducer = (
  state: Object = {
    name: '',
    description: '',
    dateCreated: '',
    things: [],
    fsm: {states: [], transitions: []},
  },
  action: Object,
) => {
  switch (action.type) {
    case Actions.ADD_SCENARIO_NAME:
      return {...state, name: action.name};
    case Actions.ADD_SCENARIO_DESC:
      return {...state, description: action.description};
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
        fsm: {...state.fsm, states: [...state.fsm.states, action.state]},
      };
    case Actions.ADD_TRANSITION:
      return {
        ...state,
        fsm: {
          ...state.fsm,
          transitions: [...state.fsm.transitions, action.transition],
        },
      };
    case Actions.ADD_DATE:
      return {...state, dateCreated: action.date};
    default:
      return state;
  }
};
export default ScenarioReducer;
