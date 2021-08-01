import Axios from 'axios';
export const USER_API = Axios.create({
  baseURL: 'http://3.35.11.191:3000',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});
