//@flow

import React from 'react';
import TabBar from './TabBar';
import Colors from '../constants/Colors';

type Props = {};
const BottomTabBar = (props: Props) => {
  return (
    <TabBar
      activeColors={['#e6b580', '#8e87d6', '#c095c9']}
      activeTabBackgrounds={[
        Colors.lightGray,
        Colors.lightGray,
        Colors.lightGray,
      ]}
      {
        //$FlowFixMe
        ...props
      }
    />
  );
};

export default BottomTabBar;
