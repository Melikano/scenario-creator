//@flow
import React from 'react';
import {
  Modal,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Strings from '../../constants/Strings';
import {useSelector} from 'react-redux';
import SharedStyles from '../../constants/Styles';
import Colors from '../../constants/Colors';
import {Button} from 'native-base';
import Fonts from '../../constants/Fonts';

type AddStateModalProps = {
  stateNumber: number,
  setActuatorValue: (actuatorId: string, value: string) => void,
  handleToggleVisibility: (
    modalVisibility: boolean,
    stateCompleted: boolean,
  ) => void,
  modalVisible: boolean,
};
const AddStateModal = ({
  stateNumber,
  setActuatorValue,
  modalVisible,
  handleToggleVisibility,
}: AddStateModalProps) => {
  const things = useSelector(state => state.things);
  return (
    <Modal visible transparent>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={SharedStyles.sharedTextStyle}>
              {Strings.submitActuatorsValueInState(stateNumber)}
            </Text>
            <View style={styles.thingsContainer}>
              {things
                .filter(thing => thing.type === 'actuator')
                .map(thing => (
                  <View style={styles.thingRow}>
                    <TextInput
                      style={styles.thingsValueTextInput}
                      keyboardType="numeric"
                    />
                    <Text style={SharedStyles.sharedTextStyle}>
                      {thing.name}
                    </Text>
                  </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => handleToggleVisibility(false, false)}
                style={{
                  ...SharedStyles.sharedButtonStyle,
                  ...styles.modalButton,
                }}>
                <Text style={SharedStyles.sharedButtonTextStyle}>
                  {Strings.cancel}
                </Text>
              </Button>
              <Button
                onPress={() => handleToggleVisibility(false, true)}
                style={{
                  ...SharedStyles.sharedButtonStyle,
                  ...styles.modalButton,
                }}>
                <Text style={SharedStyles.sharedButtonTextStyle}>
                  {Strings.confirm}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#999999aa',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    position: 'absolute',
    top: '30%',
    alignItems: 'center',
    borderRadius: 15,
  },
  thingsContainer: {
    flexDirection: 'column',
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  thingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  thingsValueTextInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    height: 25,
    fontSize: 12,
    fontFamily: Fonts.iransans,
    textAlign: 'center',
    width: 40,
    paddingTop: 0,
    paddingBottom: 0,
  },
  modalButton: {
    backgroundColor: Colors.blueButton,
    marginTop: 20,
    width: 80,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default AddStateModal;
