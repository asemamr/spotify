import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from "@heroicons/react/24/solid";


function Controls({isPlaying, onPlayPause, onNextPrev}) {
  return (
    <div className=" flex space-x-4">
      <button onClick={() => onNextPrev("prev")}>
        <BackwardIcon className="w-8" />
      </button>
      <button onClick={() => onPlayPause()} className="bg-white rounded-full text-black flex justify-center items-center">
        {isPlaying ? (
          <PauseIcon className="w-10" />
        ) : (
          <PlayIcon className="w-10" />
        )}
      </button>
      <button onClick={() => onNextPrev("next")}>
        <ForwardIcon className="w-8" />
      </button>
    </div>
  );
}

export default Controls;
