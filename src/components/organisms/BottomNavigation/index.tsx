import * as S from './style';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCompass, faPlusSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';

type DataType = {
  id: string;
  url: string;
  icon: IconDefinition;
};

const BottomNavigationDatas: DataType[] = [
  {
    id: 'home',
    url: '/',
    icon: faHome,
  },
  {
    id: 'search',
    url: '/search',
    icon: faCompass,
  },
  {
    id: 'insert',
    url: '/insert',
    icon: faPlusSquare,
  },
  {
    id: 'alarm',
    url: '/alarm',
    icon: faBell,
  },
  {
    id: 'me',
    url: '/me',
    icon: faUser,
  },
];

export interface BottomNavigationProps {}

export const BottomNavigation: React.FC<BottomNavigationProps> = props => {
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  const [selected, setSelected] = useState<string>('home');

  useEffect(() => {
    const defaultSelectedItem = BottomNavigationDatas.find((item: DataType) =>
      router.pathname.includes(item.id),
    );
    if (defaultSelectedItem) setSelected(defaultSelectedItem.id);
    else setSelected('home');
  }, []);

  const onClickIcon = useCallback((id: string) => {
    setSelected(id);
    router.push(`/${id === 'home' ? '' : id}`);
  }, []);

  return (
    <S.Wrap {...props}>
      <S.Container>
        <S.Content>
          {BottomNavigationDatas.map((item: DataType) => (
            <FontAwesomeIcon
              key={item.id}
              {...item}
              onClick={() => onClickIcon(item.id)}
              color={selected === item.id ? themeContext.colors.MAIN : null}
              size={'lg'}
            />
          ))}
        </S.Content>
      </S.Container>
    </S.Wrap>
  );
};
