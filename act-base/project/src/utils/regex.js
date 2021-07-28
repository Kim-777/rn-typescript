const idRule = /^[A-Za-z0-9+]{4,10}$/;
const phoneRule = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,10}$/;


export const checkNicknameLength = (nickname) => {
  return nickname.length < 10 && nickname.length >= 1
}

export const regexId = (id) => {
  return idRule.test(id) 
}

export const regexPhone = (phone) => {
  return phoneRule.test(phone)
}

export const regexPassword = (password) => {
  return passwordRule.test(password);
}