import { useEffect, useState } from 'react';
import { LoginModal } from 'components';
import * as S from './style';

interface IMyPageTemplateProps {}

export const MyPageTemplate: React.FC<IMyPageTemplateProps> = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // 로그인 o => 화면 렌더링
    // 로그인 x => 로그인모달창
    //document.cookie = 'userSession' + '=' + escape('springSession');
  }, []);

  return (
    <S.MyPageWrap>
      {isLogin ? (
        <S.MyPageWrap>mypage</S.MyPageWrap>
      ) : (
        <LoginModal isLogin={isLogin} handleCloseModal={() => setIsLogin(!isLogin)} />
      )}
      <div id="root-modal" />
    </S.MyPageWrap>
  );
};
