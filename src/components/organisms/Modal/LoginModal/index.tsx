import * as S from './style';
import { ModalPortal, Image, Label } from 'components';
import { ICON } from 'common';

export interface ILoginModalProps {
  isLogin: boolean;
  onClickCloseModal: () => void;
}

export const LoginModal: React.FC<ILoginModalProps> = props => {
  return (
    <ModalPortal onClickCloseModal={props.onClickCloseModal}>
      <S.LoginModalWarp>
        <Image src={ICON.LOGO} className="login-title" />
        <Label>로그인 후 이용해주세요</Label>
      </S.LoginModalWarp>
    </ModalPortal>
  );
};
