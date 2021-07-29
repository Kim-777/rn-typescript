import axios from 'axios';

const AxiosManager = axios.create({
  baseURL: 'https://9001.in.actbase.io',
});



export default AxiosManager;