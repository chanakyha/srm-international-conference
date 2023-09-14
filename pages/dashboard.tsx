// pages/dashboard.tsx

import { db } from '@/backend/firebase';
import LandingPageLayout from '@/layout/LandingPageLayout';
import { doc, getDoc, getDocs } from 'firebase/firestore';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface User {
  email: string;
  registered: boolean;
  name: string;
  mobile: string;
  category: string;
  organization: string;
}

interface DashboardProps {
  user: User | null;
}

function Dashboard({ user }: DashboardProps) {
  const router = useRouter();
  console.log(user);

  // if (!user || !user.registered) {
  //   console.log('Not registered');
  //   router.push('/register');
  // }

  return (
    <LandingPageLayout>
      <section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto min-h-[calc(100vh-5rem)] bg-green-500'>

      </section>
    </LandingPageLayout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/', 
        permanent: false,
      },
    };
  }
  const email = session?.user?.email;
  // @ts-ignore
  const docRef = doc(db, "users", email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.data()?.registered) {
    return {
      redirect: {
        destination: '/register', 
        permanent: false,
      },
    };
  }


  const user: any = session ? { user: docSnap.data() } : null;

  return {
    props: {
      user,
    },
  };
}

export default Dashboard;
