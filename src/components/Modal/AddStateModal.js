//@flow
import React from 'react';
import {
  Modal,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';
import Strings from '../../constants/Strings';
import {useSelector} from 'react-redux';
import SharedStyles from '../../constants/Styles';
import Colors from '../../constants/Colors';
import { Button } from 'native-base';

const {height} = Dimensions.get('window');
type AddStateModalProps = {
  stateNumber: number,
  setActuatorValue: (actuatorId: string, value: string) => void,
  modalVisible: boolean,
};
const AddStateModal = ({
  stateNumber,
  setActuatorValue,
  modalVisible,
}: AddStateModalProps) => {
  const things = useSelector(state => state.things);
  return (
    <Modal visible transparent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <View style={styles.modalBackground}>
          <View
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              position: 'absolute',
              top: '30%',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Text style={SharedStyles.sharedTextStyle}>
              {Strings.submitActuatorsValueInState(stateNumber)}
            </Text>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 20,
                width: '50%',
                alignSelf: 'center',
              }}>
              {things
                .filter(thing => thing.type === 'actuator')
                .map(thing => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: 'lightgray',
                        borderRadius: 5,
                        height: 12,
                        width: 40,
                      }}
                    />
                    <Text style={SharedStyles.sharedTextStyle}>
                      {thing.name}
                    </Text>
                  </View>
                ))}
            </View>
            <Button
              style={{
                ...SharedStyles.sharedButtonStyle,
                backgroundColor: Colors.blueButton,
                marginTop: 20,
                width: 100,
              }}>
              <Text style={SharedStyles.sharedButtonTextStyle}>
                {Strings.confirm}
              </Text>
            </Button>
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
});
export default AddStateModal;
