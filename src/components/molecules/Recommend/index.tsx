import { IComponent } from 'common';
import { Image, Label } from 'components';
import * as S from './style';

export interface IRecommendProps extends IComponent {
  img: string;
  labelText: string;
  onClick: React.ReactEventHandler<HTMLElement>;
}

export const Recommend: React.FC<IRecommendProps> = ({
  img = '/images/img.png',
  labelText,
  onClick,
  ...props
}) => {
  return (
    <S.Wrap onClick={onClick} {...props}>
      <Image src={img} borderRadius={'50%'} width={'70%'} display={'block'} margin={'0 auto'} />
      <S.LabelContainer>
        <Label>{labelText}</Label>
      </S.LabelContainer>
    </S.Wrap>
  );
};
