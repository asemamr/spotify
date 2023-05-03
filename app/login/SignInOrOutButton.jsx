"use client"
import { signIn, signOut } from "next-auth/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function SignInOrOutButton({ providerName, providerId, state }) {
  if (state === "signOut") {
    return <button className="bg-green-500 text-white font-bold rounded-md p-2 capitalize hover:shadow-md hover:shadow-slate-400 transition-shadow w-fit" onClick={()=> signOut()}>Signout</button>
  }
  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" className="w-40" alt="" />
      <button onClick={() => signIn(providerId, {callbackUrl: "/"})} className="bg-green-500 text-white font-bold rounded-md p-2 capitalize hover:shadow-md hover:shadow-slate-400 transition-shadow">
      <ArrowRightOnRectangleIcon className="w-8 inline-block mr-2" /> signin with {providerName}
      </button>
    </div>
  );
}


