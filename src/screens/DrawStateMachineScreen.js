//@flow
import React, {useState} from 'react';
import {View, Text, Button} from 'native-base';
import {Svg} from 'react-native-svg';
import State from '../components/State';
import Transition from '../components/Transition';
import AddStateOrTransButton from '../components/AddStateOrTransButton';
import {StyleSheet, Dimensions} from 'react-native';
import Strings from '../constants/Strings';
import SharedStyles from '../constants/Styles';
import Colors from '../constants/Colors';
import AddStateModal from '../components/Modal/AddStateModal';
import {computeNexStateCoordinates} from '../utils/Utils';
const {height} = Dimensions.get('window');
type state = {
  stateNumber: number,
  isInitial: boolean,
  x: number,
  y: number,
};
const DrawStateMachineScreen = () => {
  const initialState: state = {stateNumber: 3, isInitial: true, x: 30, y: 30};
  const initialNextState: state = {
    stateNumber: 1,
    isInitial: false,
    ...computeNexStateCoordinates(35, 35),
  };
  const [states, setStates] = useState([initialState]);
  const [currentModal, setCurrentModal] = useState({addState: false});
  const [nextState, setNextState] = useState(initialNextState);
  const handleShowModal = (
    modalVisibility: boolean,
    stateCompleted: boolean,
  ) => {
    setCurrentModal({addState: modalVisibility});
    return stateCompleted;
  };

  const handleAddState = (addConfirmed: boolean) => {
    if (addConfirmed) {
      setStates([...states, nextState]);
      const {x, y} = computeNexStateCoordinates(nextState.x, nextState.y);
      setNextState({
        stateNumber: nextState.stateNumber + 1,
        isInitial: false,
        x,
        y,
      });
    }
  };
  const renderModal = (modal: Object) =>
    modal.addState ? (
      <AddStateModal
        modalVisible={modal.addState}
        setActuatorValue={(id, text) => {}}
        stateNumber={5}
        handleToggleVisibility={(
          modalVisibility: boolean,
          stateCompleted: boolean,
        ) => {
          handleAddState(handleShowModal(modalVisibility, stateCompleted));
        }}
      />
    ) : null;
  return (
    <View>
      <Svg>
        <Transition x1={30} y1={30} x2={120} y2={120} />
        {states.map((item: state) => (
          <State
            isInitialState={item.isInitial}
            stateNumber={item.stateNumber}
            x={item.x}
            y={item.y}
          />
        ))}
      </Svg>
      {renderModal(currentModal)}
      <View style={styles.buttonsContainer}>
        <AddStateOrTransButton
          handleAddState={() => handleShowModal(true, false)}
        />
        <Button style={styles.confirmButton}>
          <Text style={SharedStyles.sharedButtonTextStyle}>
            {Strings.confirm}
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    top: height - 150,
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
