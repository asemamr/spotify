import { stringify } from "querystring";
import getData from "../lib/getData";
import Link from "next/link";
import stringCollapse from "../lib/stringCollapse";

async function PlayListCompo() {
  const spotifyApi = await getData();

  const {
    body: { items: playlists },
  } = await spotifyApi.getUserPlaylists();
  

  return (
    <div className=" flex-grow flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500  scrollbar-track-black text-sm lg:text-base">
      {playlists.map((playlist) => {
        return (
          <Link
            href={`/playlist/${playlist.id}`}
            key={playlist.id}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            {stringCollapse(playlist.name, 19)}
          </Link>
        );
      })}
    </div>
  );
}

export default PlayListCompo;
