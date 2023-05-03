"use client"


import { useRouter } from "next/navigation";
function SongLink({ link, children }) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(link)} className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 space-x-8 p-2 items-center hover:bg-slate-600 rounded-lg cursor-pointer transition-colors">
    {children}
  </div> );
}

export default SongLink;