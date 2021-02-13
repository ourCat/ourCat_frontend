import { Label } from 'components/atoms';
import * as S from './style';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <S.WrapHeader {...props}>
      <Label font={14} weight={'bold'}>
        모바일 헤더
      </Label>
    </S.WrapHeader>
  );
};
