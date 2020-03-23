//@flow
import * as React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Button} from 'native-base';
import SharedStyles from '../constants/Styles';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
type SharedModalProps = {
  onConfirm: Function,
  onCancel: Function,
  children: Array<React.Element<any>>,
};
const SharedModal = ({onConfirm, onCancel, children}: SharedModalProps) => {
  return (
    <Modal visible transparent>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContainer}>
          {children}
          <View style={styles.buttonContainer}>
            <Button
              onPress={onCancel}
              style={{
                ...SharedStyles.sharedButtonStyle,
                ...styles.modalButton,
              }}>
              <Text style={SharedStyles.sharedButtonTextStyle}>
                {Strings.cancel}
              </Text>
            </Button>
            <Button
              onPress={onConfirm}
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
export default SharedModal;
