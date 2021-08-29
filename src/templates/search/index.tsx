import * as S from './style';
import { Button, Input } from 'components';
import { KakaoMap } from './kakaoMap';
import { useCallback, useState } from 'react';

export interface SearchTemplateProps {}

export const SearchTemplate: React.FC<SearchTemplateProps> = ({}) => {
  const [searchInput, setSearchInput] = useState('');
  const [submitKeyword, setSubmitKeyword] = useState('');

  const handleChangeSearchInput = useCallback((e: any) => {
    const str = e.target.value;
    setSearchInput(str);
  }, []);
  const handleSearchButtonClick = useCallback(() => {
    setSubmitKeyword(searchInput);
  }, [searchInput]);

  const args = {
    address: submitKeyword,
    positions: [
      { title: '우리집', latitude: 37.4838, longitude: 126.95577 },
      { title: '봉일교회', latitude: 37.483, longitude: 126.956 },
      { title: '행운빌라', latitude: 37.4834, longitude: 126.9565 },
      { title: '신한은행', latitude: 37.4838, longitude: 126.9552 },
    ],
  };

  return (
    <S.Wrap>
      <Input
        placeholder="고양이를 찾아보세요."
        margin={'0 0 10px 0'}
        onChange={e => handleChangeSearchInput(e)}
      />
      <Button label="검색" onClick={handleSearchButtonClick} filled={false} />
      <KakaoMap {...args} />
    </S.Wrap>
  );
};
