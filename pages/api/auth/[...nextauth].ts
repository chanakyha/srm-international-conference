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
      
      if (profile?.email==='srmtexus2k23@gmail.com'){
        return true;
      }
      else if(profile?.email?.endsWith('@srmist.edu.in')) {
        const docRef = doc(db, "reviewers", profile?.email!);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          await setDoc(docRef, { ...profile }, { merge: true });
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl + "/dashboard"; 
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
