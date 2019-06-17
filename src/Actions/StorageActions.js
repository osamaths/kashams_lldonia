import AsyncStorage from "@react-native-community/async-storage";

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
};

export const storeMyInfo = user => {
  _storeLoginData(user);
};
const _storeLoginData = async user => {
  try {
    await AsyncStorage.setItem("token", user.token);
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};
