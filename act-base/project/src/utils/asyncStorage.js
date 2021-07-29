import AsyncStorage from "@react-native-async-storage/async-storage";


const storeAccessToken = async access_token => {
  try {
    await AsyncStorage.setItem('access_token', access_token)
  } catch (e) {
    
  }
}

