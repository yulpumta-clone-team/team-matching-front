import React from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { OAUTH_URL } from 'utils/route';
import { loginUser } from '_actions/user_action';

function Login() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['token']);
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
    console.log(data);
    setCookie('token', 'thisistoken', {
      secure: true,
    });
    // dispatch(loginUser(data));
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
        <input
          {...register('password', { required: '비빌번호를 입력해주세요.' })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <button>로그인</button>
        <span>{errors?.extraError?.message}</span>
      </form>
      <a href={OAUTH_URL.GITHUB}>Github</a>
      <br />
      <a href={OAUTH_URL.GOOGLE}>Google</a>
    </div>
  );
}

export default Login;
