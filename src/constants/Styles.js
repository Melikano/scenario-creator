import {StyleSheet} from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

const SharedStyles = StyleSheet.create({
  nextButton: {
    backgroundColor: Colors.blueButton,
    flexDirection: 'row',
  },
  prevButton: {
    backgroundColor: Colors.blueButton,
    flexDirection: 'row-reverse',
  },
  simButton: {
    backgroundColor: Colors.sim,
  },
  defaultButton: {
    backgroundColor: Colors.gray,
  },
  sharedButtonStyle: {
    width: 120,
    padding: 5,
    color: Colors.white,
    borderRadius: 30,
    height: null,
    justifyContent: 'space-around',
  },
  sharedTextStyle: {
    fontFamily: Fonts.iransans,
    color: Colors.gray,
    textAlign: 'center',
  },
  sharedTitleStyle: {
    fontFamily: Fonts.iransansBold,
    fontSize: 20,
    color: Colors.gray,
    textAlign: 'center',
  },
  sharedButtonTextStyle: {
    fontFamily: Fonts.iransansBold,
    color: Colors.white,
    paddingRight: 0,
    paddingLeft: 0,
  },
  sharedIconStyle: {
    marginRight: 0,
    marginLeft: 0,
  },
});

export default SharedStyles;
