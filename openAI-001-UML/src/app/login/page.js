"use client";
import { useCallback, useRef } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  // React 사용하는 id 개념
  const emailRef = useRef();
  const passRef = useRef();

  const onLoginSubmit = useCallback(async () => {
    await signIn("credentials", {
      username: emailRef.current,
      password: passRef.current,
      redirect: true,
      callbackUrl: "/",
    });
  }, []);

  return (
    <form>
      <input
        ref={emailRef}
        type="email"
        placeholder="이메일을 입력하세요"
      />
      <input
        ref={passRef}
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <input type="button" value="로그인" onClick={onLoginSubmit} />
    </form>
  );
};

export default LoginPage;
