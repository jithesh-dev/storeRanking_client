import axios from './axios';

const getStoreData = () => {
  return axios.get('get-store-data');
};

export default getStoreData;
