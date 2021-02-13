import { Label } from 'components/atoms';
import * as S from './style';

export interface HeaderPCProps {}

export const HeaderPC: React.FC<HeaderPCProps> = props => {
  return (
    <S.WrapHeaderPC {...props}>
      <Label font={18} weight="bold">
        PC 헤더
      </Label>
    </S.WrapHeaderPC>
  );
};
