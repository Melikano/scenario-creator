//@flow
import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {Icon} from 'native-base';

const Splash = function Splash() {
  return (
    <View style={styles.wholeScreen}>
      <Icon type="AntDesign" name="fork" style={styles.icon} />
      <Text style={styles.title}>{'سناریو ساز'}</Text>
    </View>
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  wholeScreen: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  title: {
    color: Colors.blueButton,
    fontFamily: Fonts.iransansBold,
    fontSize: 30,
  },
  icon: {
    marginTop: height / 2 - 80,
    fontSize: 85,
    color: Colors.blueButton,
  },
});
export default Splash;
