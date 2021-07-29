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
};


export const setToken = access_token => {
  axios.defaults.headers.common.authorization = `Bearer ${access_token}`;
}

export const userInfo = () => {
  return axios.get('api/accounts/authentication')
}


