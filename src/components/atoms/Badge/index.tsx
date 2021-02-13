import { IComponent } from 'common';
import * as S from './style';
export interface IBadgeProps extends IComponent {
  inProgessPage: React.ReactChild;
  allPage: React.ReactChild;
}
export const Badge: React.FC<IBadgeProps> = ({ inProgessPage, allPage, ...props }) => {
  return (
    <S.Wrap {...props}>
      <S.Container>
        {inProgessPage}
        <S.Bar>/</S.Bar>
        {allPage}
      </S.Container>
    </S.Wrap>
  );
};
