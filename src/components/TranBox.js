//@flow

import React from 'react';
import {View, Text} from 'react-native';
import SharedStyles from '../constants/Styles';
import Colors from '../constants/Colors';

type props = {|
  +sensorsVlaues: Array<{name: string, value: number}>,
|};

const TranBox = ({sensorsVlaues}: props) => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        backgroundColor: Colors.green,
      }}>
      {sensorsVlaues.map(sens => (
        <Text
          style={{
            ...SharedStyles.sharedButtonTextStyle,
            textAlign: 'center',
          }}>{`${sens.name} : ${sens.value}`}</Text>
      ))}
    </View>
  );
};

export default TranBox;
