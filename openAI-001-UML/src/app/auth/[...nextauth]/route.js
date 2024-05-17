import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const hander = NextAuth({
  pages: {
    signIn: "/login",
    singOut: "/logout",
    error: "/auth/error",
    verifyRequest: "/auth-verify-request",
    newUser: "/join",
  },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "이메일",
          type: "email",
          placeholder: "Email 을 입력하세요",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholder: "비밀번호를 입력하세요",
        },
      },
      async authorize(_, req) {
        const user = {
          id: "1",
          name: "callor",
          email: "callor@callor.com",
          password: "12345",
        };
        if (user) return user;
        else return null;
      },
    }),
  ],
});

export { hander as GET, hander as POST };
