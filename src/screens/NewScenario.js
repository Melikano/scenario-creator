//@flow
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import Strings from '../constants/Strings';
import SharedButton from '../sharedComponents/SharedButton';
import sharedStyles from '../constants/Styles';
import type {nextButton} from '../constants/Types';
type Props = {};
const NewScenario = (props: Props) => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/iot_pic.5a10bde.png')}
        style={styles.imageStyle}
      />
      <Text style={{...sharedStyles.sharedTextStyle, ...styles.text}}>
        {Strings.welcome}
      </Text>
      <Text style={{...sharedStyles.sharedTextStyle, ...styles.text}}>
        {Strings.chooseName}
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setName(text)}
        value={name}
        placeholder={Strings.scenarioName}
      />
      <SharedButton buttonType="NEXT" onPress={() => {}} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
  },
  imageStyle: {
    marginTop: 30,
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    borderRadius: 5,
    fontFamily: 'IRANSansMobileFaNum',
    margin: 30,
    padding: 12,
  },
});
export default NewScenario;
