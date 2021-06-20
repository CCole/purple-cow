import Axios from 'axios';

let urls = {
  test: `https://api.countapi.xyz/`,
  development: 'https://api.countapi.xyz/',
  production: 'https://api.countapi.xyz/',
};
const countApi = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default countApi;
