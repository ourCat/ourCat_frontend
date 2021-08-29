import { Fragment } from 'react';
import { IComponent } from 'common';
import { Image, Button } from 'components';
import * as S from './style';

export interface IProfileProps extends IComponent {
  isCat: boolean;
  data: any;
}

export const Profile: React.FC<IProfileProps> = ({ isCat, data, ...props }) => {
  return (
    <S.Wrap {...props}>
      <S.ProfileImageContainer>
        <Image src={data.profileSrc} width={'4rem'} borderRadius={'1rem'} />
        {data.profileContent.map((content: any) => {
          return (
            <S.ProfileTextContianer key={content.id}>
              <S.ProfileCounter>{content.count}</S.ProfileCounter>
              <S.ProfileText>{content.name}</S.ProfileText>
            </S.ProfileTextContianer>
          );
        })}
      </S.ProfileImageContainer>

      <S.ProfileContentContainer>
        <S.ProfileName>{data.name}</S.ProfileName>
        <S.TagContainer>
          {data.tag.map((tag: any) => {
            return (
              <S.Tag key={tag.id}>
                {tag.icon}
                {tag.text}
              </S.Tag>
            );
          })}
        </S.TagContainer>
        <S.Description>{data.description}</S.Description>
        <S.UpdateAt>{`최근 업로드된 날짜 : ${data.updateAt}`}</S.UpdateAt>
      </S.ProfileContentContainer>

      <S.ProfileButtonContainer>
        {isCat ? (
          <Fragment>
            <Button
              label={'팔로잉'}
              filled
              borderRadius={'0.5rem'}
              padding={'0.2rem 2rem'}
              margin={'0 1rem 0 0'}
            />
            <Button label={'업로드'} filled borderRadius={'0.5rem'} padding={'0.2rem 2rem'} />
          </Fragment>
        ) : (
          <Button
            label={'팔로잉'}
            filled
            borderRadius={'0.5rem'}
            padding={'0.2rem 0'}
            width={'100%'}
            margin={'0 1rem 0 0'}
          />
        )}
      </S.ProfileButtonContainer>
    </S.Wrap>
  );
};
