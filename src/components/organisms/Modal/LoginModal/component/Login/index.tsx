import { useForm } from 'react-hook-form';
import { Button, Input } from 'components/atoms';

import * as S from './style';
import { LoginAPI } from 'api/setting';

interface ILoginProps {
  handlerBackPage: () => void;
}

interface SubmitDataProps {
  email: string;
  password: string;
}

export const Login: React.FC<ILoginProps> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: SubmitDataProps) => {
    LoginAPI({ loginId: data.email, password: data.password })
      .then(res => {
        if (res.status === 200) localStorage.setItem('isLogin', 'true');
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <S.LoginLabelContainer>
        <Input
          id="email"
          type="email"
          placeholder="이메일"
          className="flex_input"
          {...register('email', { required: true })}
        />
      </S.LoginLabelContainer>
      <S.LoginLabelContainer>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호"
          className="flex_input"
          {...register('password', { required: true })}
        />
      </S.LoginLabelContainer>
      {errors.email && errors.password && (
        <S.ErrorContextContainer>This field is required</S.ErrorContextContainer>
      )}
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
        onClick={props.handlerBackPage}
        filled
        label="뒤로가기"
        padding="8px 12px"
        borderRadius="4px"
        width="100%"
        margin="0.5rem 0 0 0"
        backgroundColor="gray"
      />
    </form>
  );
};
