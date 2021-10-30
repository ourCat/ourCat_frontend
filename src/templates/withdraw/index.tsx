import * as S from './style';
import { Label, Input, Button } from 'components';
import { useCallback, useRef } from 'react';
import { USER_API } from 'api/setting';

export interface WithDrawTemplateProps {}

export const WithDrawTemplate: React.FC<WithDrawTemplateProps> = ({}) => {
  const certNumberInputRef = useRef<HTMLInputElement>(null);

  const registerAPI = async () => {
    try {
      const result = await USER_API.post('/user/signup', {
        nickName: 'tester',
        email: 'test0801@naver.com',
        mobileNo: '01012345678',
        password: '1234qwer!',
        passwordConfirm: '1234qwer!',
        gender: 'M',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkCertNumberAPI = async () => {
    try {
      const result = await USER_API.get('/user/delete-code');
    } catch (err) {
      console.log(err);
    }
  };

  const withdrawAPI = async () => {
    try {
      const result = await USER_API.post('/user/deactivate', {
        reason: 'good',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckCertNumberButtonClick = useCallback(() => {
    // const certNumberInputValue = certNumberInputRef.current?.value;
    checkCertNumberAPI();
  }, [certNumberInputRef]);
  const handleRegisterButtonClick = useCallback(async () => {
    await registerAPI();
  }, []);
  const handleWithdrawButtonClick = useCallback(async () => {
    await withdrawAPI();
  }, []);

  return (
    <S.Wrap>
      <Label font={20} weight="bold">
        회원탈퇴
      </Label>
      <Label font={14} color="GRAY" margin={'10px 0 0 '}>
        불편하셨던 점을 알려주세요!
      </Label>
      <Input
        placeholder="인증번호를 입력해주세요"
        padding={'10px 0'}
        onKeyPress={e => e.key === 'Enter' && handleCheckCertNumberButtonClick()}
        ref={certNumberInputRef}
      />
      <S.ButtonItemList>
        <S.ButtonItem>
          <Button label="가입" onClick={handleRegisterButtonClick} filled={true} />
        </S.ButtonItem>
        <S.ButtonItem>
          <Button label="인증" onClick={handleCheckCertNumberButtonClick} filled={true} />
        </S.ButtonItem>
        <S.ButtonItem>
          <Button label="탈퇴" onClick={handleWithdrawButtonClick} filled={true} />
        </S.ButtonItem>
      </S.ButtonItemList>
    </S.Wrap>
  );
};
