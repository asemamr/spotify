import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import SignInOrOutButton from "./SignInOrOutButton"

async function Login() {
  const session = await getServerSession(authOptions)
  const providers = await getProviders();

  const array = Object.values(providers).map(provider => provider.name);

  return ( 
    <div className="flex flex-col bg-black h-screen justify-center items-center">
      <p>sign in </p>
      {Object.values(providers).map((provider) => {
        return (
          <SignInOrOutButton key={provider.name} providerName={provider.name} providerId={provider.id} />
        )
      })
      }
    </div>
   );
}

export default Login;