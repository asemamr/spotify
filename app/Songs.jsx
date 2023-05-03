import Song from "./playlist/[id]/song/[song_id]/Song";
import HeaderTable from "./HeaderTable";

async function Songs({ tracks, pathname }) {

  return (
    <div className="w-full bg-transparent relative bottom-96 px-8 text-slate-400">
      <HeaderTable />
      <div className="mt-4">
        {tracks.map((track, i) => {
          return (
            <Song
              order={(i + 1).toString()}
              key={track.track.id}
              track={track}
              pathname={pathname}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Songs;
