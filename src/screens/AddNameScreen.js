//@flow
import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import persianDate from 'persian-date';
import Strings from '../constants/Strings';
import SharedButton from '../sharedComponents/SharedButton';
import SharedHeader from '../sharedComponents/Header';
import sharedStyles from '../constants/Styles';
import {
  addScenarioName,
  addDescription,
  addDate,
} from '../Redux/actions/ScenarioActions';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import Colors from '../constants/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const AddNameScreen = ({route}: any) => {
  const {reset} = route.params;
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNextClick = () => {
    const dateCreated = new persianDate().format('YYYY/MM/DD');
    dispatch(addDate(dateCreated));
    dispatch(addScenarioName(name));
    dispatch(addDescription(desc));

    navigation.navigate(Screens.chooseThings);
  };
  useCallback(() => {
    if (reset) {
      setName('');
      setDesc('');
    }
  }, [reset]);
  return (
    <KeyboardAwareScrollView style={styles.whole}>
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
            multiline
          />
        </View>
        <SharedButton buttonType="NEXT" onPress={handleNextClick} />
      </View>
    </KeyboardAwareScrollView>
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
