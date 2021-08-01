import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PAGE } from 'common';
import { Label } from 'components';

declare global {
  interface Window {
    naver: any;
  }
}

/* callback page */
const NaverCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      const { naver } = window;
      const naverLogin = new naver.LoginWithNaverId({
        clientId: `${process.env.NAVER_CLIENT_ID}`,
        callbackUrl: PAGE.NAVER_CALLBACK,
        callbackHandle: true,
      });
      naverLogin.init();
      naverLogin.getLoginStatus(function (status: any) {
        if (status) {
          /* 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
          console.log(naverLogin.user);
          const email = naverLogin.user.getEmail();

          const userData = {
            email: email || null,
            name: naverLogin.user.getName() || null,
            nickname: naverLogin.user.getNickName() || null,
            gender: naverLogin.user.getGender() || null,

            uniqId: naverLogin.user.getId() || null,
            mobile: naverLogin.user.getMobile() || null,
          };
          console.log(userData);
        } else {
          console.log('callback 처리에 실패하였습니다.');
        }
      });
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
