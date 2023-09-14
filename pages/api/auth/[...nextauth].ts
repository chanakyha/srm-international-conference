import { db } from "@/backend/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET!,
  callbacks: {
    async signIn({ profile }) {
      const docRef = doc(db, "users", profile?.email!);
      const currentUser = await getDoc(docRef)
      console.log(currentUser.data());
      if (currentUser?.data()?.registered) {
        return true;
      }else{
        await setDoc(docRef, { ...profile, registered: false });
      }
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl + "/dashboard"; // Redirect to the /dashboard page
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
