import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_KEY as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
});
