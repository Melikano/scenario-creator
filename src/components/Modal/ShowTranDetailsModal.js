//@flow
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import type {transType} from '../../constants/Types';
import SharedModal from '../../sharedComponents/SharedModal';
import Strings from '../../constants/Strings';
import SharedStyles from '../../constants/Styles';

type Props = {|
  +onCloseModal: Function,
  tran: transType,
|};

const ShowTranDetailsModal = ({onCloseModal, tran}: Props) => {
  return (
    <SharedModal isConfirmationModal={false} onCancel={onCloseModal}>
      <Text style={SharedStyles.sharedTextStyle}>{`${Strings.source} : ${
        tran.preState.stateNumber
      }`}</Text>
      <Text style={SharedStyles.sharedTextStyle}>{`${Strings.destination} : ${
        tran.nextState.stateNumber
      }`}</Text>
      <Text style={SharedStyles.sharedTextStyle}>
        {Strings.sensorsConditions}
      </Text>
      <View>
        {tran.sensorsConditions?.map(sens => (
          <Text style={SharedStyles.sharedTextStyle}>{` ${sens.lowerBound} < ${
            sens.name
          } < ${sens.upperBound}`}</Text>
        ))}
      </View>
    </SharedModal>
  );
};

const styles = StyleSheet.create({});

export default ShowTranDetailsModal;
