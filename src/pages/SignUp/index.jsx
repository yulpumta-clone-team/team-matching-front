import React from 'react';
import { useForm } from 'react-hook-form';

function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    // watch,
  } = useForm({
    defaultValues: {},
  });
  const onValid = async (data) => {
    const { password, verifiedPassword } = data;
    if (password !== verifiedPassword) {
      setError('verifiedPassword', { message: 'Password is not same' }, { shouldFocus: true });
    }
    // fetch
    setError('extraError', { message: 'Server offLine.' });
  };
  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
              message: '이메일 형식으로 입력해주세요.',
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input {...register('name', { required: '이름을 입력해주세요.' })} placeholder="name" />
        <span>{errors?.name?.message}</span>
        <input
          {...register('nickname', {
            required: '2자리 이상 닉네임을 입력해주세요.',
            minLength: 2,
            validate: {
              // async로 만들어서  비동기로 서버에서 요청받을 수도 있음
              // noYun: (value) => (value.includes('yun') ? 'no yun allowed' : true),
              // noHo: (value) => (value.includes('ho') ? 'no ho allowed' : true),
            },
          })}
          placeholder="nickname"
        />
        <span>{errors?.nickname?.message}</span>
        <input
          {...register('password', {
            required: '4자리 이상 비밀번호를 입력해주세요.',
            minLength: 4,
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('verifiedPassword', {
            required: '비밀번호가 일치하지 않습니다.',
          })}
          placeholder="verifiedPassword"
        />
        <span>{errors?.verifiedPassword?.message}</span>
        <button>가입</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default SignUp;
