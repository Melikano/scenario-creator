import axios from 'axios';
import MockThings from '../constants/MockThings';

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
