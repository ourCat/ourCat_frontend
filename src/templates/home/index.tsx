import { RecommendList, Card, showToast, ModalPortal } from 'components';
import { useState } from 'react';
import * as S from './style';

export interface HomeTemplateProps {}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const onClickToastAction = () => {
    showToast('hello~ spring');
  };

  return (
    <S.Wrap>
      <RecommendList />
      <Card
        id={1}
        title={'뚱땅이'}
        date={new Date()}
        content={'나는야 김뚱땅. 오늘도 내 짝을 찾는다. \n 대체 어디에 있을까?'}
        heartCount={230}
        commentCount={104}
        bookmarkCount={80}
      />
      <Card
        id={2}
        title={'둥구'}
        date={new Date()}
        content={'거기 츄르 있는 사람?\n 츄르 한대만 물자...\n 츄르 한 대 정도는 괜찮잖아?'}
        heartCount={614}
        commentCount={311}
        bookmarkCount={110}
      />
      <button onClick={onClickToastAction}>toast action</button>
      <button onClick={() => setIsLogin(true)}>로그인 모달</button>
      {isLogin ? (
        <ModalPortal onClickCloseModal={() => setIsLogin(false)}>
          <S.ModalPotalComtainer>ModalPortal</S.ModalPotalComtainer>
        </ModalPortal>
      ) : null}
      <div id="root-modal" />
    </S.Wrap>
  );
};
