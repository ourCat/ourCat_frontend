import { Image } from 'components/atoms';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <S.Wrap {...props}>
      <S.Container>
        <S.Content>
          <Image src={'/images/ourCatLogo.png'} width="64px" />
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </S.Content>
      </S.Container>
    </S.Wrap>
  );
};
