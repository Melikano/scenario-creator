//@flow
import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import SharedModal from '../../sharedComponents/SharedModal';
import Strings from '../../constants/Strings';
import {useSelector} from 'react-redux';
import SharedStyles from '../../constants/Styles';
import Fonts from '../../constants/Fonts';
import type {thingType} from '../../constants/Types';

type AddTransitionModalProps = {
  handleModalVisibility: (
    modalVisibility: boolean,
    confirmed: boolean,
    source: ?number,
    destionation: ?number,
    sensorsConditions: ?Array<{
      ...thingType,
      upperBound: string,
      lowerBound: string,
    }>,
  ) => void,
};
const AddTransitionModal = ({
  handleModalVisibility,
}: AddTransitionModalProps) => {
  const things = useSelector(state => state.things);
  const sensors = things
    .filter((thing: thingType) => thing.type === 'sensor')
    .map(sensor => ({...sensor, upperBound: '', lowerBound: ''}));
  const [sensorsConditions, setSensorsConditions] = useState(sensors);

  const [srcAndDest, setSrcAndDest] = useState({
    src: 0,
    dest: 0,
    added: false,
  });
  const onConfirm = () => {
    !srcAndDest.added
      ? setSrcAndDest({...srcAndDest, added: true})
      : handleModalVisibility(
          false,
          true,
          srcAndDest.src,
          srcAndDest.dest,
          sensorsConditions,
        );
  };
  const onCancel = () => {
    handleModalVisibility(false, false);
  };
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
            <View style={styles.thingRow}>
              <TextInput
                style={styles.thingsValueTextInput}
                keyboardType="numeric"
                onChangeText={text => {
                  console.log(text);
                  setSrcAndDest({
                    ...srcAndDest,
                    src: parseInt(text),
                  });
                }}
              />
              <Text style={SharedStyles.sharedTextStyle}>{Strings.source}</Text>
            </View>

            <View style={styles.thingRow}>
              <TextInput
                style={styles.thingsValueTextInput}
                keyboardType="numeric"
                onChangeText={text =>
                  setSrcAndDest({...srcAndDest, dest: parseInt(text)})
                }
              />
              <Text style={SharedStyles.sharedTextStyle}>
                {Strings.destination}
              </Text>
            </View>
          </View>
        ) : (
          sensors.map(sens => (
            <View style={styles.thingRow}>
              <TextInput
                style={styles.thingsValueTextInput}
                onChangeText={text => {
                  let sensor = sensorsConditions.find(s => s.id === sens.id);
                  sensor.upperBound = text;
                  setSensorsConditions([...sensorsConditions, sensor]);
                }}
              />
              <Text style={SharedStyles.sharedTextStyle}>
                {` <  ${sens.name}  < `}
              </Text>
              <TextInput
                style={styles.thingsValueTextInput}
                onChangeText={text => {
                  let sensor = sensorsConditions.find(s => s.id === sens.id);
                  sensor.lowerBound = text;
                  setSensorsConditions([...sensorsConditions, sensor]);
                }}
              />
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
    width: '80%',
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
