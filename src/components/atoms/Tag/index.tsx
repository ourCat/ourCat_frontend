import { IComponent } from 'common';
import * as S from './style';
export interface ITagProps extends IComponent {
  inProgessPage: React.ReactChild;
  allPage: React.ReactChild;
}
export const Tag: React.FC<ITagProps> = ({ inProgessPage, allPage, ...props }) => {
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
