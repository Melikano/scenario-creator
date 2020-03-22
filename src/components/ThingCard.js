//@flow
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Icon} from 'native-base';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {useDispatch} from 'react-redux';
import {addThing, removeThing} from '../Redux/actions/ScenarioActions';
import type {thingType} from '../constants/Types';
type Props = {
  thing: thingType,
};
const ThingCard = ({thing}: Props) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddThing = () => {
    setIsAdded(true);
    dispatch(addThing(thing));
  };

  const handleRemoveThing = () => {
    setIsAdded(false);
    dispatch(removeThing(thing.id));
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{thing.name}</Text>
      <Text style={styles.cardDesc}>{thing.description}</Text>
      {!isAdded ? (
        <Button
          rounded
          style={{...styles.circlesButton, ...styles.addButton}}
          onPress={handleAddThing}>
          <Icon name="plus" type="Entypo" style={styles.icon} />
        </Button>
      ) : (
        <Button
          rounded
          style={{...styles.circlesButton, ...styles.removeButton}}
          onPress={handleRemoveThing}>
          <Icon name="minus" type="Entypo" style={styles.icon} />
        </Button>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '45%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.gray,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.white,
    margin: 10,
  },
  circlesButton: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    width: 40,
    height: 40,
    padding: 0,
  },
  addButton: {
    backgroundColor: Colors.blueButton,
  },
  removeButton: {
    backgroundColor: Colors.green,
  },
  icon: {
    marginRight: 0,
    marginLeft: 0,
  },
  cardTitle: {
    fontFamily: Fonts.iransansBold,
    color: Colors.gray,
    fontSize: 18,
  },
  cardDesc: {
    fontFamily: Fonts.iransans,
    color: Colors.gray,
    textAlign: 'center',
    fontSize: 12,
    margin: 10,
  },
});
export default ThingCard;
