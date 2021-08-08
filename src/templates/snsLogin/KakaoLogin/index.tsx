import { useEffect, useState } from 'react';
import { Image } from 'components';
import { ICON, PAGE } from 'common';

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
    // console.log('javascriptKey: ', `${process.env.KAKAO_JAVASCRIPT_KEY}`);
    if (process.browser) {
      try {
        const { Kakao } = window;
        if (!Kakao.isInitialized()) Kakao.init(`${process.env.KAKAO_JAVASCRIPT_KEY}`); //KAKAO JAVASCRIPT KEY
        setKakao(Kakao);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return <Image src={ICON.KAKAO} width={'28px'} height={'28px'} onClick={handleKakaoButtonClick} />;
};
