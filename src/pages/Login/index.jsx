import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
      setError("verifiedPassword", { message: "Password is not same" }, { shouldFocus: true });
    }
    // fetch
    setError("extraError", { message: "Server offLine." });
  };
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9].com$/,
              message: "이메일 형식으로 입력해주세요.",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input {...register("password", { required: "비빌번호를 입력해주세요." })} placeholder="password" />
        <span>{errors?.password?.message}</span>
        <button>로그인</button>
        <span>{errors?.extraError?.message}</span>
      </form>
      <a href={"http://localhost:8081/oauth2/authorization/github"}>Github</a>
      <br />
      <a href={"http://localhost:8081/oauth2/authorization/google"}>Google</a>
    </div>
  );
};

export default Login;
