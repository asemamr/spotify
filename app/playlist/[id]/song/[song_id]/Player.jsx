import getData from "../../../../../lib/getData";
import ControlPlayer from "../../../../ControlPlayer";
import SongInfo from "./SongInfo";



async function Player({ songId , playlistId}) {
  const spotifyApi = await getData();
  const {body: {tracks: {items:playlist}}} = await spotifyApi.getPlaylist(playlistId)
  let order;
  
  const {track} = playlist.find((track, index) => {
    order = index;
    return track.track.id === songId
  });

  // const prevTrackLink = 
  const nextTrackLink = order + 1 >= playlist.length ? playlist[0].track.id : playlist[order + 1].track.id;
  const prevTrackLink = order <= 0 ? playlist[playlist.length - 1].track.id : playlist[order - 1].track.id;
  

  const images = track.album.images;
  return ( 
    <div className="grid grid-cols-5 justify-center bg-gray-900 border-t-[1px] border-gray-800 h-full items-center px-4 py-2 relative">
      <SongInfo name={track.name} images={images} artist={track.artists[0].name} img_info={"bigger"} hidden={true} />
      <ControlPlayer src={track.preview_url} next={nextTrackLink} prev={prevTrackLink} />
    </div>
   );
}

export default Player;