import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PAGE } from 'common';
import axios from 'axios';
import { Label } from 'components';

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
    console.log('clientId: ', `${process.env.KAKAO_CLIENT_ID}`);
    if (!code) return;
    //2. 인증코드를 통해 사용자 토큰 요청
    const result: any = await axios.get('https://kauth.kakao.com/oauth/token', {
      params: {
        grant_type: 'authorization_code',
        client_id: `${process.env.KAKAO_CLIENT_ID}`, //KAKAO API KEY
        redirect_uri: PAGE.KAKAO_CALLBACK,
        code,
      },
    });

    const access_token = result.data.access_token;
    if (access_token) {
      console.log(access_token);
      if (process.browser) {
        const { Kakao } = window;
        if (!Kakao.isInitialized()) Kakao.init(`${process.env.KAKAO_JAVASCRIPT_KEY}`); //KAKAO JAVASCRIPT KEY

        //3. 사용자 토큰 할당 후 사용자 정보 요청 함수 호출
        Kakao.Auth.setAccessToken(access_token);
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response: any) {
            console.log(response);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      }
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
