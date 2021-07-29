import AxiosManager from './Axios';

const Account = {
  signup: dataToSignup => {
    return AxiosManager.post('/api/accounts', dataToSignup);
  },
  login: dataToLogin => {
    return AxiosManager.post('/oauth/token', dataToLogin, {
      auth: {
        username: 'ant-league',
        password: 'ehdgkrroalflrm!@',
      },
    });
  },
  setToken: access_token => {
    AxiosManager.defaults.headers.common.authorization = `Bearer ${access_token}`;
  },
  userInfo: () => {
    return AxiosManager.get('/api/accounts/authentication')
  }
};

export default Account;