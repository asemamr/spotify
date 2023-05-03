"use client"
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";


function AccountPrev({name}) {
  return (
    <header className="bg-black absolute top-5 right-5 rounded-full p-2  opacity-80 hover:opacity-90 hover:cursor-pointer">
      <div className="flex space-x-3 items-center" onClick={signOut}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
          className="w-10 h-10 object-cover rounded-full"
          alt="the profile"
        />
        <h2 className="font-bold">{name}</h2>
        <ChevronDownIcon className="w-5 h-5" />
      </div>
    </header>
  );
}

export default AccountPrev;
