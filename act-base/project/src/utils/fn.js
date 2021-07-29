export const goBack = (navigation) => () => {
  navigation.goBack();
}


export const goToMain = (navigation) => () => {
  navigation.navigate('Home');
}