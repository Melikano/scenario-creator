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
          color: SharedStyles.nextButton,
          hasIcon: true,
          icon: 'arrowright',
        };
      case 'PREV':
        return {
          title: Strings.nextButtonText,
          color: SharedStyles.prevButton,
          hasIcon: true,
          icon: 'arrowleft',
        };
      default:
        return {
          title: '',
          color: SharedStyles.defaultButton,
          hasIcon: false,
          icon: '',
        };
    }
  };

  const button = useRef(getButton());

  return (
    <Button
      style={{...SharedStyles.sharedButtonStyle, ...button.current.color}}
      onPress={onPress}>
      <Text style={SharedStyles.sharedButtonTextStyle}>
        {button.current.title}
      </Text>
      {button.current.hasIcon && (
        <Icon type="AntDesign" name={button.current.icon} />
      )}
    </Button>
  );
};
export default SharedButton;
