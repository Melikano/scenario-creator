//@flow
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Button} from 'native-base';
import {Svg} from 'react-native-svg';
import State from '../components/State';
import Transition from '../components/Transition';
import AddStateOrTransButton from '../components/AddStateOrTransButton';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Strings from '../constants/Strings';
import SharedStyles from '../constants/Styles';
import Colors from '../constants/Colors';
import AddStateModal from '../components/Modal/AddStateModal';
import {computeNexStateCoordinates} from '../utils/Utils';
import type {stateType, transType, thingType} from '../constants/Types';
import {addState, addTransition} from '../Redux/actions/ScenarioActions';
import AddTransitionModal from '../components/Modal/AddTransitionModal';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import SharedHeader from '../sharedComponents/Header';
import ShowStateDetailsModal from '../components/Modal/ShowStateDetailsModal';
import ShowTranDetailsModal from '../components/Modal/ShowTranDetailsModal';

const {height} = Dimensions.get('window');

const DrawStateMachineScreen = () => {
  const initialNextState: stateType = {
    stateNumber: 1,
    x: 40,
    y: 100,
    stateName: '',
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const emptyModal = {
    type: '',
    modalVisibility: false,
    state: null,
    tran: null,
  };
  const [states, setStates] = useState([]);
  const [trans, setTrans] = useState([]);
  const [currentModal, setCurrentModal] = useState(emptyModal);
  const [nextState, setNextState] = useState(initialNextState);

  const resetModal = () => {
    setCurrentModal(emptyModal);
  };
  const handleShowModal = (
    modalVisibility: boolean,
    completed: boolean,
    modalType: string,
    state?: stateType,
    tran?: transType,
  ) => {
    setCurrentModal({type: modalType, modalVisibility, state, tran});
    return completed;
  };

  const handleAddState = (
    addConfirmed: boolean,
    actuatorsValues: ?Array<{...thingType, value: string}>,
    stateName: string,
  ) => {
    if (addConfirmed) {
      const nxtState = {...nextState, actuatorsValues, stateName};
      dispatch(addState(nxtState));
      setStates([...states, nxtState]);
      const {x, y} = computeNexStateCoordinates(nextState.x, nextState.y);
      setNextState({
        stateNumber: nextState.stateNumber + 1,
        x,
        y,
        stateName,
      });
    }
  };

  const handleAddTrans = (
    addConfirmed: boolean,
    source: ?number,
    destination: ?number,
    sensorsConditions: ?Array<{
      ...thingType,
      upperBound: string,
      lowerBound: string,
    }>,
  ) => {
    if (addConfirmed) {
      const nxtTran = {
        preState:
          states.find((state: stateType) => state.stateNumber === source) ||
          initialNextState,
        nextState:
          states.find(
            (state: stateType) => state.stateNumber === destination,
          ) || initialNextState,
        sensorsConditions,
        hasReverse:
          trans.filter(
            t =>
              t.nextState.stateNumber === source &&
              t.preState.stateNumber === destination,
          ).length > 0,
      };
      dispatch(addTransition(nxtTran));
      setTrans([...trans, nxtTran]);
    }
  };

  const handleToggleVisibilityStateModal = (
    modalVisibility: boolean,
    stateCompleted: boolean,
    actuatorsValues: ?Array<{...thingType, value: string}>,
    stateName: ?string,
  ) => {
    handleAddState(
      handleShowModal(modalVisibility, stateCompleted, 'addState'),
      actuatorsValues,
      stateName || '',
    );
  };

  const handleToggleVisibilityTransModal = (
    modalVisibility: boolean,
    completed: boolean,
    source: ?number,
    destination: ?number,
    sensorsConditions: ?Array<{
      ...thingType,
      upperBound: string,
      lowerBound: string,
    }>,
  ) => {
    handleAddTrans(
      handleShowModal(modalVisibility, completed, 'addTrans'),
      source,
      destination,
      sensorsConditions,
    );
  };

  const renderModal = (modal: Object) => {
    console.log(modal);
    switch (modal.type) {
      case 'addState':
        return (
          modal.modalVisibility && (
            <AddStateModal
              stateNumber={nextState.stateNumber}
              handleToggleVisibility={handleToggleVisibilityStateModal}
            />
          )
        );
      case 'addTran':
        return (
          modal.modalVisibility && (
            <AddTransitionModal
              handleModalVisibility={handleToggleVisibilityTransModal}
            />
          )
        );
      case 'showState':
        return (
          modal.modalVisibility && (
            <ShowStateDetailsModal
              state={modal.state}
              onCloseModal={resetModal}
            />
          )
        );
      case 'showTran':
        return (
          <ShowTranDetailsModal tran={modal.tran} onCloseModal={resetModal} />
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <SharedHeader
        title={Strings.newScenrio}
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <Svg style={{marginTop: 30}}>
        {trans.map((tran: transType) => (
          <Transition
            x1={tran.preState.x}
            y1={tran.preState.y}
            x2={tran.nextState.x}
            y2={tran.nextState.y}
            hasReverse={tran.hasReverse}
            onTranPress={() =>
              handleShowModal(true, false, 'showTran', undefined, tran)
            }
          />
        ))}
        {states.map((item: stateType) => (
          <State
            state={item}
            onStatePress={() => handleShowModal(true, false, 'showState', item)}
          />
        ))}
      </Svg>
      {renderModal(currentModal)}
      <View style={styles.buttonsContainer}>
        <AddStateOrTransButton
          handleButtonPressed={(type: string) =>
            handleShowModal(true, false, type)
          }
        />
        <Button
          style={styles.confirmButton}
          onPress={() => navigation.navigate(Screens.scenarioCreated)}>
          <Text style={SharedStyles.sharedButtonTextStyle}>
            {Strings.confirm}
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
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
