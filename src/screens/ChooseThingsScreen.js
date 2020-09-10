//@flow
import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {Spinner} from 'native-base';
import ThingCard from '../components/ThingCard';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import SharedButton from '../sharedComponents/SharedButton';
import SharedHeader from '../sharedComponents/Header';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import {fetchData} from '../utils/dataFetchingUtils';
import MockThings from '../constants/MockThings';

const ChooseThingsScreen = () => {
  const [things, setThings] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchThings = async () => {
      const result = await fetchData('http://192.168.43.202:3000/things');
      result.length === 0
        ? setTimeout(() => setThings(MockThings), 2000)
        : setThings(result);
    };

    fetchThings();
  });
  return (
    <>
      <SharedHeader
        title={Strings.newScenrio}
        showBack={true}
        onBackPress={() => navigation.goBack()}
      />
      {things.length === 0 ? (
        <Spinner color="gray" />
      ) : (
        <FlatList
          data={things}
          style={{backgroundColor: Colors.white}}
          numColumns={2}
          renderItem={({item}) => item && <ThingCard thing={item} />}
          ListHeaderComponent={() => (
            <Text style={styles.title}>{Strings.chooseThings}</Text>
          )}
          ListFooterComponent={() => (
            <View style={styles.buttonContainer}>
              <SharedButton
                buttonType="PREV"
                onPress={() => {
                  navigation.goBack({reset: false});
                }}
              />
              <SharedButton
                buttonType="NEXT"
                onPress={() => {
                  navigation.navigate(Screens.drawStateMachine);
                }}
              />
            </View>
          )}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    padding: 20,
    backgroundColor: Colors.white,
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
