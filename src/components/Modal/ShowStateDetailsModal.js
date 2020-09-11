//@flow
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import type {stateType} from '../../constants/Types';
import SharedModal from '../../sharedComponents/SharedModal';
import Strings from '../../constants/Strings';
import SharedStyles from '../../constants/Styles';

type Props = {|
  +onCloseModal: Function,
  state: stateType,
|};

const ShowStateDetailsModal = ({onCloseModal, state}: Props) => {
  return (
    <SharedModal isConfirmationModal={false} onCancel={onCloseModal}>
      <View style={styles.modalRow}>
        <Text style={{...SharedStyles.sharedTitleStyle, fontSize: 14}}>
          {`${Strings.stateName} : `}
        </Text>
        <Text style={SharedStyles.sharedTextStyle}>{state.stateName}</Text>
      </View>
      <View />
      <View style={styles.modalRow}>
        <Text style={{...SharedStyles.sharedTitleStyle, fontSize: 14}}>
          {`${Strings.stateNumber} : `}
        </Text>
        <Text style={SharedStyles.sharedTextStyle}>{state.stateNumber}</Text>
      </View>
      <View>
        {state.actuatorsValues?.map(act => (
          <View style={styles.modalRow}>
            <Text style={{...SharedStyles.sharedTitleStyle, fontSize: 14}}>
              {`${Strings.value} ${act.name} : `}
            </Text>
            <Text style={SharedStyles.sharedTextStyle}>{act.value}</Text>
          </View>
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

export default ShowStateDetailsModal;
