import { Image } from 'components';
import { ThumbnailListData } from 'common';
import * as S from './style';

export interface IThumbnailListProps {
  data: any;
}

export const ThumbnailList: React.FC<IThumbnailListProps> = ({ data }) => {
  // 이미지 컴포를 이용해서 렌더링
  // TYPE이 이미지인지 동영상인지에 따라 재생버튼 아이콘을 배치하거나 없앤다
  // 한줄에 3개의 이미지 렌더링하도록 레이아웃 구현
  return (
    <S.Wrap>
      {ThumbnailListData.data.map(imgData => {
        return <S.ListContainer key={imgData.id}></S.ListContainer>;
      })}
    </S.Wrap>
  );
};
