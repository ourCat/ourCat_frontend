import * as S from './style';
import { ICON, PAGE } from 'common';
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}
export const NaverLogin = () => {
  const NaverLoginButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('clientId: ', process.env.NAVER_CLIENT_ID);
    console.log('callbackUri: ', PAGE.NAVER_CALLBACK);

    initLogin();
  }, []);

  function initLogin() {
    if (process.browser) {
      const { naver } = window;
      if (naver) {
        const naverLogin = new naver.LoginWithNaverId({
          clientId: `${process.env.NAVER_CLIENT_ID}`,
          callbackUrl: PAGE.NAVER_CALLBACK,
          callbackHandle: true,
          loginButton: {
            color: 'green',
            type: 1,
            height: 28,
          },
        });
        naverLogin.init();
      }
    }
  }

  return <S.Wrap id="naverIdLogin" ref={NaverLoginButtonRef} />;
};
