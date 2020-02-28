import {StyleSheet} from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

const SharedStyles = StyleSheet.create({
  nextButton: {
    backgroundColor: Colors.blueButton,
  },
  prevButton: {
    backgroundColor: Colors.blueButton,
  },
  defaultButton: {
    backgroundColor: Colors.gray,
  },
  sharedButtonStyle: {
    padding: 20,
    color: Colors.white,
    borderRadius: 5,
  },
  sharedTextStyle: {
    fontFamily: Fonts.iransans,
    color: Colors.gray,
  },
  sharedButtonTextStyle: {
    fontFamily: Fonts.iransansBold,
    color: Colors.white,
  },
});

export default SharedStyles;
