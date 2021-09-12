import { useEffect, useState } from 'react';
import { PAGE } from 'common';
import { Button } from 'components/atoms';

declare global {
  interface Window {
    Kakao: any;
  }
}

export const KakaoLogin = () => {
  const [Kakao, setKakao] = useState<{ Auth: any }>({ Auth: null });

  function handleKakaoButtonClick() {
    if (Kakao) {
      Kakao?.Auth.authorize({
        redirectUri: PAGE.KAKAO_CALLBACK,
      });
    }
  }
  useEffect(() => {
    if (process.browser) {
      try {
        const { Kakao } = window;
        if (!Kakao.isInitialized()) Kakao.init(`${process.env.KAKAO_JAVASCRIPT_KEY}`);
        setKakao(Kakao);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <Button
      onClick={handleKakaoButtonClick}
      filled
      label="카카오톡으로 시작하기"
      padding="8px 0"
      borderRadius="4px"
      width="100%"
      margin="0 0 1rem 0"
      backgroundColor="#F2DA00"
    />
  );
};
