import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "secret",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_KEY as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.sub as string;
      // console.log("token", token);
      return session;
    },
  },
});
