//@flow
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import SharedButton from '../sharedComponents/SharedButton';
import Strings from '../constants/Strings';
import {storeData} from '../utils/localStorageUtils';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import SharedHeader from '../sharedComponents/Header';
import Colors from '../constants/Colors';
import BottomLinedInput from '../sharedComponents/BottomLinedInput';
import {Icon} from 'native-base';

const SignUp = function SignUp() {
  const [user, setUser] = useState({});
  const [showPass, setShowPass] = useState(true);
  const navigation = useNavigation();

  const saveUser = async () => {
    await storeData('user', JSON.stringify(user));
  };
  return (
    <>
      <SharedHeader
        title={Strings.signup}
        showBack
        onBackPress={() => navigation.navigate(Screens.login)}
      />
      <View style={styles.inputsContainer}>
        <BottomLinedInput
          placeholder={Strings.name}
          onChangeText={name => setUser({...user, name})}
          value={user.name || ''}
        />
        <BottomLinedInput
          placeholder={Strings.familyName}
          onChangeText={familyName => setUser({...user, familyName})}
          value={user.familyName || ''}
        />
        <BottomLinedInput
          placeholder={Strings.email}
          onChangeText={email => setUser({...user, email})}
          value={user.email || ''}
        />
        <BottomLinedInput
          placeholder={Strings.password}
          onChangeText={password => setUser({...user, password})}
          secureTextEntry={showPass}
          value={user.password || ''}
        />
        <TouchableOpacity
          onPress={() => setShowPass(!showPass)}
          style={styles.showPass}>
          <Icon
            type={'Feather'}
            name={showPass ? 'eye' : 'eye-off'}
            style={styles.showPassIcon}
          />
        </TouchableOpacity>
        <SharedButton
          title={Strings.confirm}
          style={styles.btnStyle}
          onPress={() => {
            saveUser();
            navigation.navigate(Screens.mainTab);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    alignSelf: 'center',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btnStyle: {
    backgroundColor: Colors.blueButton,
    alignSelf: 'center',
    width: '90%',
    marginTop: 30,
  },
  showPass: {position: 'absolute', top: '70%'},
  showPassIcon: {
    fontSize: 20,
    color: Colors.mediumGray,
  },
});

export default SignUp;
