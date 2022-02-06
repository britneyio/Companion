import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveSettings = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      return e;
    }
  };
const DEFAULT_SETTINGS = {
    name: ''
};
export const loadSettings = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value === null) {
        return DEFAULT_SETTINGS;
      }
    } catch(e) {
      return e;
    }
  };
  