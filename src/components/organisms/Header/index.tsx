import { Label } from 'components/atoms';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <S.Wrap {...props}>
      <S.Content>
        <Label font={14}>헤더 아이콘</Label>
        <FontAwesomeIcon icon={faSearch} />
      </S.Content>
    </S.Wrap>
  );
};
