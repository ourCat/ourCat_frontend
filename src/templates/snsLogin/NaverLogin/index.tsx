import * as S from './style';
import { PAGE } from 'common';
import React, { useEffect, useRef } from 'react';
import { Button } from 'components';

declare global {
  interface Window {
    naver: any;
  }
}
export const NaverLogin = () => {
  const NaverLoginButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  function handleNaverIconClick() {
    const naverLoginButton = document.getElementById('naverIdLogin_loginButton');
    naverLoginButton?.click();
  }

  return (
    <>
      <S.Wrap id="naverIdLogin" ref={NaverLoginButtonRef} />
      <Button
        onClick={handleNaverIconClick}
        filled
        label="네이버로 시작히기"
        padding="8px 0"
        borderRadius="4px"
        width="100%"
        margin="0 0 0.5rem 0"
        backgroundColor="#2CAE00"
      />
    </>
  );
};
