import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import brand from "../../images/Mygram.png";

function Signin({ providers }) {
  const router = useRouter();
  return (
    <>
      {Object.values(providers).map((provider) => {
        return (
          <div
            key={provider.name}
            className="h-screen w-screen flex items-center justify-center px-4"
          >
            <div className="flex flex-col items-center space-y-10">
              <span onClick={() => router.push("/")}>
                <Image src={brand} width={300} />
              </span>
              <button
                className="bg-blue-400 text-white font-semibold active:scale-105 transition transform duration-150 outline-none border-none p-2 m-2 rounded-lg"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign In with {provider.name}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default Signin;