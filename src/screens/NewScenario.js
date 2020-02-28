//@flow
//@flow
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import Strings from '../constants/Strings';

type Props = {};
const NewScenario = (props: Props) => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Image source="../assets/images/iot_pic.5a10bde.png" />
      <Text style={styles.chooseNameText}>{Strings.chooseName}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setName(text)}
        value={name}
        placeholder={Strings.scenarioName}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  chooseNameText: {
    marginTop: 30,
    fontFamily: 'IRANSansMobileFaNum',
  },
  textInput: {
    backgroundColor: '#ccc',
    width: '80%',
    borderRadius: 5,
    fontFamily: 'IRANSansMobileFaNum',
    marginTop: 20,
    padding: 12,
  },
});
export default NewScenario;
