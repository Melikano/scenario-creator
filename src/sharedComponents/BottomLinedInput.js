//@flow
import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

type Props = {
  +onChangeText: Function,
  placeholder?: string,
};
const BottomLinedInput = (props: Props) => {
  const {onChangeText, placeholder = ''} = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[styles.textInput, isFocused && styles.focusedInput]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      //$FlowFixMe
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 20,
    paddingBottom: 2,
    borderColor: Colors.lightGray,
    borderBottomWidth: 1,
    width: '100%',
    fontFamily: Fonts.iransans,
  },
  focusedInput: {
    borderBottomWidth: 2,
    borderColor: Colors.blueButton,
    fontSize: 20,
  },
});

export default BottomLinedInput;
