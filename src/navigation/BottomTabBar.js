//@flow

import React from 'react';
import TabBar from './TabBar';

type Props = {};
const BottomTabBar = (props: Props) => {
  return (
    <TabBar
      activeColors={['#e6b580', '#8e87d6', '#c095c9']}
      activeTabBackgrounds={['#ede7e6', '#eae3f6', '#eae4f6']}
      {...props}
    />
  );
};

export default BottomTabBar;
