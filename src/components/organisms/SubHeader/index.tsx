import * as S from './style';
import { Label } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCog } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export interface SubHeaderProps {}

export const SubHeader: React.FC<SubHeaderProps> = ({}) => {
  const router = useRouter();
  const handleBackIconClick = () => {
    router.back();
  };
  const handleSettingIconClick = () => {
    router.push('/withdraw');
  };

  return (
    <S.Wrap>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="lg"
        cursor="pointer"
        onClick={handleBackIconClick}
      />
      <Label font={18}>뚱땅맘</Label>
      <FontAwesomeIcon icon={faCog} size="lg" cursor="pointer" onClick={handleSettingIconClick} />
    </S.Wrap>
  );
};
