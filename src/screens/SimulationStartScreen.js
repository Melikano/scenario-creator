//@flow
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Simulator from '../utils/Simulator';
import {useRoute, useNavigation} from '@react-navigation/native';
import type {thingType} from '../constants/Types';
import DistFuncs from '../constants/DistFunctions';
import {randomUniform, randomExponential, randomNormal} from 'd3';
import BarChart from '../components/Chart/BarChart';
import {View, Text} from 'native-base';
import SharedHeader from '../sharedComponents/Header';
import Fonts from '../constants/Fonts';
import Strings from '../constants/Strings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SharedButton from '../sharedComponents/SharedButton';
import Colors from '../constants/Colors';
import Screens from '../constants/Screens';

const SimulationStartScreen = () => {
  const [reload, setReload] = useState(false);
  const navigation = useNavigation();
  const {duration, things, scenario} = useRoute().params;
  const fsm = useSelector(state => state.fsm);

  const passedFsm =
    fsm.states.length > 0 && fsm.transitions.length > 0 ? fsm : scenario.fsm;
  console.log(passedFsm);
  const {path, sensorsData, actuatorsValues} = Simulator(
    passedFsm,
    things.map(resolveFunction),
    duration,
  );
  console.log(sensorsData);
  console.log(actuatorsValues);

  const renderDiagrams = () => (
    <ScrollView>
      <View style={styles.chartContainer}>
        {sensorsData.map(sens => (
          <>
            <Text style={styles.chartTitle}>
              {//$FlowFixMe
              Strings.chartTitle(sens.name)}
            </Text>
            <BarChart
              data={sens.value.map((v: number, index: number) => ({
                label: index.toString(),
                value: v,
              }))}
            />
          </>
        ))}
      </View>
      <View style={styles.chartContainer}>
        {actuatorsValues.map(act => (
          <>
            <Text style={styles.chartTitle}>
              {//$FlowFixMe
              Strings.chartTitle(act.name)}
            </Text>
            <BarChart
              data={act.value.map((v: number, index: number) => ({
                label: index.toString(),
                value: v,
              }))}
            />
          </>
        ))}
      </View>
    </ScrollView>
  );
  return (
    <KeyboardAwareScrollView>
      <SharedHeader title="نتایج شبیه‌سازی" />
      {renderDiagrams()}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 40,
        }}>
        <SharedButton
          title={Strings.repeat}
          onPress={() => setReload(!reload)}
          style={{backgroundColor: Colors.blueButton}}
        />
        <SharedButton
          title={Strings.newScenrio}
          onPress={() => navigation.navigate(Screens.addName, {reset: true})}
          style={{backgroundColor: Colors.blueButton}}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
const resolveFunction = (thing: thingType) => {
  const distFunc = thing.distributionFuntion;
  if (distFunc) {
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

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: 'center',
  },
  chartTitle: {
    textAlign: 'center',
    marginVertical: 30,
    fontFamily: Fonts.iransans,
  },
});
export default SimulationStartScreen;
