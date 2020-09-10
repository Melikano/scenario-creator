//@flow

import React from 'react';
import {View, Text} from 'react-native';
import type {stateType} from '../constants/Types';
import Strings from '../constants/Strings';
import SharedStyles from '../constants/Styles';
import Colors from '../constants/Colors';

type props = {|
  +state: stateType,
|};
const StateBox = ({state}: props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.blueButton,
        width: '40%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
        padding: 10,
      }}>
      <Text
        style={{
          ...SharedStyles.sharedButtonTextStyle,
          textAlign: 'center',
        }}>{`${Strings.stateNumber} : ${state.stateNumber}`}</Text>
      <View>
        {state.actuatorsValues?.map(act => (
          <View>
            <Text
              style={{
                ...SharedStyles.sharedButtonTextStyle,
                textAlign: 'center',
              }}>{`${act.name} : ${act.value}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StateBox;
