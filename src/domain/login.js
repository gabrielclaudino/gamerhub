import axios from 'axios';

export const auth = (login) => {
  return axios.post(`${process.env.NEXT_PUBLIC_SERVER}/login`, {
    user: login.user,
    password: login.password,
  });
};
