import { BottomNavigation, Header } from 'components/organisms';
import * as S from './style';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  return (
    <S.MainBackgroundImage>
      <S.WrapMainLayout {...props}>
        <Header />
        {props.children}
        <BottomNavigation />
      </S.WrapMainLayout>
    </S.MainBackgroundImage>
  );
};
