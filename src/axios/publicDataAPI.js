import axios from 'axios';

export const PUBLIC_DATA_BASE_URL = process.env.REACT_APP_PUBLIC_DATA_API_BASE_URL;
export const PUBLIC_DATA_API_KEY = process.env.REACT_APP_PUBLIC_DATA_API_KEY;

const api = axios.create({
  baseURL: `${PUBLIC_DATA_BASE_URL}/${PUBLIC_DATA_API_KEY}/json/ListPublicReservationSport`,
  timeout: 5000
});

export default api;

// 리액트 쿼리
export const getData = async (from, to) => {
  const res = (await api(`/${from}/${to}/`)).data.ListPublicReservationSport.row;
  return res;
};
