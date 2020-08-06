//@flow
import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (key: string, value: Object) => {
  try {
    console.log('storiiiiing >>>>>>>>>>>>>>>>> ' + key);
    console.log(value);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('error in saving item in async storage');
  }
};
export const getData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const scenarioKeys = keys.filter(key => key.startsWith('scenario'));
    const result = await AsyncStorage.multiGet(scenarioKeys);
    return result
      .flat()
      .filter(res => !res.startsWith('scenario'))
      .map(JSON.parse);
  } catch (e) {
    console.log('error in getting item from async storage');
  }
};
