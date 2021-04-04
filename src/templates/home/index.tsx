import * as S from './style';
import { RecommendList, Profile, Card, ThumbnailList } from 'components';
import { sample, ThumbnailListData } from 'common';

export interface HomeTemplateProps {}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {



    
  return (
    <S.Wrap>
      <RecommendList />
      <Profile isCat={false} data={sample} />
      <Card
        title={'뚱땅이'}
        date={new Date()}
        content={'나는야 김뚱땅. 오늘도 내 짝을 찾는다. \n 대체 어디에 있을까?'}
        heartCount={230}
        commentCount={104}
        bookmarkCount={80}
      />
      <Card
        title={'둥구'}
        date={new Date()}
        content={'거기 츄르 있는 사람?\n 츄르 한대만 물자...\n 츄르 한 대 정도는 괜찮잖아?'}
        heartCount={614}
        commentCount={311}
        bookmarkCount={110}
      />
      <ThumbnailList data={ThumbnailListData} />
    </S.Wrap>
  );
};
