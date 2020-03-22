//@flow
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import type {stateType, thingType} from '../constants/Types';
import {addState} from '../Redux/actions/ScenarioActions';
const {height} = Dimensions.get('window');

const DrawStateMachineScreen = () => {
  const initialNextState: stateType = {
    stateNumber: 1,
    x: 30,
    y: 30,
  };
  const dispatch = useDispatch();
  const [states, setStates] = useState([]);
  const [currentModal, setCurrentModal] = useState({addState: false});
  const [nextState, setNextState] = useState(initialNextState);
  const handleShowModal = (
    modalVisibility: boolean,
    stateCompleted: boolean,
  ) => {
    setCurrentModal({addState: modalVisibility});
    return stateCompleted;
  };

  const handleAddState = (
    addConfirmed: boolean,
    actuatorsValues: ?Array<{...thingType, value: string}>,
  ) => {
    if (addConfirmed) {
      dispatch(addState({...nextState, actuatorsValues}));
      setStates([...states, {...nextState, actuatorsValues}]);
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
        stateNumber={nextState.stateNumber}
        handleToggleVisibility={(
          modalVisibility: boolean,
          stateCompleted: boolean,
          actuatorsValues: ?Array<{...thingType, value: string}>,
        ) => {
          handleAddState(
            handleShowModal(modalVisibility, stateCompleted),
            actuatorsValues,
          );
        }}
      />
    ) : null;
  return (
    <View>
      <Svg>
        {states.map((item: stateType) => (
          <State stateNumber={item.stateNumber} x={item.x} y={item.y} />
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
