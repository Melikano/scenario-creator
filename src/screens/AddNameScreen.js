//@flow
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Strings from '../constants/Strings';
import SharedButton from '../sharedComponents/SharedButton';
import SharedHeader from '../sharedComponents/Header';
import sharedStyles from '../constants/Styles';
import {
  addScenarioName,
  addDescription,
} from '../Redux/actions/ScenarioActions';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import Colors from '../constants/Colors';

type Props = {
  addScenarioNameToStore: (name: string) => void,
};
const AddNameScreen = ({addScenarioNameToStore}: Props) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNextClick = () => {
    dispatch(addScenarioName(name));
    dispatch(addDescription(desc));
    navigation.navigate(Screens.chooseThings);
  };
  return (
    <View style={styles.whole}>
      <SharedHeader title={Strings.newScenrio} />
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={{...sharedStyles.sharedTextStyle, ...styles.text}}>
            {Strings.chooseName}
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setName(text)}
            value={name}
            placeholder={Strings.scenarioName}
          />
        </View>
        <View style={styles.section}>
          <Text style={{...sharedStyles.sharedTextStyle, ...styles.text}}>
            {Strings.addDescription}
          </Text>

          <TextInput
            style={{...styles.textInput, ...styles.descInput}}
            onChangeText={text => setDesc(text)}
            value={desc}
            placeholder={Strings.description}
          />
        </View>
        <SharedButton buttonType="NEXT" onPress={handleNextClick} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  whole: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  section: {
    width: '90%',
    alignItems: 'center',
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
    marginBottom: 30,
    marginTop: 10,
    padding: 12,
  },
  descInput: {
    height: 100,
  },
});
export default AddNameScreen;
