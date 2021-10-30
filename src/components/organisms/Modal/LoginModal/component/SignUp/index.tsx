import { useForm } from 'react-hook-form';
import * as S from './style';
import { Button, Input } from 'components/atoms';
import { SignUpAPI } from 'api/setting';

interface ISignUpProps {
  handlerBackPage: () => void;
}

interface SubmitDataProps {
  email: string;
  gender: string;
  mobileNo: string;
  nick_name: string;
  password: string;
  password_check: string;
}

export const SignUp: React.FC<ISignUpProps> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: SubmitDataProps) => {
    SignUpAPI({
      nickname: data.nick_name,
      email: data.email,
      mobileNo: data.mobileNo,
      password: data.password,
      passwordConfirm: data.password_check,
      gender: data.gender.substring(0, 1).toUpperCase(),
    })
      .then(res => {
        if (res.status === 201) {
          localStorage.setItem('isLogin', 'true');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <S.LoginLabelContainer>
        <Input
          id="nick_name"
          type="text"
          placeholder="닉네임"
          className="flex_input"
          {...register('nick_name', { required: true })}
        />
      </S.LoginLabelContainer>
      <S.LoginLabelContainer>
        <select {...register('gender', { required: true })} className="flex_input">
          <option value="other">성별</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
      </S.LoginLabelContainer>
      <S.LoginLabelContainer>
        <Input
          id="phone_number"
          type="tel"
          placeholder="전화번호"
          className="flex_input"
          {...register('mobileNo', { required: true })}
        />
      </S.LoginLabelContainer>
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
      <S.LoginLabelContainer>
        <Input
          id="password_check"
          type="password"
          placeholder="비밀번호 확인"
          className="flex_input"
          {...register('password_check', { required: true })}
        />
      </S.LoginLabelContainer>
      {errors.name &&
        errors.nick_name &&
        errors.gender &&
        errors.email &&
        errors.password &&
        errors.password_check && (
          <S.ErrorContextContainer>This field is required</S.ErrorContextContainer>
        )}
      <S.ButtonContainer>
        <Button
          onClick={() => {}}
          filled
          label="Login"
          padding="8px 12px"
          borderRadius="4px"
          width="100%"
        />
        <Button
          onClick={props.handlerBackPage}
          filled
          label="뒤로가기"
          padding="8px 12px"
          borderRadius="4px"
          width="100%"
          backgroundColor="gray"
        />
      </S.ButtonContainer>
    </form>
  );
};
