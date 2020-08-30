//@flow
import type {
  fsmType,
  transType,
  stateType,
  thingType,
} from '../constants/Types';
const Simulator = (
  {states, transitions}: fsmType,
  things: Array<thingType>,
  simDuration: number,
) => {
  const initialState: stateType = states[0];
  console.log('here here here here here');
  console.log(states);
  let currentState: stateType = initialState;
  const sensorsData: Array<{id: string, value: Array<number>}> = things
    .filter(thing => thing.type === 'sensor')
    .map(sens => {
      const val = sens.initialValue;
      return val !== undefined
        ? {
            id: sens.id,
            value: [val],
            name: sens.name,
          }
        : {id: 'error', value: [-1], name: ''};
    });
  const actuatorsValues: Array<{id: string, value: Array<number>}> = things
    .filter(thing => thing.type === 'actuator')
    .map(act => {
      const currAct = initialState.actuatorsValues?.find(
        actuator => actuator.id === act.id,
      );
      return currAct
        ? {
            id: act.id,
            value: [parseInt(currAct.value, 10)],
            name: act.name,
          }
        : {id: 'error', value: [-1], name: ''};
    });
  let path = [initialState];
  let time = new Array(simDuration);
  for (let i = 0; i < simDuration; i++) {
    time.push(i);
  }
  console.log(time);
  time.forEach(t => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>ITERATION' + t);
    sensorsData.map(s => {
      console.log('---------------' + s.id);
      console.log(s.value[t]);
    });
    const nextTran = transitions
      .filter((tran: transType) => tran.preState === currentState)
      .find((tran: transType) =>
        tran.sensorsConditions?.reduce(
          (acc, condition) =>
            acc &&
            meetCondition(
              sensorsData.find(sensor => sensor.id === condition.id)?.value[t],
              parseInt(condition.upperBound, 10),
              parseInt(condition.lowerBound, 10),
            ),
          true,
        ),
      );
    if (nextTran) {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>NextState');
      currentState = nextTran.nextState;
      console.log(currentState);
    }
    path.push(currentState);
    sensorsData.forEach(sensor =>
      sensor.value.push(
        things
          .filter(thing => thing.type === 'sensor')
          .find(thing => thing.id === sensor.id)
          //$FlowFixMe
          .distributionFuntion.func(),
      ),
    );
    actuatorsValues.forEach(act => {
      const v = currentState.actuatorsValues?.find(a => a.id === act.id);
      act.value.push(v ? parseInt(v.value, 10) : -1);
    });
  });

  return {path, sensorsData, actuatorsValues};
};

const meetCondition = (
  value: ?number,
  upperBound: number,
  lowerBound: number,
): boolean => {
  return value ? value < upperBound && value > lowerBound : false;
};
export default Simulator;
