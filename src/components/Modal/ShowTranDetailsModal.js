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
      <View style={styles.modalRow}>
        <Text style={{...SharedStyles.sharedTitleStyle, fontSize: 14}}>
          {`${Strings.source} : `}
        </Text>
        <Text style={SharedStyles.sharedTextStyle}>
          {tran.preState.stateName}
        </Text>
      </View>
      <View style={styles.modalRow}>
        <Text style={{...SharedStyles.sharedTitleStyle, fontSize: 14}}>
          {`${Strings.destination} : `}
        </Text>
        <Text style={SharedStyles.sharedTextStyle}>
          {tran.nextState.stateName}
        </Text>
      </View>
      <Text style={{...SharedStyles.sharedTitleStyle, fontSize: 14}}>
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

const styles = StyleSheet.create({
  modalRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
});

export default ShowTranDetailsModal;
