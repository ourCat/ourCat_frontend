import * as S from './style';
import { Button, Input } from 'components';
import { KakaoMap } from './kakaoMap';
import { useCallback, useRef, useState } from 'react';

export interface SearchTemplateProps {}

export const SearchTemplate: React.FC<SearchTemplateProps> = ({}) => {
  const [submitKeyword, setSubmitKeyword] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchButtonClick = useCallback(() => {
    const searchInputValue = searchInputRef.current?.value;
    if (searchInputValue) setSubmitKeyword(searchInputValue);
  }, [searchInputRef]);

  const args = {
    address: submitKeyword,
    positions: [
      { title: '우리집', latitude: 37.4838, longitude: 126.95577, cat: '냥이' },
      { title: '봉일교회', latitude: 37.483, longitude: 126.956, cat: '뚱땅이' },
      { title: '행운빌라', latitude: 37.4834, longitude: 126.9565, cat: '둥구' },
      { title: '신한은행', latitude: 37.4838, longitude: 126.9552, cat: '해피' },
    ],
  };

  return (
    <S.Wrap>
      <Input
        placeholder="고양이를 찾아보세요."
        margin={'0 0 10px 0'}
        onKeyPress={e => e.key === 'Enter' && handleSearchButtonClick()}
        ref={searchInputRef}
      />
      <Button label="검색" onClick={handleSearchButtonClick} filled={false} />
      {submitKeyword && <KakaoMap {...args} />}
    </S.Wrap>
  );
};
