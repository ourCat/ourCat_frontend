import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Profile, ThumbnailList } from 'components';
import { ThumbnailListData, sample } from 'common';
import * as S from './style';

export interface CatDetailTemplateProps {}

export const CatDetailTemplate: React.FC<CatDetailTemplateProps> = ({}) => {
  const router = useRouter();
  const catId = Number(router.query.catId);
  useEffect(() => {
    if (catId) console.log(catId);
  }, [catId]);

  return (
    <S.Wrap>
      <Profile isCat={false} data={sample} />
      <ThumbnailList data={ThumbnailListData} />
    </S.Wrap>
  );
};
