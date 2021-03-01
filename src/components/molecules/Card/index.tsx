import { Label, Image, Input } from 'components';
import { useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { ICON, PAGE } from 'common';
import * as S from './style';

export interface CardProps {
  avatarImgSrc?: string;
  title: string;
  content: string;
  date: Date;
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
  date,
  heartCount = 0,
  commentCount = 0,
  bookmarkCount = 0,
}) => {
  const router = useRouter();
  const [isExpand, setExpand] = useState(false);
  const themeContext = useContext(ThemeContext);
  const handleIconClick = useCallback(() => {
    router.push(PAGE.CAT_DETAIL(1));
  }, []);

  const handleMoreViewClick = useCallback(() => {
    setExpand(true);
  }, []);

  const getToday = useCallback((date: Date) => {
    const year = String(date.getFullYear())?.slice(-2);
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}.${month}.${day}`;
  }, []);

  return (
    <S.Wrap>
      <S.Header>
        <S.Profile>
          <Image src={avatarImgSrc} width={'3rem'} display={'inline'} pointer />
          <Label font={16} weight="bold" color={themeContext.colors.GRAY[100]} pointer>
            {title}
          </Label>
        </S.Profile>
        <Image src={ICON.ADDITIONAL} width={'2rem'} onClick={handleIconClick} pointer />
      </S.Header>
      <S.CardBody>
        {/**
         * 추후 Image Component를 Banner Component로 교체
         */}
        <Image src={bgImgSrc} width={'100%'} pointer />
        <S.CardInfo>
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
        </S.CardInfo>
        <S.CardContent>
          <Label font={16} color={themeContext.colors.BLACK} isNewLine isViewOneLine={!isExpand}>
            {content}
          </Label>
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
        </S.CardContent>
        <S.CardComment>
          <Image src={ICON.USER} width={'1.5rem'} pointer />
          <Input width={'100%'} placeholder={'댓글 달기'} font={16} padding={'0 0 0.2rem 0'} />
        </S.CardComment>
      </S.CardBody>
    </S.Wrap>
  );
};
