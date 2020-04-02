//@flow
import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import ThingListItem from '../components/ThingListItem';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import SharedButton from '../sharedComponents/SharedButton';
import SharedStyles from '../constants/Styles';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import DistFuncs from '../constants/DistFunctions';

const InitSimulationScreen = () => {
  const navigation = useNavigation();
  const [duration, setDuration] = useState(0);
  const things = useSelector(state => state.things);
  const [simReadyThings, setSimReadyThings] = useState(
    things.map(thing =>
      thing.type === 'sensor'
        ? {
            ...thing,
            initialValue: 0,
            distributionFuntion: {
              ...thing.distributionFuntion,
              funcName: DistFuncs.Uniform,
              min: 0,
              max: 1,
              param1: 1,
              param2: 1,
            },
          }
        : thing,
    ),
  );
  const handleRandomFunctionChange = (func: string, thingId: string) => {
    setSimReadyThings(
      simReadyThings.map(thing =>
        thing.id === thingId
          ? {
              ...thing,
              distributionFuntion: {
                ...thing.distributionFuntion,
                funcName: func,
              },
            }
          : thing,
      ),
    );
  };
  const handleInitialValueChange = (init: number, thingId: string) => {
    setSimReadyThings(
      simReadyThings.map(thing =>
        thing.id === thingId ? {...thing, initialValue: init} : thing,
      ),
    );
  };
  const handleMinMaxChange = (change: string, val: number, thingId: string) =>
    change === 'min'
      ? setSimReadyThings(
          simReadyThings.map(thing =>
            thing.id === thingId
              ? {
                  ...thing,
                  distributionFuntion: {...thing.distributionFuntion, min: val},
                }
              : thing,
          ),
        )
      : setSimReadyThings(
          simReadyThings.map(thing =>
            thing.id === thingId
              ? {
                  ...thing,
                  distributionFuntion: {...thing.distributionFuntion, max: val},
                }
              : thing,
          ),
        );
  const handleParamChange = (
    param: number,
    thingId: string,
    paramNum: number,
  ) =>
    paramNum === 1
      ? setSimReadyThings(
          simReadyThings.map(thing =>
            thing.id === thingId
              ? {
                  ...thing,
                  distributionFuntion: {
                    ...thing.distributionFuntion,
                    param1: param,
                  },
                }
              : thing,
          ),
        )
      : setSimReadyThings(
          simReadyThings.map(thing =>
            thing.id === thingId
              ? {
                  ...thing,
                  distributionFuntion: {
                    ...thing.distributionFuntion,
                    param2: param,
                  },
                }
              : thing,
          ),
        );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={things.filter(thing => thing.type === 'sensor')}
        renderItem={({item}) => (
          <ThingListItem
            thingName={item.name}
            handleInitialValueChange={init =>
              handleInitialValueChange(init, item.id)
            }
            handleRandomFunctionChange={func =>
              handleRandomFunctionChange(func, item.id)
            }
            handleMaxChange={val => handleMinMaxChange('max', val, item.id)}
            handleMinChange={val => handleMinMaxChange('min', val, item.id)}
            handleParam1Change={param => handleParamChange(param, item.id, 1)}
            handleParam2Change={param => handleParamChange(param, item.id, 2)}
          />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <View style={styles.durationContainer}>
            <Text style={SharedStyles.sharedTextStyle}>
              {Strings.simDuration}
            </Text>
            <View style={styles.inpLabeled}>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChangeText={text => setDuration(parseInt(text, 10))}
              />
              <Text style={SharedStyles.sharedTextStyle}>{Strings.minute}</Text>
            </View>
            <SharedButton
              buttonType="START"
              onPress={() => {
                console.log(things);
                navigation.navigate(Screens.startSim, {
                  duration,
                  things: simReadyThings,
                });
              }}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  durationContainer: {
    width: '90%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    width: '20%',
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingBottom: 0,
    paddingTop: 0,
    marginLeft: 10,
    fontFamily: Fonts.iransans,
  },
  inpLabeled: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
export default InitSimulationScreen;
