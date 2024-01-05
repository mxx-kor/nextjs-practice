import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'User Name',
          type: 'text',
        },
      },
      async authorize(credentials) {
        // 중복 가능성이 있지만 연습을 위해 시간으로 id를 생성합니다.
        const timestamp = new Date().getTime().toString();
        const uniqueId = timestamp.slice(timestamp.length - 10);
        const user = {
          name: credentials?.username,
          id: uniqueId,
        };

        if (user) {
          return user;
        }

        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user};
    },
    async session({session, token}) {
      session.user = token;
      return session;
    },
  },
});

export {handler as GET, handler as POST};
