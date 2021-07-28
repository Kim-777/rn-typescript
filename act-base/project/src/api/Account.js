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
};


export default Account;