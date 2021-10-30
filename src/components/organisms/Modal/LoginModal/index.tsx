import { ModalPortal, Image, Label } from 'components';
import { ICON } from 'common';
import { Button } from 'components/atoms';
import * as S from './style';
import { useState } from 'react';
import { SignUp } from './component';
import { Login } from './component/Login';
import { KakaoLogin, NaverLogin } from 'templates';

export interface ILoginModalProps {
  isLogin: boolean;
  handleCloseModal: () => void;
}

export const LoginModal: React.FC<ILoginModalProps> = props => {
  const [isSignUpView, setIsSignUpView] = useState(false);
  const [isLoginView, setIsLoginView] = useState(false);

  const handlerSignUpPage = () => setIsSignUpView(!isSignUpView);
  const handlerLoginPage = () => setIsLoginView(!isLoginView);

  /**
   * TODO: 버튼에 아이콘 추가하기
   */

  return (
    <ModalPortal handleCloseModal={props.handleCloseModal}>
      <S.LoginModalWarp>
        <S.LoginLogoContainer>
          <Image src={ICON.LOGO} width="60%" padding="10px" />
          <Label color={'gray'}>우리동네 길고양이 커뮤니티</Label>
        </S.LoginLogoContainer>
        {!isSignUpView && !isLoginView && (
          <>
            <S.LoginSocialContainer>
              <Button
                onClick={handlerLoginPage}
                filled
                label="이메일로 시작히기"
                padding="8px 0"
                borderRadius="4px"
                width="100%"
                margin="0 0 0.5rem 0"
                backgroundColor="#0D1117"
              />
              <NaverLogin />
              <KakaoLogin />
            </S.LoginSocialContainer>
            {/* space bar */}
            <S.LoginModalSpaceContainer>
              <S.LoginSpaceBar />
              <Label className="space_text">회원가입</Label>
              <S.LoginSpaceBar />
            </S.LoginModalSpaceContainer>
            <S.LoginSocialContainer>
              <Button
                onClick={handlerSignUpPage}
                filled={false}
                label="이메일 회원가입하기"
                padding="8px 0"
                borderRadius="4px"
                width="100%"
              />
            </S.LoginSocialContainer>
          </>
        )}
        {isSignUpView && (
          <S.LoginSocialContainer>
            <SignUp handlerBackPage={handlerSignUpPage} />
          </S.LoginSocialContainer>
        )}
        {isLoginView && (
          <S.LoginSocialContainer>
            <Login handlerBackPage={handlerLoginPage} />
          </S.LoginSocialContainer>
        )}
      </S.LoginModalWarp>
    </ModalPortal>
  );
};
