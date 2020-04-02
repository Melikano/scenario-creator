//@flow
import React, {useRef} from 'react';
import {Button, Text, Icon} from 'native-base';
import SharedStyles from '../constants/Styles';
import Strings from '../constants/Strings';
import type {ButtonType} from '../constants/Types';
type Props = {
  onPress: () => void,
  buttonType: ButtonType,
};
const SharedButton = ({buttonType, onPress}: Props) => {
  const getButton = () => {
    switch (buttonType) {
      case 'NEXT':
        return {
          title: Strings.nextButtonText,
          style: SharedStyles.nextButton,
          hasIcon: true,
          icon: 'arrowright',
        };
      case 'PREV':
        return {
          title: Strings.previousButtonText,
          style: SharedStyles.prevButton,
          hasIcon: true,
          icon: 'arrowleft',
        };
      case 'SIM':
        return {
          title: Strings.simulation,
          style: SharedStyles.simButton,
          hasIcon: false,
        };
      case 'START':
        return {
          title: Strings.start,
          style: SharedStyles.simButton,
          hasIcon: false,
        };
      default:
        return {
          title: '',
          style: SharedStyles.defaultButton,
          hasIcon: false,
          icon: '',
        };
    }
  };

  const button = useRef(getButton());

  return (
    <Button
      style={{...SharedStyles.sharedButtonStyle, ...button.current.style}}
      onPress={onPress}>
      <Text style={SharedStyles.sharedButtonTextStyle}>
        {button.current.title}
      </Text>
      {button.current.hasIcon && (
        <Icon
          style={SharedStyles.sharedIconStyle}
          type="AntDesign"
          name={button.current.icon}
        />
      )}
    </Button>
  );
};
export default SharedButton;
