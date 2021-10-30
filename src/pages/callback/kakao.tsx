import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PAGE } from 'common';
import axios from 'axios';
import { Label } from 'components';
import { USER_API } from 'api/setting';

declare global {
  interface Window {
    Kakao: any;
  }
}

const Kakao = () => {
  const router = useRouter();
  //1. 인증 코드
  const code = router.query.code;
  const error = router.query.error;

  const getKakaoToken = async (code: string | string[] | undefined) => {
    console.log('clientId: ', `${process.env.KAKAO_JAVASCRIPT_KEY}`);
    if (!code) return;
    //2. 인증코드를 통해 사용자 토큰 요청
    const result: any = await axios.get('https://kauth.kakao.com/oauth/token', {
      params: {
        grant_type: 'authorization_code',
        client_id: `${process.env.KAKAO_JAVASCRIPT_KEY}`, //KAKAO API KEY
        redirect_uri: PAGE.KAKAO_CALLBACK,
        code,
      },
    });

    const access_token = result.data.access_token;
    if (access_token) {
      console.log(access_token);
      socialLogin(access_token);
    }
  };

  const socialLogin = async (token: string) => {
    const result = await USER_API.post('/user/social/kakao', {
      token,
    });

    console.log(result);
    if (result.status === 200) {
      const { userToken } = result.data;
      alert(`카카오 소셜 로그인 완료\ntoken: ${userToken}`);
    }
  };

  //1-1. 인증 코드 에러 시에
  useEffect(() => {
    if (error) {
      console.log(error);
      return;
    }
  }, [error]);

  //1-2. 인증코드를 통해 사용자 토큰 요청
  useEffect(() => {
    if (code) {
      getKakaoToken(code);
    }
  }, [code]);

  return (
    <Label font={32} margin={'30px 0 0'} weight="bold" height="100vh">
      카카오 콜백 페이지
    </Label>
  );
};

export default Kakao;
