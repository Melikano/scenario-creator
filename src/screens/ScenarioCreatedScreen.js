//@flow
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import persianDate from 'persian-date';
import Strings from '../constants/Strings';
import SharedStyles from '../constants/Styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {storeData} from '../utils/localStorageUtils';
import {addDate} from '../Redux/actions/ScenarioActions';
import SimulationButton from '../sharedComponents/SimulationButton';
import SharedButton from '../sharedComponents/SharedButton';
import Colors from '../constants/Colors';
import Screens from '../constants/Screens';

const ScenarioCreatedScreen = () => {
  const navigation = useNavigation();
  const scenario = useSelector(x => x);
  const dispatch = useDispatch();
  useEffect(() => {
    const dateCreated = new persianDate().format('YYYY/MM/DD');
    dispatch(addDate(dateCreated));
    storeData(
      `scenario-${scenario.name}-${dateCreated}`,
      JSON.stringify(scenario),
    );
    console.log(dateCreated);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Check_green.png')}
        style={{...styles.imageStyle, ...styles.margin}}
      />
      <Text style={SharedStyles.sharedTextStyle}>
        {Strings.scenarioCreatedSuccessfully}
      </Text>

      <View style={styles.buttonsContainer}>
        <Text style={{...SharedStyles.sharedTextStyle, ...styles.margin}}>
          {Strings.nextStep}
        </Text>
        <SimulationButton navigation={navigation} scenario={scenario} />
        <SharedButton
          title={Strings.newScenrio}
          style={styles.newScenrioBtn}
          onPress={() => navigation.navigate(Screens.addName)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageStyle: {
    marginTop: 30,
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  buttonsContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },
  margin: {
    marginBottom: 30,
  },
  newScenrioBtn: {
    marginTop: 10,
    backgroundColor: Colors.blueButton,
  },
});
export default ScenarioCreatedScreen;
