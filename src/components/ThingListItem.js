//@flow
import React, {useState} from 'react';
import {View, Text, TextInput, Picker, StyleSheet} from 'react-native';
import Strings from '../constants/Strings';
import DistFuncs from '../constants/DistFunctions';
import Colors from '../constants/Colors';
import SharedStyles from '../constants/Styles';
import Fonts from '../constants/Fonts';

type ThingListItemProps = {
  thingName: string,
  handleInitialValueChange: number => void,
  handleRandomFunctionChange: string => void,
  handleMaxChange: number => void,
  handleMinChange: number => void,
  handleParam1Change: number => void,
  handleParam2Change: number => void,
};
const ThingListItem = ({
  thingName,
  handleInitialValueChange,
  handleRandomFunctionChange,
  handleMinChange,
  handleMaxChange,
  handleParam1Change,
  handleParam2Change,
}: ThingListItemProps) => {
  const [selectedFunc, setSelectedFunc] = useState(DistFuncs.Uniform);
  return (
    <View style={styles.container}>
      <View>
        <Text style={SharedStyles.sharedTitleStyle}>{thingName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={SharedStyles.sharedTextStyle}>{Strings.initailValue}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.valueInput}
          onChangeText={text => handleInitialValueChange(parseInt(text, 10))}
        />
      </View>
      <View style={styles.row}>
        <Text style={{...SharedStyles.sharedTextStyle, ...styles.funcText}}>
          {Strings.distributionFunc}
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedFunc}
          onValueChange={(value, index) => {
            setSelectedFunc(value);
            //$FlowFixMe
            handleRandomFunctionChange(value);
          }}>
          <Picker.Item label={Strings.uniform} value={DistFuncs.Uniform} />
          <Picker.Item
            label={Strings.exponentioal}
            value={DistFuncs.Exponentioal}
          />
          <Picker.Item label={Strings.normal} value={DistFuncs.Normal} />
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={SharedStyles.sharedTextStyle}>{Strings.minimum}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.valueInput}
          onChangeText={text => handleMinChange(parseInt(text, 10))}
        />
        <Text style={SharedStyles.sharedTextStyle}>{Strings.maximum}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.valueInput}
          onChangeText={text => handleMaxChange(parseInt(text, 10))}
        />
      </View>
      {selectedFunc === DistFuncs.Normal ? (
        <View style={styles.row}>
          <Text style={SharedStyles.sharedTextStyle}>{Strings.miu}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.valueInput}
            onChangeText={text => handleParam1Change(parseInt(text, 10))}
          />
          <Text style={SharedStyles.sharedTextStyle}>{Strings.sigma}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.valueInput}
            onChangeText={text => handleParam2Change(parseInt(text, 10))}
          />
        </View>
      ) : selectedFunc === DistFuncs.Exponentioal ? (
        <View style={styles.row}>
          <Text style={SharedStyles.sharedTextStyle}>{Strings.parameter}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.valueInput}
            onChangeText={text => handleParam1Change(parseInt(text, 10))}
          />
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  valueInput: {
    width: '10%',
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingBottom: 0,
    paddingTop: 0,
    fontFamily: Fonts.iransans,
  },
  picker: {
    width: '40%',
  },
  funcText: {
    lineHeight: 45,
  },
});
export default ThingListItem;
