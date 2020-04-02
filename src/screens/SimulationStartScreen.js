//@flow
import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Simulator from '../utils/Simulator';
import {useRoute} from '@react-navigation/native';
import type {thingType} from '../constants/Types';
import DistFuncs from '../constants/DistFunctions';
import {randomUniform, randomExponential, randomNormal} from 'd3';
import BarChart from '../components/Chart/BarChart';

const SimulationStartScreen = () => {
  const {duration, things} = useRoute().params;
  console.log(things);
  const fsm = useSelector(state => state.fsm);

  const {path, sensorsData, actuatorsValues} = Simulator(
    fsm,
    things.map(resolveFunction),
    duration,
  );
  console.log(path);
  console.log(sensorsData);
  console.log(actuatorsValues);
  return (
    <ScrollView>
      {sensorsData.map(sens => (
        <BarChart
          data={sens.value.map((v: number, index: number) => ({
            label: index.toString(),
            value: v,
          }))}
        />
      ))}
    </ScrollView>
  );
};
const resolveFunction = (thing: thingType) => {
  const distFunc = thing.distributionFuntion;
  if (distFunc) {
    console.log(distFunc.funcName);
    switch (distFunc.funcName) {
      case DistFuncs.Uniform:
        const newc = {
          ...thing,
          distributionFuntion: {
            ...distFunc,
            func: randomUniform(distFunc.min, distFunc.max),
          },
        };
        console.log(newc);
        return newc;
      case DistFuncs.Exponentioal:
        return {
          ...thing,
          distributionFuntion: {
            ...distFunc,
            func: randomExponential(distFunc.param1, [
              distFunc.min,
              distFunc.max,
            ]),
          },
        };
      case DistFuncs.Normal:
        return {
          ...thing,
          distributionFuntion: {
            ...distFunc,
            func: randomNormal(distFunc.param1, distFunc.param2, [
              distFunc.min,
              distFunc.max,
            ]),
          },
        };
      default:
        return thing;
    }
  }
  return thing;
};
export default SimulationStartScreen;
