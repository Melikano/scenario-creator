//@flow
import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (key: string, value: Object) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('error in saving item in async storage', e);
  }
};
export const getMultipleData = async (key: string) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const filteredKeys = keys.filter(k => k.startsWith(key));
    const result = await AsyncStorage.multiGet(filteredKeys);
    return result
      .flat()
      .filter(res => !res.startsWith(key))
      .map(JSON.parse);
  } catch (e) {
    console.log('error in getting item from async storage', e);
  }
};

export const getSingleData = async (key: string) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return JSON.parse(result);
  } catch (e) {
    console.log('error getting data', e);
  }
};
