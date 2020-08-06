//@flow
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Header, Right, Icon} from 'native-base';
import Colors from '../constants/Colors';
import SharedStyles from '../constants/Styles';
import {StyleSheet} from 'react-native';
type prop = {
  title: string,
  showBack?: boolean,
  onBackPress?: () => void,
};
const SharedHeader = ({title, showBack = false, onBackPress}: prop) => (
  <Header
    style={{backgroundColor: Colors.blueButton}}
    androidStatusBarColor={Colors.blueButton}>
    <Right>
      <Text style={SharedStyles.sharedButtonTextStyle}>{title}</Text>
      {showBack && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon style={styles.icon} name="right" type="AntDesign" />
        </TouchableOpacity>
      )}
    </Right>
  </Header>
);
const styles = StyleSheet.create({
  icon: {
    color: Colors.white,
    marginLeft: 10,
  },
});
export default SharedHeader;
