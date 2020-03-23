//@flow
import React, {useState} from 'react';
import {View, Text, Button, Icon} from 'native-base';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import SharedStyles from '../constants/Styles';

type AddStateOrTransButtonProps = {
  handleButtonPressed: string => boolean,
}
const AddStateOrTransButton = ({
  handleButtonPressed,
}: AddStateOrTransButtonProps) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(true);
  };
  const handlePress = (type: string) => {
    handleButtonPressed(type);
    setExpanded(false);
  };
  return !expanded ? (
    <Button style={styles.circleButton} onPress={handleExpand}>
      <Icon name="plus" type="Entypo" style={styles.icon} />
    </Button>
  ) : (
    <TouchableOpacity
      style={styles.expandedAddButtonContainer}
      onPress={() => setExpanded(false)}>
      <TouchableOpacity
        style={styles.expandedAddButton}
        onPress={() => handlePress('state')}>
        <Text style={SharedStyles.sharedButtonTextStyle}>
          {Strings.addState}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.expandedAddButton}
        onPress={() => handlePress('tran')}>
        <Text style={SharedStyles.sharedButtonTextStyle}>
          {Strings.addTransition}
        </Text>
      </TouchableOpacity>
      <Icon name="plus" type="Entypo" style={styles.icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  circleButton: {
    justifyContent: 'center',
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: Colors.blueButton,
  },
  icon: {
    marginRight: 0,
    marginLeft: 0,
    color: Colors.white,
  },
  expandedAddButtonContainer: {
    width: '50%',
    borderRadius: 10,
    backgroundColor: Colors.blueButton,
    padding: 5,
    position: 'relative',
    bottom: 70,
  },
  expandedAddButton: {
    backgroundColor: Colors.blueButton,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    justifyContent: 'flex-end',
    padding: 5,
  },
});
export default AddStateOrTransButton;
