import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCompass, faPlusSquare, faUser } from '@fortawesome/free-regular-svg-icons';

export interface BottomNavigationProps {}

export const BottomNavigation: React.FC<BottomNavigationProps> = props => {
  return (
    <S.Wrap {...props}>
      <S.Container>
        <S.Content>
          <S.IconBox>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </S.IconBox>
          <S.IconBox>
            <FontAwesomeIcon icon={faCompass} size="lg" />
          </S.IconBox>
          <S.IconBox>
            <FontAwesomeIcon icon={faPlusSquare} size="lg" />
          </S.IconBox>
          <S.IconBox>
            <FontAwesomeIcon icon={faBell} size="lg" />
          </S.IconBox>
          <S.IconBox>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </S.IconBox>
        </S.Content>
      </S.Container>
    </S.Wrap>
  );
};
