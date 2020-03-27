//@flow
import type {fsmType} from '../constants/Types';
const Simulator = (
  {states, transitions}: fsmType,
  simulationTime: number,
  initialValues: Map<string, number>,
  distributionFunctions: Map<string, string>,
) => {};
export default Simulator;
