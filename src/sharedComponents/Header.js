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
  hasTabs?: boolean,
};
const SharedHeader = ({
  title,
  showBack = false,
  onBackPress,
  hasTabs = false,
}: prop) => (
  <Header
    style={hasTabs ? styles.headerNotCurved : styles.header}
    androidStatusBarColor={Colors.blueButton}
    hasTabs={hasTabs}>
    <Right>
      <Text style={[SharedStyles.sharedButtonTextStyle, styles.headerText]}>
        {title}
      </Text>
      {showBack && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon style={styles.icon} name="right" type="AntDesign" />
        </TouchableOpacity>
      )}
    </Right>
  </Header>
);
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.blueButton,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 100,
  },
  headerNotCurved: {
    backgroundColor: Colors.blueButton,
    height: 100,
  },
  icon: {
    color: Colors.white,
    marginBottom: 2,
  },
  headerText: {
    fontSize: 20,
    marginRight: 10,
  },
});
export default SharedHeader;
