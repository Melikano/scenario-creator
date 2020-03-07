//@flow
import React from 'react';
import {StyleSheet, FlatList, ScrollView, Text} from 'react-native';
import ThingCard from '../components/ThingCard';
import MockThings from '../constants/MockThings';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {useDispatch} from 'react-redux';
import {addThing} from '../Redux/actions/ScenarioActions';
import SharedButton from '../sharedComponents/SharedButton';

const ChooseThingsScreen = () => {
  const renderItem = ({item}) => <ThingCard thing={item} />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{Strings.chooseThings}</Text>

      <FlatList
        data={MockThings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <SharedButton buttonType="NEXT" onPress={() => {}} />
      <SharedButton buttonType="PREV" onPress={() => {}} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.iransans,
    fontSize: 15,
    color: Colors.gray,
    margin: 10,
  },
});
export default ChooseThingsScreen;
