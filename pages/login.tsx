import { getProviders, signIn } from "next-auth/react"

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png" alt="" />

      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button className="bg-green-400 text-white p-5 rounded-full cursor-pointer" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  )
}

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}