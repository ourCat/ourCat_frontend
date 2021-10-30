import { useEffect, useState } from 'react';
import { LoginModal, Profile, SubHeader } from 'components';
import * as S from './style';
import { sample } from 'common';

interface IMyPageTemplateProps {}

export const MyPageTemplate: React.FC<IMyPageTemplateProps> = () => {
  const [isLogin, setLogin] = useState(
    typeof window !== 'undefined' && Boolean(localStorage.getItem('isLogin')),
  );

  const handlerCloseModal = () => setLogin(true);

  useEffect(() => {
    // 로그인 o => 화면 렌더링
    // 로그인 x => 로그인모달창
  }, []);

  return (
    <S.MyPageWrap>
      {isLogin ? (
        <S.MyPageWrap>
          <SubHeader />
          <Profile isCat={false} data={sample} />
        </S.MyPageWrap>
      ) : (
        <LoginModal isLogin={isLogin} handleCloseModal={handlerCloseModal} />
      )}
      <div id="root-modal" />
    </S.MyPageWrap>
  );
};
