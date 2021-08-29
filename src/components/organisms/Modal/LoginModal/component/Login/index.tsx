import { useForm } from 'react-hook-form';
import { Button, Input } from 'components/atoms';

import * as S from './style';

interface ILoginProps {
  handlerLogin: () => void;
}

export const Login: React.FC<ILoginProps> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.LoginLabelContainer>
        <label htmlFor="email" className="flex_label">
          이메일
        </label>
        <Input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          className="flex_input"
          {...register('email', { required: true })}
        />
      </S.LoginLabelContainer>
      <S.LoginLabelContainer>
        <label htmlFor="password" className="flex_label">
          비밀번호
        </label>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          className="flex_input"
          {...register('password', { required: true })}
        />
      </S.LoginLabelContainer>
      {errors.email && errors.password && <span>This field is required</span>}
      <Button
        onClick={() => {}}
        filled
        label="Login"
        padding="8px 12px"
        borderRadius="4px"
        width="100%"
        margin="1rem 0 0 0"
      />
      <Button
        onClick={props.handlerLogin}
        filled
        label="뒤로가기"
        padding="8px 12px"
        borderRadius="4px"
        width="100%"
        margin="1rem 0 0 0"
      />
    </form>
  );
};
