//@flow
import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Tabs, Tab} from 'native-base';
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
import {State, TouchableOpacity} from 'react-native-gesture-handler';
import StateBox from '../components/StateBox';
import TranBox from '../components/TranBox';
import SharedStyles from '../constants/Styles';

const {width} = Dimensions.get('window');

const SimulationStartScreen = () => {
  const [reload, setReload] = useState(false);
  const [path, setPath] = useState([]);
  const [sensorsData, setSensorsData] = useState([]);
  const [actuatorsValues, setActuatorValues] = useState([]);
  const navigation = useNavigation();
  const {duration, things, scenario} = useRoute().params;
  const fsm = useSelector(state => state.fsm);

  const passedFsm =
    fsm.states.length > 0 && fsm.transitions.length > 0 ? fsm : scenario.fsm;
  console.log(passedFsm);
  useEffect(() => {
    const {path, sensorsData, actuatorsValues} = Simulator(
      passedFsm,
      things.map(resolveFunction),
      duration,
    );

    setPath(path);
    setSensorsData(sensorsData);
    setActuatorValues(actuatorsValues);
  }, [reload]);

  console.log(sensorsData);
  console.log(actuatorsValues);

  const renderDiagrams = () => (
    <ScrollView
      style={{backgroundColor: Colors.ghostWhite, paddingVertical: 10}}>
      <View style={styles.chartContainer}>
        {sensorsData.map(sens => (
          <>
            <Text style={styles.chartTitle}>
              {//$FlowFixMe
              Strings.chartTitle(sens.name)}
            </Text>
            <BarChart
              data={sens.value
                .slice(0, sens.value.length - 1)
                .map((v: number, index: number) => ({
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
              data={act.value.slice(1).map((v: number, index: number) => ({
                label: index.toString(),
                value: v,
              }))}
            />
          </>
        ))}
      </View>
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
    </ScrollView>
  );

  const renderPath = () => {
    return (
      <FlatList
        style={{backgroundColor: Colors.ghostWhite, paddingVertical: 20}}
        data={path.slice(1)}
        ListHeaderComponent={
          <Text style={SharedStyles.sharedTextStyle}>{`${Strings.start} ${
            Strings.simulation
          }`}</Text>
        }
        ListFooterComponent={
          <View>
            <Text style={SharedStyles.sharedTextStyle}>{Strings.end}</Text>

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
                onPress={() =>
                  navigation.navigate(Screens.addName, {reset: true})
                }
                style={{backgroundColor: Colors.blueButton}}
              />
            </View>
          </View>
        }
        renderItem={({item, index}) => (
          <View>
            {index !== 0 && (
              <TranBox
                sensorsVlaues={sensorsData.map(sens => ({
                  //$FlowFixMe
                  name: sens.name,
                  value: Number(sens.value[index].toPrecision(4)),
                }))}
              />
            )}
            <StateBox state={item} />
          </View>
        )}
      />
    );
  };

  return (
    <KeyboardAwareScrollView style={{backgroundColor: Colors.white}}>
      <SharedHeader title="نتایج شبیه‌سازی" hasTabs />
      <Tabs>
        <Tab
          heading={Strings.showDiagrams}
          tabStyle={{backgroundColor: Colors.blueButton}}>
          {renderDiagrams()}
        </Tab>
        <Tab
          heading={Strings.path}
          tabStyle={{backgroundColor: Colors.blueButton}}>
          {renderPath()}
        </Tab>
      </Tabs>
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
