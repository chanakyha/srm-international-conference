import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

const Login = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <Button className="w-full" onClick={() => signOut()}><span className="text-mont">Logout/</span></Button>
      ) : (
        <Button className="w-full" onClick={() => signIn("google")}><span className="text-mont">Login/</span></Button>
      )}
    </div>
  );
};

<Button className="w-full">
<span className="text-mont">
    Register
</span>
</Button>

export default Login;

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session?.user?.name) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
