//@flow
import React from 'react';
import {View, Text, Thumbnail} from 'native-base';
import SharedStyles from '../constants/Styles';
import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
type userType = {
  email: string,
  name: string,
};
type prop = {
  user: userType,
};
const ProfileAvatar = ({user}: prop) => (
  <View style={styles.prof}>
    <Thumbnail large source={require('../assets/images/user.png')} />
    <View style={styles.details}>
      <Text style={{...SharedStyles.sharedTitleStyle, ...styles.alighRight}}>
        {user.name}
      </Text>
      <Text style={{...SharedStyles.sharedTextStyle, ...styles.alighRight}}>
        {user.email}
      </Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  prof: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 25,
    paddingTop: 25,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
  details: {
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  alighRight: {
    textAlign: 'right',
  },
});
export default ProfileAvatar;
