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
    stateName: ?string,
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
  const [stateName, setStateName] = useState({name: '', added: false});

  const handleModalConfirm = () => {
    !stateName.added
      ? setStateName({...stateName, added: true})
      : handleToggleVisibility(false, true, actuatorsValues, stateName.name);
  };
  return (
    <SharedModal
      onCancel={() => handleToggleVisibility(false, false)}
      onConfirm={handleModalConfirm}>
      <Text style={SharedStyles.sharedTextStyle}>
        {stateName.added
          ? Strings.submitActuatorsValueInState(stateNumber)
          : Strings.stateName}
      </Text>
      {!stateName.added ? (
        <View>
          <TextInput
            style={styles.stateNameTextInput}
            onChangeText={(name: string) => setStateName({name})}
          />
        </View>
      ) : (
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
      )}
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
  stateNameTextInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    height: 30,
    fontSize: 12,
    fontFamily: Fonts.iransans,
    textAlign: 'center',
    width: 90,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 10,
  },
});
export default AddStateModal;
