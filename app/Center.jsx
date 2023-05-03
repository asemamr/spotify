
import Image from "next/image";
import getData from "../lib/getData";
import Songs from "./Songs";
// "from-purple-600"
const colors = [
  "from-indigo-600",
  "from-blue-600",
  "from-green-600",
  "from-red-600",
  "from-yellow-600",
  "from-purple-600",
  "from-pink-600",
];

async function Center({ playlistId }) {
  const spotifyApi = await getData();
  const random = Math.floor(Math.random() * 7);
  const randomColor = colors[random];

  const {
    body: { items: playlists },
  } = await spotifyApi.getUserPlaylists();

  const playlist = playlists.find((playlist) => playlist.id === playlistId);
  const { body: { items: tracks } } = await spotifyApi.getPlaylistTracks(playlist.id);

  if (!playlist) {
    return <p>sorry :(, there is no playlist with this name</p>;
  }

  return (
    <div className="w-full" >
    {/* <div className="w-full"> */}
      <header className={`flex items-first flex-col md:flex-row md:items-end bg-gradient-to-b ${randomColor}  p-8 pt-32 pb-96 space-y-8 md:space-x-8 to-black`}>
        <Image src={
            playlist.images[0]
              ? playlist.images[0].url
              : "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fHNwb3RpZnl8ZW58MHx8fHwxNjQ2MjE2MDQ2&ixlib=rb-1.2.1&q=80&w=2000"
          }
          alt="the header of the album"
          className="object-cover shadow-2xl"
          width={240}
          height={240}
          priority
          />
        <div>
          <p className="font-bold">Playlist</p>
          <h2 className={`${playlist.name.length > 13 ? "text-3xl md:text-4xl xl:text-5xl" : "text-4xl md:text-6xl xl:text-8xl"} font-bold`}>{playlist.name}</h2>
          <p className="font-bold mt-8 text-sm">{playlist.owner.display_name} - { playlist.tracks.total} songs</p>
        </div>
      </header>
      <Songs tracks={tracks} pathname={playlistId} />
      {/* </div> */}
      </div>
  );
}

export default Center;
