//@flow
import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import ThingCard from '../components/ThingCard';
import MockThings from '../constants/MockThings';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import SharedButton from '../sharedComponents/SharedButton';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';

const ChooseThingsScreen = () => {
  const arrToMatrix = (arr: Array<Object>) =>
    arr.reduce(
      (matrix, thing, index, things) =>
        index % 2 === 0 ? [...matrix, [thing, things[index + 1]]] : matrix,
      [],
    );

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{Strings.chooseThings}</Text>
      {console.log(arrToMatrix(MockThings))}
      {arrToMatrix(MockThings).map(row => (
        <View style={styles.thingRow}>
          {row.map(thing => thing && <ThingCard thing={thing} />)}
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <SharedButton
          buttonType="PREV"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <SharedButton
          buttonType="NEXT"
          onPress={() => {
            navigation.navigate(Screens.drawStateMachine);
          }}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.iransans,
    fontSize: 15,
    color: Colors.gray,
    margin: 10,
  },
  thingRow: {flexDirection: 'row'},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 20,
  },
});
export default ChooseThingsScreen;
