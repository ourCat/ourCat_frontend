import { ModalPortal, Image, Label } from 'components';
import { ICON } from 'common';
import { Button } from 'components/atoms';
import * as S from './style';
import { useState } from 'react';
import { SignUp } from './component';
import { Login } from './component/Login';

export interface ILoginModalProps {
  isLogin: boolean;
  handleCloseModal: () => void;
}

export const LoginModal: React.FC<ILoginModalProps> = props => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handlerSignUp = () => setIsSignUp(!isSignUp);
  const handlerLogin = () => setIsLogin(!isLogin);

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
        {!isSignUp && !isLogin && (
          <>
            <S.LoginSocialContainer>
              <Button
                onClick={handlerLogin}
                filled
                label="이메일로 시작히기"
                padding="8px 0"
                borderRadius="4px"
                width="100%"
                margin="0 0 0.5rem 0"
                backgroundColor="#0D1117"
              />
              <Button
                onClick={() => {}}
                filled
                label="네이버로 시작히기"
                padding="8px 0"
                borderRadius="4px"
                width="100%"
                margin="0 0 0.5rem 0"
                backgroundColor="#2CAE00"
              />
              <Button
                onClick={() => {}}
                filled
                label="카카오톡으로 시작하기"
                padding="8px 0"
                borderRadius="4px"
                width="100%"
                margin="0 0 0.5rem 0"
                backgroundColor="#F2DA00"
              />
            </S.LoginSocialContainer>
            {/* space bar */}
            <S.LoginModalSpaceContainer>
              <S.LoginSpaceBar />
              <Label className="space_text">회원가입</Label>
              <S.LoginSpaceBar />
            </S.LoginModalSpaceContainer>
            <S.LoginSocialContainer>
              <Button
                onClick={handlerSignUp}
                filled={false}
                label="이메일 회원가입하기"
                padding="8px 0"
                borderRadius="4px"
                width="100%"
              />
            </S.LoginSocialContainer>
          </>
        )}
        {isSignUp && (
          <S.LoginSocialContainer>
            <SignUp handlerSignUp={handlerSignUp} />
          </S.LoginSocialContainer>
        )}
        {isLogin && (
          <S.LoginSocialContainer>
            <Login handlerLogin={handlerLogin} />
          </S.LoginSocialContainer>
        )}
      </S.LoginModalWarp>
    </ModalPortal>
  );
};
