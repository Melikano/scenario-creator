//@flow
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import SharedButton from '../sharedComponents/SharedButton';
import Strings from '../constants/Strings';
import BottomLinedInput from '../sharedComponents/BottomLinedInput';
import Colors from '../constants/Colors';
import SharedHeader from '../sharedComponents/Header';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import SharedStyles from '../constants/Styles';
import {Icon} from 'native-base';
import Fonts from '../constants/Fonts';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

//$FlowFixMe
const Login = function Login({user}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [showError, setShowError] = useState(false);
  const navigation = useNavigation();

  const validate = () => user !== null && user !== undefined;
  return (
    <KeyboardAvoidingView behavior="position">
      <SharedHeader title={Strings.login} />
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.inputsContainer}>
        <BottomLinedInput
          placeholder={Strings.email}
          onChangeText={setEmail}
          value={email}
        />
        <BottomLinedInput
          placeholder={Strings.password}
          onChangeText={setPassword}
          secureTextEntry={showPass}
          value={password}
          textAlign="right"
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
          style={styles.btnStyle}
          title={Strings.login}
          onPress={() =>
            validate()
              ? navigation.navigate(Screens.mainTab)
              : setShowError(true)
          }
        />
        {showError && (
          <Text style={styles.errorText}>{Strings.invalideInfoError}</Text>
        )}
        <View style={styles.rowFlex}>
          <Text style={SharedStyles.sharedTextStyle}>{Strings.noAccound}</Text>
          <TouchableOpacity onPress={() => navigation.navigate(Screens.signUp)}>
            <Text style={[SharedStyles.sharedTextStyle, styles.linkStyle]}>
              {Strings.signup}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  linkStyle: {
    color: Colors.blueButton,
    marginRight: 10,
  },
  rowFlex: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
  },
  showPass: {position: 'absolute', top: '40%'},
  showPassIcon: {
    fontSize: 20,
    color: Colors.mediumGray,
  },
  errorText: {
    color: Colors.red,
    fontFamily: Fonts.iransansBold,
    textAlign: 'center',
    marginTop: 10,
  },
});
export default Login;
