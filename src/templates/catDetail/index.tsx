import * as S from './style';
import { Profile } from 'components';
import { sample } from 'common';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
    </S.Wrap>
  );
};
