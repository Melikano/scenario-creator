//@flow
import {combineReducers} from 'redux';
import creatingScenarioReducer from './ScenarioReducer';
const scenarioCreator = combineReducers({
  Scenario: creatingScenarioReducer,
});
export default scenarioCreator;
