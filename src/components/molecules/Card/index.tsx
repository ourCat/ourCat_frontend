import * as S from './style';
import { Label, Image, Input } from 'components';
import { useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { ICON } from 'common';

export interface CardProps {
  avatarImgSrc?: string;
  title?: string;
  content?: string;
  date?: Date;
  bgImgSrc?: string;
  heartCount?: number;
  commentCount?: number;
  bookmarkCount?: number;
}

export const Card: React.FC<CardProps> = ({
  avatarImgSrc = ICON.AVATAR,
  title = '뚱땅이',
  bgImgSrc = ICON.AVATAR,
  content = '나는야 김뚱땅. 오늘도 내 짝을 찾는다.',
  date = new Date(),
  heartCount = 0,
  commentCount = 0,
  bookmarkCount = 0,
}) => {
  const router = useRouter();
  const [isExpand, setExpand] = useState(false);
  const themeContext = useContext(ThemeContext);
  const handleIconClick = useCallback(() => {
    // router.push('/cats/1');
  }, []);

  const handleMoreViewClick = useCallback(() => {
    setExpand(true);
  }, []);

  const getToday = useCallback((date: Date) => {
    var year = String(date.getFullYear())?.slice(-2);
    var month = ('0' + (1 + date.getMonth())).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);

    return `${year}.${month}.${day}`;
  }, []);

  return (
    <S.Wrap>
      <S.Header>
        <div>
          <Image src={avatarImgSrc} width={'3rem'} display={'inline'} pointer />
          <Label font={16} weight="bold" color={themeContext.colors.GRAY[100]} pointer>
            {title}
          </Label>
        </div>
        <Image src={ICON.ADDITIONAL} width={'2rem'} onClick={handleIconClick} pointer />
      </S.Header>
      <S.Content>
        <Image src={bgImgSrc} width={'100%'} pointer />
        <S.FirstLayer>
          <S.TagBox>
            <Image src={ICON.HEART} width={'2rem'} pointer />
            <Label font={16} weight="bold" color={themeContext.colors.BLACK}>
              {heartCount}
            </Label>
          </S.TagBox>
          <S.TagBox>
            <Image src={ICON.TALK} width={'2rem'} pointer />
            <Label font={16} weight="bold" color={themeContext.colors.BLACK}>
              {commentCount}
            </Label>
          </S.TagBox>
          <S.TagBox>
            <Image src={ICON.STAR} width={'2rem'} pointer />
            <Label font={16} weight="bold" color={themeContext.colors.BLACK}>
              {bookmarkCount}
            </Label>
          </S.TagBox>
          <S.TagBox>
            <Label font={14} color={themeContext.colors.GRAY[100]}>
              {getToday(date)}
            </Label>
            <Image src={ICON.USER} width={'2rem'} pointer />
          </S.TagBox>
        </S.FirstLayer>
        <S.SecondLayer>
          <div>
            <Label font={16} color={themeContext.colors.BLACK} isNewLine isViewOneLine={isExpand}>
              {content}
            </Label>
          </div>
          {!isExpand && (
            <Label
              font={16}
              color={themeContext.colors.GRAY[200]}
              pointer
              onClick={handleMoreViewClick}
            >
              ...더보기
            </Label>
          )}
        </S.SecondLayer>
        <S.ThirdLayer>
          <Image src={ICON.USER} width={'1.5rem'} pointer />
          <Input width={'100%'} placeholder={'댓글 달기'} font={16} padding={'0 0 0.2rem 0'} />
        </S.ThirdLayer>
      </S.Content>
    </S.Wrap>
  );
};
