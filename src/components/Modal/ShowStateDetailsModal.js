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
      <Text style={SharedStyles.sharedTextStyle}>{`${Strings.stateNumber} : ${
        state.stateNumber
      }`}</Text>
      <Text style={SharedStyles.sharedTextStyle}>{Strings.actuatorValues}</Text>
      <View>
        {state.actuatorsValues?.map(act => (
          <View>
            <Text style={SharedStyles.sharedTextStyle}>{`${act.name} : ${
              act.value
            }`}</Text>
          </View>
        ))}
      </View>
      <Text style={SharedStyles.sharedTextStyle}>{Strings.stateName}</Text>
      <Text style={SharedStyles.sharedTextStyle}>{state.stateName}</Text>
    </SharedModal>
  );
};

const styles = StyleSheet.create({});

export default ShowStateDetailsModal;
