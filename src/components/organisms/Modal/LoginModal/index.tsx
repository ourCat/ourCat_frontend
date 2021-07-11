import * as S from './style';
import { ModalPortal, Image, Label } from 'components';
import { ICON } from 'common';

export interface ILoginModalProps {
  isLogin: boolean;
  handleCloseModal: () => void;
}

export const LoginModal: React.FC<ILoginModalProps> = props => {
  return (
    <ModalPortal handleCloseModal={props.handleCloseModal}>
      <S.LoginModalWarp>
        <Image src={ICON.LOGO} width="60%" padding="30px 10px" />
        <Label>로그인 후 이용해주세요</Label>
      </S.LoginModalWarp>
    </ModalPortal>
  );
};
