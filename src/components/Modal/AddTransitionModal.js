//@flow
import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import SharedModal from '../../sharedComponents/SharedModal';
import Strings from '../../constants/Strings';
import {useSelector} from 'react-redux';
import SharedStyles from '../../constants/Styles';
import Fonts from '../../constants/Fonts';
import type {thingType} from '../../constants/Types';

type AddTransitionModalProps = {};
const AddTransitionModal = ({}: AddTransitionModalProps) => {
  const things = useSelector(state => state.things);
  const sensors = things.filter((thing: thingType) => thing.type === 'sensor');
  const [sensorsConditions, setSensorsConditions] = useState(sensors);
  const [srcAndDest, setSrcAndDest] = useState({
    src: '',
    dest: '',
    added: false,
  });
  const onConfirm = () => {
    !srcAndDest.added ? setSrcAndDest({...srcAndDest, added: true}) : {};
  };
  const onCancel = () => {};
  return (
    <SharedModal onCancel={onCancel} onConfirm={onConfirm}>
      <Text style={SharedStyles.sharedTextStyle}>
        {srcAndDest.added
          ? Strings.submitSensorsConditions
          : Strings.submitDestAndSrc}
      </Text>
      <View style={styles.thingsContainer}>
        {!srcAndDest.added ? (
          <View>
            <View>
              <Text>{Strings.source}</Text>
              <TextInput style={styles.thingsValueTextInput} />
            </View>

            <View>
              <Text>{Strings.destination}</Text>
              <TextInput style={styles.thingsValueTextInput} />
            </View>
          </View>
        ) : (
          sensors.map(sens => (
            <View style={styles.thingRow}>
              <TextInput style={styles.thingsValueTextInput} />
              <Text style={SharedStyles.sharedTextStyle}>
                {`< ${sens.name} <`}
              </Text>
              <TextInput style={styles.thingsValueTextInput} />
            </View>
          ))
        )}
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
export default AddTransitionModal;
