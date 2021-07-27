import axios from 'axios';

axios.defaults.baseURL = 'https://9001.in.actbase.io';

export const signup = dataToSignup => {
  return axios.post('/api/accounts', dataToSignup);
};


export const login = dataToLogin => {
  return axios.post('/oauth/token', dataToLogin, {
    auth: {
      username: 'ant-league',
      password: 'ehdgkrroalflrm!@',
    },
  });

  //   return axios({
  //   url: 'https://9001.in.actbase.io/oauth/token',
  //   method: 'POST',
  //   data: dataToLogin,
  //   auth: {
  //     username: 'ant-league',
  //     password: 'ehdgkrroalflrm!@'
  //   }
  // })
};


