import { Image } from 'components';
import * as S from './style';

export interface IThumbnailListProps {
  data: any;
}

export const ThumbnailList: React.FC<IThumbnailListProps> = ({ data }) => {
  // TYPE이 이미지인지 동영상인지에 따라 재생버튼 아이콘을 배치하거나 없앤다
  // page 구현
  return (
    <S.Wrap>
      {data.data.map((imgData: any) => {
        return (
          <S.ListContainer key={imgData.id}>
            <Image src={imgData.imgUrl} width={'100%'} pointer />
          </S.ListContainer>
        );
      })}
    </S.Wrap>
  );
};
