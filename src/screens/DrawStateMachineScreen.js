//@flow
import React, {useState} from 'react';
import {View, Text, Button} from 'native-base';
import State from '../components/State';
import AddStateOrTransButton from '../components/AddStateOrTransButton';
import {StyleSheet, Dimensions} from 'react-native';
import Strings from '../constants/Strings';
import SharedStyles from '../constants/Styles';
import Colors from '../constants/Colors';
type state = {
  stateNumber: number,
  isInitial: boolean,
};
const DrawStateMachineScreen = () => {
  const initialState: state = {stateNumber: 0, isInitial: true};
  const [states, setStates] = useState([initialState]);
  const handleAddState = () => {
    const lasState: number = states.length - 1;
    const nextState: state = {
      stateNumber: lasState + 1,
      isInitial: false,
    };
    setStates([...states, nextState]);
  };
  console.log(states);
  return (
    <View>
      <View>
        {states.map(item => (
          <State
            isInitialState={item.isInitial}
            stateNumber={item.stateNumber}
          />
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <AddStateOrTransButton handleAddState={handleAddState} />
        <Button style={styles.confirmButton}>
          <Text style={SharedStyles.sharedButtonTextStyle}>
            {Strings.confirm}
          </Text>
        </Button>
      </View>
    </View>
  );
};

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    top: height - 210,
    left: 10,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: Colors.blueButton,
    padding: 10,
    borderRadius: 5,
  },
});
export default DrawStateMachineScreen;
