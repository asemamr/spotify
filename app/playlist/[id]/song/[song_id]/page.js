import Player from "./Player";
import { headers } from "next/headers";
export default function page({ params: { song_id } }) {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || "";
  const arr = header_url.split("/");
  const playlistId = arr[arr.length - 3]

  return <div className="text-white bg-gradient-to-b from-black to-gray-900 h-[90px]">
    <Player playlistId={playlistId} songId={song_id}/>
  </div>
}