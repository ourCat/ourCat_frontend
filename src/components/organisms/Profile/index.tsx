import { Fragment } from 'react';
import { IComponent } from 'common';
import { Image, Button, Label } from 'components';
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
              <Label font={20} pointer={true}>
                {content.count}
              </Label>
              <Label font={13} pointer={true}>
                {content.name}
              </Label>
            </S.ProfileTextContianer>
          );
        })}
      </S.ProfileImageContainer>

      <S.ProfileContentContainer>
        <Label font={18} margin={'0 0 0.2rem 0'}>
          {data.name}
        </Label>
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
        <Label font={14} margin={'0 0 0.2rem 0'}>
          {data.description}
        </Label>
        <Label font={12} color={'#999999'}>{`최근 업로드된 날짜 : ${data.updateAt}`}</Label>
      </S.ProfileContentContainer>

      <S.ProfileButtonContainer>
        {isCat ? (
          <Fragment>
            <Button
              label={'팔로잉'}
              filled
              borderRadius={'0.5rem'}
              padding={'0.2rem 2rem'}
              margin={'0 0.5rem 0 0'}
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
            margin={'0 0.5rem 0 0'}
          />
        )}
      </S.ProfileButtonContainer>
    </S.Wrap>
  );
};
