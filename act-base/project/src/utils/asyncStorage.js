import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeAccessToken = async access_token => {
  try {
    await AsyncStorage.setItem('access_token', access_token)
  } catch (e) {

  }
}

export const getAccessToken = async () => {
  try {
    const taken_token = await AsyncStorage.getItem('access_token')
    console.log('taken_token',  taken_token)

    return taken_token;
    
  } catch (e) {
    console.log('Access Token을 가져오는 도중 에러가 발생 했습니다.', e)
  }
}