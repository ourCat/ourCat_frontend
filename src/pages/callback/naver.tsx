import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Label } from 'components';
import { USER_API } from 'api/setting';

/* callback page */
const NaverCallbackPage = () => {
  const router = useRouter();

  const translateAccessToken = () => {
    try {
      const href = window.location.href.replace('#', '?');
      const url = new URL(href);
      const accessToken = url.searchParams.get('access_token');
      if (!accessToken || accessToken === 'access_denied') {
        console.error('access_denined');
        return '';
      }
      return accessToken;
    } catch (error) {
      console.error('translate access token error');
      return '';
    }
  };

  const socialLogin = async (token: string) => {
    const result = await USER_API.post('/user/social/naver', {
      token,
    });

    if (result.status === 200) {
      const { userToken } = result.data;
      alert(`네이버 소셜 로그인 완료\ntoken: ${userToken}`);
    }
  };

  useEffect(() => {
    try {
      const token = translateAccessToken();
      socialLogin(token);
    } catch (error) {
      console.error('social Error');
    }
  }, [router]);

  return (
    <>
      <Label font={32} margin={'30px 0 0'} weight="bold" height="100vh">
        네이버 콜백 페이지
      </Label>
    </>
  );
};

export default NaverCallbackPage;
