import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { UserRole } from "@prisma/client";
import { db } from "@/lib/db";

import authConfig from "@/auth.config";

import { getUserById } from "@/data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user }) {
      const existinUser = await getUserById(user?.id);
      if (!existinUser || !existinUser?.emailVerified) {
        return false;
      }

      return true;
    },
    async session({ session, token }) {
      if (token?.sub && session?.user) {
        session.user.id = token.sub;
      }
      if (token?.role && session?.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    // During login here jwt token generate;
    async jwt({ token }) {
      if (!token.sub) return token;

      const existinUser = await getUserById(token.sub);

      if (!existinUser) return token;

      token.role = existinUser?.role;
      // token.sub = ;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
