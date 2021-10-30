import Axios from 'axios';
export const USER_API = Axios.create({
  baseURL: 'http://3.35.11.191:3000',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});

export const SignUpAPI = async ({
  nickname,
  email,
  mobileNo,
  password,
  passwordConfirm,
  gender,
}: {
  nickname: string;
  email: string;
  mobileNo: string;
  password: string;
  passwordConfirm: string;
  gender: string;
}) => {
  return await USER_API.post('/user/signup', {
    nickname,
    email,
    mobileNo,
    password,
    passwordConfirm,
    gender,
  });
};

export const LoginAPI = async ({ loginId, password }: { loginId: string; password: string }) => {
  return await USER_API.post('user/signin', { loginId, password });
};
