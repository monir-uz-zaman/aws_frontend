import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { getBaseRoute } from "@/lib/getBaseRoute";

let res;
export const authOptions = {
  // Configure one or more authentication providers
  secret: "my-secret-string",

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log(credentials);

          let url = ` ${getBaseRoute}/login`;
          const data = {
            username: credentials.username,
            password: credentials.password,
          };

          res = await axios.post(url, data);

          let user = res?.data;

          if (credentials?.username * 1 !== 10002) {
            user.role = "manager";
          }

          user.id = credentials.username * 1;
          console.log("user", user?.accessToken, { algorithm: "HS256" });
          let token = "SomeRandomKey";
          // let decoded = jwt.verify(user?.accessToken, token);

          // console.log("decoded", decoded);

          console.log(res?.data);

          if (res?.status === 200) {
            return user;
          } else {
            throw new Error(
              res?.data?.msg || "Something went wrong.Please try later"
            );
          }
        } catch (error) {
          console.log(error, "hlello");
          throw new Error(
            res?.data?.msg || "Something went wrong.Please try later"
          );
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // here token is value returned from above callback jwt
      session.user = token;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
