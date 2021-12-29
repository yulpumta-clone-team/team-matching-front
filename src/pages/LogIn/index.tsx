import { fetchLogin } from '@api/userAction';
import Loading from '@components/Loading';
import { UserValidation } from '@typings/userValidation';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  // const { isLoading, error, data, isFetching } = useQuery('userData', () =>
  //   fetch('/api/users').then((res) => res.json()),
  // );
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    // watch,
  } = useForm<UserValidation>({
    defaultValues: {},
  });
  const onValid = (data: UserValidation) => {
    setError('extraError', { message: 'Server offLine.' });
  };
  const oauthGithub = useCallback(() => {
    navigate('/oauth2/authorization/github');
  }, []);
  const oauthGoogle = useCallback(() => {
    navigate('/oauth2/authorization/google');
  }, []);
  // if (isLoading) return <Loading />;

  // if (error) return 'An error has occurred: ';
  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9].com$/,
              message: '이메일 형식으로 입력해주세요.',
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input {...register('password', { required: '비빌번호를 입력해주세요.' })} placeholder="password" />
        <span>{errors?.password?.message}</span>
        <button>로그인</button>
        <span>{errors?.extraError?.message}</span>
      </form>
      <button onClick={oauthGithub}>깃허브</button>
      <button onClick={oauthGoogle}>구글</button>
    </div>
  );
}

export default Login;
