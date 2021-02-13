import { IComponent } from 'common';
import { Image, Label } from 'components';
import * as S from './style';

export interface IRecommendProps extends IComponent {
  img: string;
  label: string;
}

export const Recommend: React.FC<IRecommendProps> = ({
  img = '/images/img.png',
  label,
  ...props
}) => {
  return (
    <S.Wrap {...props}>
      <Image src={img} borderRadius={'50%'} {...props} />
      <S.LabelContainer>
        <Label>{label}</Label>
      </S.LabelContainer>
    </S.Wrap>
  );
};
