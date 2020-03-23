//@flow
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Strings from '../constants/Strings';
import SharedButton from '../sharedComponents/SharedButton';
import sharedStyles from '../constants/Styles';
import {addScenarioName} from '../Redux/actions/ScenarioActions';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import Colors from '../constants/Colors';

type Props = {
  addScenarioNameToStore: (name: string) => void,
};
const AddNameScreen = ({addScenarioNameToStore}: Props) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNextClick = () => {
    dispatch(addScenarioName(name));
    navigation.navigate(Screens.chooseThings);
  };
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
      <SharedButton buttonType="NEXT" onPress={handleNextClick} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
export default AddNameScreen;
