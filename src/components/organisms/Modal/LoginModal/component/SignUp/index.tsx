import { useForm } from 'react-hook-form';
import * as S from './style';
import { Button, Input } from 'components/atoms';

interface ISignUpProps {
  handlerSignUp: () => void;
}

export const SignUp: React.FC<ISignUpProps> = props => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.LoginLabelContainer>
        <label htmlFor="name" className="flex_label">
          이름
        </label>
        <Input
          id="name"
          type="text"
          placeholder="이름을 입력해주세요"
          className="flex_input"
          {...register('name', { required: true })}
        />
      </S.LoginLabelContainer>
      <S.LoginLabelContainer>
        <label htmlFor="nick_name" className="flex_label">
          닉네임
        </label>
        <Input
          id="nick_name"
          type="text"
          placeholder="닉네임을 입력해주세요"
          className="flex_input"
          {...register('nick_name', { required: true })}
        />
      </S.LoginLabelContainer>
      <S.LoginLabelContainer>
        <label className="flex_label">성별</label>
        <select {...register('gender', { required: true })} className="flex_input">
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </S.LoginLabelContainer>
      <S.LoginLabelContainer>
        <label htmlFor="phone_number" className="flex_label">
          전화번호
        </label>
        <Input
          id="phone_number"
          type="tel"
          placeholder="전화번호를 입력해주세요"
          className="flex_input"
        />
      </S.LoginLabelContainer>
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
      <S.LoginLabelContainer>
        <label htmlFor="password_check" className="flex_label">
          비밀번호 확인
        </label>
        <Input
          id="password_check"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          className="flex_input"
          {...register('password_check', { required: true })}
        />
      </S.LoginLabelContainer>
      {errors.name &&
        errors.nick_name &&
        errors.gender &&
        errors.email &&
        errors.password &&
        errors.password_check && <span>This field is required</span>}
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
        onClick={props.handlerSignUp}
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
