//@flow
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Strings from '../constants/Strings';
import SharedStyles from '../constants/Styles';
import SharedButton from '../sharedComponents/SharedButton';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';

const ScenarioCreatedScreen = () => {
  const navigation = useNavigation();
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
        <SharedButton
          buttonType="SIM"
          onPress={() => {
            navigation.navigate(Screens.initSim);
          }}
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
});
export default ScenarioCreatedScreen;
