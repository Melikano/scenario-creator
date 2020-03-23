//@flow
import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import SharedModal from '../../sharedComponents/SharedModal';
import Strings from '../../constants/Strings';
import {useSelector} from 'react-redux';
import SharedStyles from '../../constants/Styles';
import Fonts from '../../constants/Fonts';
import type {thingType} from '../../constants/Types';

type AddStateModalProps = {
  stateNumber: number,
  handleToggleVisibility: (
    modalVisibility: boolean,
    stateCompleted: boolean,
    actuatorValues: ?Array<{...thingType, value: string}>,
  ) => void,
};
const AddStateModal = ({
  stateNumber,
  handleToggleVisibility,
}: AddStateModalProps) => {
  const things = useSelector(state => state.things);
  const actuators = things.filter(
    (thing: thingType) => thing.type === 'actuator',
  );
  const [actuatorsValues, setActuatorsValues] = useState([]);
  return (
    <SharedModal
      onCancel={() => handleToggleVisibility(false, false)}
      onConfirm={() => handleToggleVisibility(false, true, actuatorsValues)}>
      <Text style={SharedStyles.sharedTextStyle}>
        {Strings.submitActuatorsValueInState(stateNumber)}
      </Text>
      <View style={styles.thingsContainer}>
        {actuators.map(act => (
          <View style={styles.thingRow}>
            <TextInput
              style={styles.thingsValueTextInput}
              keyboardType="numeric"
              onChangeText={value =>
                setActuatorsValues([
                  ...actuatorsValues,
                  {
                    ...actuators.find(actuator => actuator.id === act.id),
                    value,
                  },
                ])
              }
            />
            <Text style={SharedStyles.sharedTextStyle}>{act.name}</Text>
          </View>
        ))}
      </View>
    </SharedModal>
  );
};
const styles = StyleSheet.create({
  thingsContainer: {
    flexDirection: 'column',
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  thingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  thingsValueTextInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    height: 25,
    fontSize: 12,
    fontFamily: Fonts.iransans,
    textAlign: 'center',
    width: 40,
    paddingTop: 0,
    paddingBottom: 0,
  },
});
export default AddStateModal;
